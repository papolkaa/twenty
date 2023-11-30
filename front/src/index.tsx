import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ApolloProvider } from '@/apollo/components/ApolloProvider';
import { ClientConfigProvider } from '@/client-config/components/ClientConfigProvider';
import { RecoilDebugObserverEffect } from '@/debug/components/RecoilDebugObserver';
import { ErrorBoundary } from '@/errors/components/ErrorBoundary';
import { ApolloMetadataClientProvider } from '@/object-metadata/components/ApolloMetadataClientProvider';
import { ObjectMetadataItemsProvider } from '@/object-metadata/components/ObjectMetadataItemsProvider';
import { DialogManager } from '@/ui/feedback/dialog-manager/components/DialogManager';
import { DialogManagerScope } from '@/ui/feedback/dialog-manager/scopes/DialogManagerScope';
import { SnackBarProvider } from '@/ui/feedback/snack-bar-manager/components/SnackBarProvider';
import { SnackBarProviderScope } from '@/ui/feedback/snack-bar-manager/scopes/SnackBarProviderScope';
import { AppThemeProvider } from '@/ui/theme/components/AppThemeProvider';
import { ThemeType } from '@/ui/theme/constants/theme';
import { UserProvider } from '@/users/components/UserProvider';

import '@emotion/react';

import { PageChangeEffect } from './effect-components/PageChangeEffect';
import { App } from './App';

import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ErrorBoundary>
    <RecoilRoot>
      <RecoilDebugObserverEffect />
      <BrowserRouter>
        <SnackBarProviderScope snackBarManagerScopeId="snack-bar-manager">
          <ApolloProvider>
            <HelmetProvider>
              <ClientConfigProvider>
                <UserProvider>
                  <ApolloMetadataClientProvider>
                    <ObjectMetadataItemsProvider>
                      <PageChangeEffect />
                      <AppThemeProvider>
                        <SnackBarProvider>
                          <DialogManagerScope dialogManagerScopeId="dialog-manager">
                            <DialogManager>
                              <StrictMode>
                                <App />
                              </StrictMode>
                            </DialogManager>
                          </DialogManagerScope>
                        </SnackBarProvider>
                      </AppThemeProvider>
                    </ObjectMetadataItemsProvider>
                  </ApolloMetadataClientProvider>
                </UserProvider>
              </ClientConfigProvider>
            </HelmetProvider>
          </ApolloProvider>
        </SnackBarProviderScope>
      </BrowserRouter>
    </RecoilRoot>
  </ErrorBoundary>,
);

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}
