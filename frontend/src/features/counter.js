import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    renderAlert: { called: false, message: "", type: "" }, //type:success, error, info, warning
  },
  reducers: {
    alertIsCalled: (state, action) => {
      const { called, message, type } = action.payload;
      const payload = {
        called: called ? called : false,
        message: message ? message : "",
        type: type ? type : "",
      };
      
      state.renderAlert = payload; // Access the value from action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { alertIsCalled } = counterSlice.actions;

export default counterSlice.reducer;
