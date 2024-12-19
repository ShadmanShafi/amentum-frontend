import baseApiWithAuthAndRefresh from "../middleware/baseApiWithAuthAndRefresh";

import {
  VmByIdRequestType,
  VmByIdResponseType,
  VpsListResponseType,
} from "@/typings/vpsApi";

export const vpsApi = baseApiWithAuthAndRefresh.injectEndpoints({
  endpoints: (builder) => ({
    getVmsList: builder.query<VpsListResponseType, void>({
      query: () => "/vps/nodes",
    }),

    getVmById: builder.query<VmByIdResponseType, VmByIdRequestType>({
      query: ({ nodeId, vmId }) => `/vps/nodes/${nodeId}/vms/${vmId}`,
    }),
  }),
});

export const { useGetVmsListQuery, useGetVmByIdQuery } = vpsApi;
