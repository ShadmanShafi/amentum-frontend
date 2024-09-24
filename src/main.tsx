import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import { StyleProvider } from '@ant-design/cssinjs';

import Page from '@/page';
import ErrorBoundary from '@/components/ErrorBoundary';

import { store } from '@/store';
// import UserService from './store/apis/auth';

import './styles/_index.scss';

// const logger: LoggerCls = Logger({
//   level: process.env.NODE_ENV === 'production' ? 'ERROR' : 'INFO',
//   name: 'CUSTOMER_PORTAL_APP',
//   showTime: true,
// });

// window.logger = logger;

// if ($__SENTRY__$) {
//   import('./sentry').then(({ default: InitSentry }) => {
//     InitSentry();
//   });
// }

const renderApp = () =>
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <StyleProvider>
        <ErrorBoundary>
          <Provider store={store}>
            <Page />
          </Provider>
        </ErrorBoundary>
      </StyleProvider>
    </React.StrictMode>
  );

// UserService.initKeycloak(renderApp);
renderApp();
