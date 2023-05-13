import {AsyncStatus} from "../models/async-status";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {OrgEvent} from "../models/orgEvent";
import {getOrgEvents} from "../services/orgEventService";

export const fetchOrgEvents = createAsyncThunk(
  "fetch-org-events",
  async ({ date }: { date: string }, thunkAPI) => {
    return getOrgEvents({});
  }
);

type State = {
  orgEvent: OrgEvent[];
  status: AsyncStatus;
};

const initialState: State = {
  orgEvent: [],
  status: AsyncStatus.notFetched,
};

const orgEventsSlice = createSlice({
  name: "orgEvent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrgEvents.pending, (state, action) => {
      return { ...state, status: AsyncStatus.loading };
    });
    builder.addCase(
      fetchOrgEvents.fulfilled,
      (state, action: { payload: OrgEvent[]; type: string }) => {
        const orgEvent = action.payload;
        return {
          ...state,
          orgEvent,
          status: AsyncStatus.done,
        };
      }
    );
    builder.addCase(fetchOrgEvents.rejected, (state, action) => {
      return { ...state, status: AsyncStatus.error };
    });
    builder.addDefaultCase((state, action) => state);
  },
});

export default orgEventsSlice.reducer;
