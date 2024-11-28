import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import Spinner from "@/components/shared/Loading";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { selectedTheme, setTheme, Theme } from "@/store/features/theme.slice";
import { router } from "@/routes";

const Page = () => {
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
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Page;
