import {configureStore} from "@reduxjs/toolkit";
import {intercomReducer} from "../containers/Intercom/IntercomSlice";

export const store = configureStore({
  reducer:{
    intercom: intercomReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;