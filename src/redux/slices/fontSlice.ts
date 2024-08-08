import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fonts } from '../../fonts/fontsConfig';

interface FontState {
  currentFont: string;
}

const initialState: FontState = {
  currentFont: fonts[0].value,
};

const fontSlice = createSlice({
  name: 'font',
  initialState,
  reducers: {
    setFont: (state, action: PayloadAction<string>) => {
      state.currentFont = action.payload;
    },
  },
});

export const { setFont } = fontSlice.actions;
export default fontSlice.reducer;