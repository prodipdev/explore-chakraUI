import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobDetails: {},
  contractTerms: {},
  workDescription: "",
};

const jobOfferSlice = createSlice({
  name: "jobOffer",
  initialState,
  reducers: {
    setJobDetails: (state, action) => {
      state.jobDetails = action.payload;
    },
    setContractTerms: (state, action) => {
      state.contractTerms = action.payload;
    },
  },
});

export const { setJobDetails, setContractTerms } = jobOfferSlice.actions;

export default jobOfferSlice.reducer;
