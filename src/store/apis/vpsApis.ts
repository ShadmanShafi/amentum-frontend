import baseApiWithAuthAndRefresh from "../middleware/baseApiWithAuthAndRefresh";

import {
  VmByIdRequestType,
  VmByIdResponseType,
  VpsListResponseType,
} from "@/typings/vpsApi";

export const vpsApi = baseApiWithAuthAndRefresh.injectEndpoints({
  endpoints: (builder) => ({
    getVmsList: builder.query<VpsListResponseType[], void>({
      query: () => "/vps/nodes",
    }),

    getVmById: builder.query<VmByIdResponseType, VmByIdRequestType>({
      query: ({ nodeId, vmsId }) => `/vps/nodes/${nodeId}/vms/${vmsId}`,
    }),
  }),
});

export const { useGetVmsListQuery, useGetVmByIdQuery } = vpsApi;
