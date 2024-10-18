import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "@/store/task-slice";
import { themeSlice } from "@/store/theme-slice";

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    theme: themeSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
