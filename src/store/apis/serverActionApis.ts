import baseApiWithAuthAndRefresh from "../middleware/baseApiWithAuthAndRefresh";

import {
  HardResetRequestType,
  HardResetResponseType,
  NewInstallationRequestType,
  NewInstallationResponseType,
  RescueSystemRequestType,
  RescueSystemResponseType,
  ResetPasswordRequestType,
  ResetPasswordResponseType,
  SoftResetRequestType,
  SoftResetResponseType,
} from "@/typings/serverActionsApi";

export const serverActionApi = baseApiWithAuthAndRefresh.injectEndpoints({
  endpoints: (builder) => ({
    hardReset: builder.mutation<HardResetResponseType, HardResetRequestType>({
      query: ({ nodeId, vmsId }) => ({
        url: `/vps/nodes/$${nodeId}/vms/${vmsId}/hard_reset`,
        method: "POST",
      }),
    }),

    newInstallation: builder.mutation<
      NewInstallationResponseType,
      NewInstallationRequestType
    >({
      query: ({ nodeId, vmsId, ...rest }) => ({
        url: `/vps/nodes/${nodeId}/vms/${vmsId}/reinstall`,
        method: "POST",
        body: rest,
      }),
    }),

    rescueSystem: builder.mutation<
      RescueSystemResponseType,
      RescueSystemRequestType
    >({
      query: ({ nodeId, vmsId }) => ({
        url: `/vps/nodes/${nodeId}/vms/${vmsId}/rescue`,
        method: "POST",
      }),
    }),

    resetPassword: builder.mutation<
      ResetPasswordResponseType,
      ResetPasswordRequestType
    >({
      query: ({ nodeId, vmsId, ...rest }) => ({
        url: `/vps/nodes/${nodeId}/vms/${vmsId}/reset_password`,
        method: "POST",
        body: rest,
      }),
    }),

    softReset: builder.mutation<SoftResetResponseType, SoftResetRequestType>({
      query: ({ nodeId, vmsId }) => ({
        url: `/vps/nodes/${nodeId}/vms/${vmsId}/soft_reset`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useHardResetMutation,
  useNewInstallationMutation,
  useRescueSystemMutation,
  useResetPasswordMutation,
  useSoftResetMutation,
} = serverActionApi;
