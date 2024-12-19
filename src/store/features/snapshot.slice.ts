import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import type {
  SnapshotUpdateResponseType,
  SnapshotDeleteResponseType,
} from "@/typings/snapshotApi";

const snapshotInitialState: {
  data: {
    update: SnapshotUpdateResponseType | null;
    delete: SnapshotDeleteResponseType | null;
  };
} = {
  data: {
    update: null,
    delete: null,
  },
};

const snapshot = createSlice({
  name: "snapshot",
  initialState: snapshotInitialState,
  reducers: {
    setSnapshotUpdate(
      state,
      action: PayloadAction<SnapshotUpdateResponseType>
    ) {
      state.data.update = action.payload;
    },
    setSnapshotDelete(
      state,
      action: PayloadAction<SnapshotDeleteResponseType>
    ) {
      state.data.delete = action.payload;
    },
  },
});

export const { setSnapshotUpdate, setSnapshotDelete } = snapshot.actions;

export const selectSnapshot = (state: RootState) => state.snapshot.data;
export const { reducer: snapshotReducer } = snapshot;
