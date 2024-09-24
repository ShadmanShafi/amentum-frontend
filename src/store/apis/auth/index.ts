// import Keycloak from 'keycloak-js';

// const {
//   VITE_KEYCLOAK_REALM,
//   VITE_KEYCLOAK_AUTH_SERVER_URL,
//   VITE_KEYCLOAK_SSL_REQUIRED,
//   VITE_KEYCLOAK_RESOURCE,
//   VITE_KEYCLOAK_PUBLIC_CLIENT,
//   VITE_KEYCLOAK_CONFIDENTIAL_PORT,
// } = import.meta.env;

// const keycloakConfig = {
//   realm: VITE_KEYCLOAK_REALM,
//   url: VITE_KEYCLOAK_AUTH_SERVER_URL,
//   clientId: VITE_KEYCLOAK_RESOURCE,
//   'ssl-required': VITE_KEYCLOAK_SSL_REQUIRED,
//   'public-client': VITE_KEYCLOAK_PUBLIC_CLIENT === 'true',
//   'confidential-port': parseInt(String(VITE_KEYCLOAK_CONFIDENTIAL_PORT), 10),
// };

// const _kc = new Keycloak(keycloakConfig);

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
// const initKeycloak = (onAuthenticatedCallback: () => void) => {
//   _kc
//     .init({
//       onLoad: 'check-sso',
//       // silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
//       pkceMethod: 'S256',
//     })
//     .then((authenticated) => {
//       if (!authenticated) {
//         console.log('user is not authenticated..!');
//       }
//       onAuthenticatedCallback();
//     })
//     .catch(console.error);
// };

// const doLogin = async () => await _kc.login(); // Arrow function avoids unintentional scoping of `this`

// const doLogout = async () => await _kc.logout(); // Arrow function avoids unintentional scoping of `this`

// const getToken = () => _kc.token;

// const getTokenParsed = (): any => _kc.tokenParsed;

// const isLoggedIn = () => !!_kc.token;

// const updateToken = async (
//   successCallback:
//     | ((value: boolean) => boolean | PromiseLike<boolean>)
//     | null
//     | undefined
// ) => await _kc.updateToken(5).then(successCallback).catch(doLogin);

// const getUsername = () => _kc.tokenParsed?.preferred_username;

// const hasRole = (roles: any[]) =>
//   roles.some((role: string) => _kc.hasRealmRole(role));

// const UserService = {
//   initKeycloak,
//   doLogin,
//   doLogout,
//   isLoggedIn,
//   getToken,
//   getTokenParsed,
//   updateToken,
//   getUsername,
//   hasRole,
// };

// export default UserService;
