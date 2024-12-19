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
      query: ({ nodeId, vmId }) => ({
        url: `/vps/nodes/$${nodeId}/vms/${vmId}/hard_reset`,
        method: "POST",
      }),
    }),

    newInstallation: builder.mutation<
      NewInstallationResponseType,
      NewInstallationRequestType
    >({
      query: ({ nodeId, vmId, ...rest }) => ({
        url: `/vps/nodes/${nodeId}/vms/${vmId}/reinstall`,
        method: "POST",
        body: rest,
      }),
    }),

    rescueSystem: builder.mutation<
      RescueSystemResponseType,
      RescueSystemRequestType
    >({
      query: ({ nodeId, vmId }) => ({
        url: `/vps/nodes/${nodeId}/vms/${vmId}/rescue`,
        method: "POST",
      }),
    }),

    resetPassword: builder.mutation<
      ResetPasswordResponseType,
      ResetPasswordRequestType
    >({
      query: ({ nodeId, vmId, ...rest }) => ({
        url: `/vps/nodes/${nodeId}/vms/${vmId}/reset_password`,
        method: "POST",
        body: rest,
      }),
    }),

    softReset: builder.mutation<SoftResetResponseType, SoftResetRequestType>({
      query: ({ nodeId, vmId }) => ({
        url: `/vps/nodes/${nodeId}/vms/${vmId}/soft_reset`,
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
