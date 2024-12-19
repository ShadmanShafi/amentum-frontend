export interface HardResetRequestType {
  nodeId: string;
  vmId: string;
}

export interface HardResetResponseType {
  message: string;
}

export interface NewInstallationRequestType {
  nodeId: string;
  vmId: string;
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
  vmId: string;
}

export interface RescueSystemResponseType {
  message: string;
}

export interface ResetPasswordRequestType {
  nodeId: string;
  vmId: string;
  user: string;
  newPassword: string;
}

export interface ResetPasswordResponseType {
  message: string;
}

export interface SoftResetRequestType {
  nodeId: string;
  vmId: string;
}

export interface SoftResetResponseType {
  message: string;
}
