import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ImageState {
  src: string;
  filter: 'none' | 'grayscale' | 'contrast' | 'brightness' | 'sepia' | 'saturate';
}

const initialState: ImageState = {
  src: '',
  filter: 'none',
};

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImageSrc: (state, action: PayloadAction<string>) => {
      state.src = action.payload;
    },
    setFilter: (state, action: PayloadAction<'none' | 'grayscale' | 'contrast' | 'brightness' | 'sepia' | 'saturate'>) => {
      state.filter = action.payload;
    },
  },
});

export const { setImageSrc, setFilter } = imageSlice.actions;

export default imageSlice.reducer;
