import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import type { VpsListResponseType, VmByIdResponseType } from "@/typings/vpsApi";

const vpsInitialState: {
  data: {
    vpsList: VpsListResponseType[] | null;
    vmById: VmByIdResponseType | null;
  };
} = {
  data: {
    vpsList: null,
    vmById: null,
  },
};

const vps = createSlice({
  name: "vps",
  initialState: vpsInitialState,
  reducers: {
    setVpsList(state, action: PayloadAction<VpsListResponseType[]>) {
      state.data.vpsList = action.payload;
    },
    setVmById(state, action: PayloadAction<VmByIdResponseType>) {
      state.data.vmById = action.payload;
    },
  },
});

export const { setVpsList, setVmById } = vps.actions;

export const selectVpsList = (state: RootState) => state.vps.data.vpsList;
export const selectVmById = (state: RootState) => state.vps.data.vmById;

export const { reducer: vpsReducer } = vps;
