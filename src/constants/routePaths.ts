export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTRATION: "/registration",
  RESET_PASSWORD: "/reset-password",
  VPS: "/server-management/servers/vps",
  VDS: "/server-management/servers/vds",
  VPS_DETAILS: "/server-management/servers/vps/:id",
  VDS_DETAILS: "/server-management/servers/vds/:id",
  ACCOUNT: "/account",
  SUPPORT: "/support",
  NOT_FOUND: "*",
  ANCHOR_TAG: "#",
} as const;
