import { computeGmailCategoryLabelId } from 'src/modules/messaging/utils/compute-gmail-category-label-id';

describe('computeGmailCategoryLabelId', () => {
  it('should return correct category label id', () => {
    const result = computeGmailCategoryLabelId('CATEGORY1');

    expect(result).toBe('CATEGORY_CATEGORY1');
  });
});
