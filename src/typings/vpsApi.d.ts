export interface ServerType {
  defaultUser: string | null;
  id: number;
  ipAddresses: string[];
  name: string;
  node: string;
  productType: string | null;
  region: string | null;
  status: string;
}

export interface VpsListResponseType {
  servers: ServerType[];
}

export interface ServerDetails {
  contractPeriod: string | null;
  defaultUser: string | null;
  diskSpace: string;
  id: string;
  ipAddresses: string[];
  name: string;
  node: string;
  productType: string | null;
  region: string | null;
  status: string;
  serverName?: string;
  os?: string;
  mac?: string;
  lastBootTime?: string;
  terminationTime?: string;
  plan?: string;
  vnc?: string;
  monthlyPrice?: string;
}

export interface Snapshot {
  autoDeletion: string | null;
  created: string;
  description: string;
  name: string;
}

export interface VmByIdRequestType {
  nodeId: string;
  vmId: string;
}

export interface VmByIdResponseType {
  server: ServerDetails;
  snapshots: Snapshot[];
  status: string;
}
