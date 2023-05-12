import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ImageState {
  src: string;
  filters: IFilter,
}

interface IFilter {
  grayscale: number;
  contrast: number;
  brightness:number;
  sepia:number;
  saturate: number;
}

const initialState: ImageState = {
  src: '',
  filters: {
    grayscale: 0,
    contrast: 100,
    brightness: 100,
    sepia: 0,
    saturate: 100,
  },
};

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImageSrc: (state, action: PayloadAction<string>) => {
      state.src = action.payload;
    },
    setFilter: (state, action: PayloadAction<IFilter>) => {
      state.filters = action.payload;
    },
  },
});

export const { setImageSrc, setFilter } = imageSlice.actions;

export default imageSlice.reducer;
