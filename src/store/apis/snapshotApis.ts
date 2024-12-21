import baseApiWithAuthAndRefresh from "../middleware/baseApiWithAuthAndRefresh";

import {
  SnapshotUpdateRequestType,
  SnapshotUpdateResponseType,
  SnapshotDeleteRequestType,
  SnapshotDeleteResponseType,
  SnapshotCreateRequestType,
  SnapshotCreateResponseType,
} from "@/typings/snapshotApi";

export const snapshotApi = baseApiWithAuthAndRefresh.injectEndpoints({
  endpoints: (builder) => ({
    snapshotCreate: builder.mutation<
      SnapshotCreateResponseType,
      SnapshotCreateRequestType
    >({
      query: ({ nodeId, vmId, ...rest }) => ({
        url: `/vps/nodes/${nodeId}/vms/${vmId}/snapshots`,
        method: "POST",
        body: rest,
      }),
    }),

    snapshotUpdate: builder.mutation<
      SnapshotUpdateResponseType,
      SnapshotUpdateRequestType
    >({
      query: ({ nodeId, vmId, snapshotName, ...rest }) => ({
        url: `/vps/nodes/${nodeId}/vms/${vmId}/snapshots/${snapshotName}`,
        method: "PUT",
        body: rest,
      }),
    }),

    snapshotDelete: builder.mutation<
      SnapshotDeleteResponseType,
      SnapshotDeleteRequestType
    >({
      query: ({ nodeId, vmsId, snapshotId, ...rest }) => ({
        url: `/vps/nodes/${nodeId}/vms/${vmsId}/snapshots/${snapshotId}`,
        method: "DELETE",
        body: rest,
      }),
    }),
  }),
});

export const {
  useSnapshotCreateMutation,
  useSnapshotUpdateMutation,
  useSnapshotDeleteMutation,
} = snapshotApi;
