import { Injectable, Logger } from '@nestjs/common';

import Stripe from 'stripe';

import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { User } from 'src/core/user/user.entity';

@Injectable()
export class StripeService {
  protected readonly logger = new Logger(StripeService.name);
  private readonly stripe: Stripe;

  constructor(private readonly environmentService: EnvironmentService) {
    this.stripe = new Stripe(
      this.environmentService.getBillingStripeApiKey(),
      {},
    );
  }

  constructEventFromPayload(signature: string, payload: Buffer) {
    const webhookSecret =
      this.environmentService.getBillingStripeWebhookSecret();

    return this.stripe.webhooks.constructEvent(
      payload,
      signature,
      webhookSecret,
    );
  }

  async getProductPrices(stripeProductId: string) {
    return this.stripe.prices.search({
      query: `product: '${stripeProductId}'`,
    });
  }

  async updateSubscriptionItem(stripeItemId: string, quantity: number) {
    await this.stripe.subscriptionItems.update(stripeItemId, { quantity });
  }

  async cancelSubscription(stripeSubscriptionId: string) {
    await this.stripe.subscriptions.cancel(stripeSubscriptionId);
  }

  async createBillingPortalSession(
    stripeCustomerId: string,
    returnUrl?: string,
  ): Promise<Stripe.BillingPortal.Session> {
    return await this.stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: returnUrl ?? this.environmentService.getFrontBaseUrl(),
    });
  }

  async createCheckoutSession(
    user: User,
    priceId: string,
    quantity: number,
    successUrl?: string,
    cancelUrl?: string,
    stripeCustomerId?: string,
  ): Promise<Stripe.Checkout.Session> {
    return await this.stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      mode: 'subscription',
      subscription_data: {
        metadata: {
          workspaceId: user.defaultWorkspace.id,
        },
        trial_period_days:
          this.environmentService.getBillingFreeTrialDurationInDays(),
      },
      automatic_tax: { enabled: true },
      tax_id_collection: { enabled: true },
      customer: stripeCustomerId,
      customer_update: stripeCustomerId ? { name: 'auto' } : undefined,
      customer_email: stripeCustomerId ? undefined : user.email,
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
  }

  async collectLastInvoice(stripeSubscriptionId: string) {
    const subscription = await this.stripe.subscriptions.retrieve(
      stripeSubscriptionId,
      { expand: ['latest_invoice'] },
    );
    const latestInvoice = subscription.latest_invoice;

    if (
      !(
        latestInvoice &&
        typeof latestInvoice !== 'string' &&
        latestInvoice.status === 'draft'
      )
    ) {
      return;
    }
    await this.stripe.invoices.pay(latestInvoice.id);
  }
}
