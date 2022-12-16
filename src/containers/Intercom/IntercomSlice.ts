import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IntercomState {
  numbers: number[];
  checkedPassword: boolean;
}

const initialState: IntercomState = {
  numbers: [],
  checkedPassword: false,
}

export const IntercomSlice = createSlice({
  name: 'intercom',
  initialState: initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<number>) => {
      if (state.numbers.length < 4) {
        state.numbers.push(action.payload);
      }
    },
    deleteSymbol: (state) => {
      state.numbers.splice(-1, 1);
      state.checkedPassword = false;
    },
    toggleCheck: (state) => {
      state.checkedPassword = true;
    },
  }
});

export const intercomReducer = IntercomSlice.reducer;
export const {addNumber, deleteSymbol, toggleCheck} = IntercomSlice.actions;