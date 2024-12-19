import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import type {
  HardResetResponseType,
  NewInstallationResponseType,
  RescueSystemResponseType,
  ResetPasswordResponseType,
  SoftResetResponseType,
} from "@/typings/serverActionsApi";

const serverActionInitialState: {
  data: {
    hardReset: HardResetResponseType | null;
    newInstallation: NewInstallationResponseType | null;
    rescueSystem: RescueSystemResponseType | null;
    resetPassword: ResetPasswordResponseType | null;
    softReset: SoftResetResponseType | null;
  };
} = {
  data: {
    hardReset: null,
    newInstallation: null,
    rescueSystem: null,
    resetPassword: null,
    softReset: null,
  },
};

const serverAction = createSlice({
  name: "serverAction",
  initialState: serverActionInitialState,
  reducers: {
    setHardReset(state, action: PayloadAction<HardResetResponseType>) {
      state.data.hardReset = action.payload;
    },
    setNewInstallation(
      state,
      action: PayloadAction<NewInstallationResponseType>
    ) {
      state.data.newInstallation = action.payload;
    },
    setRescueSystem(state, action: PayloadAction<RescueSystemResponseType>) {
      state.data.rescueSystem = action.payload;
    },
    setResetPassword(state, action: PayloadAction<ResetPasswordResponseType>) {
      state.data.resetPassword = action.payload;
    },
    setSoftReset(state, action: PayloadAction<SoftResetResponseType>) {
      state.data.softReset = action.payload;
    },
  },
});

export const {
  setHardReset,
  setNewInstallation,
  setRescueSystem,
  setResetPassword,
  setSoftReset,
} = serverAction.actions;

export const selectServerAction = (state: RootState) => state.serverAction.data;
export const { reducer: serverActionReducer } = serverAction;
