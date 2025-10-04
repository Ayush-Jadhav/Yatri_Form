import { configureStore } from '@reduxjs/toolkit';
import formTypeReducer from './slices/formTypeSlice';
import outstationReducer from './slices/outstationSlice';
import localReducer from './slices/localSlice';
import airportReducer from './slices/airportSlice';

export const store = configureStore({
  reducer: {
    formType: formTypeReducer,
    outstation: outstationReducer,
    local: localReducer,
    airport: airportReducer,
  },
});

