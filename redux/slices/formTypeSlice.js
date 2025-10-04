import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeForm: 'outstation', // 'outstation', 'local', or 'airport'
};

export const formTypeSlice = createSlice({
  name: 'formType',
  initialState,
  reducers: {
    setFormType: (state, action) => {
      state.activeForm = action.payload;
    },
  },
});

export const { setFormType } = formTypeSlice.actions;
export default formTypeSlice.reducer;

