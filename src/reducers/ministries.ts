import { AsyncStatus } from "../models/async-status";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Ministry } from "../models/ministry";

export const fetchMinistries = createAsyncThunk(
  "fetch-ministries",
  async ({ date }: { date: string }, thunkAPI) => {
    const ministry = {
      name: "Weekly service",
      description: "Join us at 10am every Sunday!",
    } as Ministry;
    return new Promise<[Ministry]>((resolve, reject) => {
      resolve([ministry]);
    });
  }
);

type State = {
  ministries: Ministry[];
  status: AsyncStatus;
};

const initialState: State = {
  ministries: [],
  status: AsyncStatus.notFetched,
};

const ministriesSlice = createSlice({
  name: "ministries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMinistries.pending, (state, action) => {
      return { ...state, status: AsyncStatus.loading };
    });
    builder.addCase(
      fetchMinistries.fulfilled,
      (state, action: { payload: Ministry[]; type: string }) => {
        const ministries = action.payload;

        return {
          ...state,
          ministries,
          status: AsyncStatus.done,
        };
      }
    );
    builder.addCase(fetchMinistries.rejected, (state, action) => {
      return { ...state, status: AsyncStatus.error };
    });
    builder.addDefaultCase((state, action) => state);
  },
});

export default ministriesSlice.reducer;
