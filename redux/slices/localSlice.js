import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tripType: 'oneWay',
  from: '',
  to: '',
  pickupDate: '',
  pickupTime: '',
  returnDate: '',
};

export const localSlice = createSlice({
  name: 'local',
  initialState,
  reducers: {
    setLocalTripType: (state, action) => {
      state.tripType = action.payload;
    },
    setLocalField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetLocalForm: () => initialState,
  },
});

export const { setLocalTripType, setLocalField, resetLocalForm } = localSlice.actions;

export default localSlice.reducer;

