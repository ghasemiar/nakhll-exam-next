// src/store/themeSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "@/types";

const initialState: ThemeState = {
  theme: "light", // default theme
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
