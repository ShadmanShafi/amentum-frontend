export interface HardResetRequestType {
  nodeId: string;
  vmsId: string;
}

export interface HardResetResponseType {
  message: string;
}

export interface NewInstallationRequestType {
  nodeId: string;
  vmsId: string;
  templateVmid: string;
  cloneName: string;
  cloudInitConfig: {
    user: string;
    password: string;
  };
}

export interface NewInstallationResponseType {
  message: string;
}

export interface RescueSystemRequestType {
  nodeId: string;
  vmsId: string;
}

export interface RescueSystemResponseType {
  message: string;
}

export interface ResetPasswordRequestType {
  nodeId: string;
  vmsId: string;
  user: string;
  newPassword: string;
}

export interface ResetPasswordResponseType {
  message: string;
}

export interface SoftResetRequestType {
  nodeId: string;
  vmsId: string;
}

export interface SoftResetResponseType {
  message: string;
}
