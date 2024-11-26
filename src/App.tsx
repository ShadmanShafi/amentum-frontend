import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { getRouter } from "./Router";
import { selectedTheme, setTheme, Theme } from "./store/features/theme.slice";

function App() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectedTheme);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      console.log(systemTheme);
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // Load theme from localStorage when the app starts
  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
    dispatch(setTheme(savedTheme));
  }, [dispatch]);
  return (
    <div>
      <RouterProvider router={getRouter()} />
    </div>
  );
}

export default App;
