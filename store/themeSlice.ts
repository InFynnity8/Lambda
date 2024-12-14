import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  mode: 'light' | 'dark' | 'night' | 'emerald';
}

const initialState: ThemeState = {
  mode: typeof window !== 'undefined' && localStorage.getItem('theme')
    ? (localStorage.getItem('theme') as 'light' | 'dark' | 'night' | 'emerald')
    : 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'night' | 'emerald'>) => {
      state.mode = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', action.payload);
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
