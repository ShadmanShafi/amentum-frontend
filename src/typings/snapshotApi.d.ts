export interface SnapshotCreateRequestType {
  nodeId: string;
  vmId: string;
  snapshot_name: string;
  description: string;
}

export interface SnapshotCreateResponseType {
  message: string;
}

export interface SnapshotUpdateRequestType {
  nodeId: string;
  vmId: string;
  snapshotName: string;
  description: string;
}

export interface SnapshotUpdateResponseType {
  message: string;
}

export interface SnapshotDeleteRequestType {
  nodeId: string;
  vmsId: string;
  snapshotId: string;
}

export interface SnapshotDeleteResponseType {
  message: string;
}
