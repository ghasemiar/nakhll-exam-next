// src/components/ThemeToggleButton.tsx
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/theme-slice";
import { useEffect } from "react";
import { RootState } from "@/store/store";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  // Apply the theme to the document when the theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      className="tw-btn tw-btn-outline"
      onClick={() => dispatch(toggleTheme())}
    >
      تغییر تم
    </button>
  );
};

export default ThemeToggle;
