'use client'

import { EarthoOneProvider } from '@eartho/one-client-react';


const onRedirectCallback = (appState) => {
    Router.replace(appState?.returnTo || '/');
  };

export default function AuthProvider({ children }) {
    return (
        <EarthoOneProvider
        domain={process.env.NEXT_PUBLIC_DOMAIN}
        clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
        onRedirectCallback={onRedirectCallback}
        authorizationParams={{
          redirect_uri: typeof window !== 'undefined' && window.location.origin,
        }}
      >
            {children}
        </EarthoOneProvider>
    )
}