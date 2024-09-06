import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.js";


const store = configureStore({
  reducer:  counterReducer ,
});
export { store };
