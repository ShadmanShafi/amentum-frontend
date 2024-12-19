export interface SnapshotUpdateRequestType {
  nodeId: string;
  vmsId: string;
  snapshotId: string;
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
