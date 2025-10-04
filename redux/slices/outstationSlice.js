import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tripType: 'roundTrip', 
  from: '',
  to: '',
  pickupDate: '',
  pickupTime: '',
  returnDate: '',
};

export const outstationSlice = createSlice({
  name: 'outstation',
  initialState,
  reducers: {
    setTripType: (state, action) => {
      state.tripType = action.payload;
    },
    setOutstationField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetOutstationForm: () => initialState,
  },
});

export const { setTripType, setOutstationField, resetOutstationForm } = outstationSlice.actions;
export default outstationSlice.reducer;

