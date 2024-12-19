export interface VpsListResponseType {
  id: string;
  description: string;
}

export interface VmByIdRequestType {
  nodeId: string;
  vmsId: string;
}

export interface VmByIdResponseType {
  id: string;
  description: string;
}
