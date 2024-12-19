import baseApiWithAuthAndRefresh from "../middleware/baseApiWithAuthAndRefresh";

import {
  SnapshotUpdateRequestType,
  SnapshotUpdateResponseType,
  SnapshotDeleteRequestType,
  SnapshotDeleteResponseType,
} from "@/typings/snapshotApi";

export const snapshotApi = baseApiWithAuthAndRefresh.injectEndpoints({
  endpoints: (builder) => ({
    snapshotUpdate: builder.mutation<
      SnapshotUpdateResponseType,
      SnapshotUpdateRequestType
    >({
      query: ({ nodeId, vmsId, snapshotId, ...rest }) => ({
        url: `/vps/nodes/${nodeId}/vms/${vmsId}/snapshots/${snapshotId}`,
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

export const { useSnapshotUpdateMutation, useSnapshotDeleteMutation } =
  snapshotApi;
