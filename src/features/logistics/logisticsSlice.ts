import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logisticsService } from "./logisticsService";

type LogisticsType = {
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string;
};


const initialState: LogisticsType = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: "",
};

export const createHaulage = createAsyncThunk(
  "logistics/haulage",
  async (user: any, thunkAPI: any) => {
    try {
      return await logisticsService.createHaulage(user);
    } catch (error: any) {
      const message = error.response.data.error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);


const logisticsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state: any) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createHaulage.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
        state.isSuccess = false;
      })
      .addCase(createHaulage.rejected, (state, action: PayloadAction<any>) => {
        console.log("action register rejected", action);
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(createHaulage.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload.message;
      })
  },
});

export const { reset } = logisticsSlice.actions;

export default logisticsSlice.reducer;
