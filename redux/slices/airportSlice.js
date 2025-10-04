import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  from: '',
  to: '',
  pickupDate: '',
  pickupTime: '',
};

export const airportSlice = createSlice({
  name: 'airport',
  initialState,
  reducers: {
    setAirportField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetAirportForm: () => initialState,
  },
});

export const { setAirportField, resetAirportForm } = airportSlice.actions;
export default airportSlice.reducer;

