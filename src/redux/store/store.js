import { configureStore } from "@reduxjs/toolkit";
import jobOfferReducer from "../features/jobOfferSlice";

export const store = configureStore({
  reducer: {
    jobOffer: jobOfferReducer,
  },
});
