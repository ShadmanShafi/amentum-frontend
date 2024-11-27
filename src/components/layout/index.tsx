import { Edit, Moon, Sun } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { selectedTheme, setTheme, Theme } from "@/store/features/theme.slice";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Layout() {
  const dispatch = useAppDispatch();
  const currentTheme: Theme = useAppSelector(selectedTheme);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => dispatch(setTheme("light"))}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => dispatch(setTheme("dark"))}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => dispatch(setTheme("system"))}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ol>
        <li>
          <Link to="/home">Home {currentTheme}</Link>
          <p
            onClick={() =>
              dispatch(setTheme(currentTheme === "light" ? "dark" : "light"))
            }
          >
            change theme
          </p>
        </li>
        <li className="text-primary">
          <Link to="/about">About</Link>
        </li>
      </ol>
      <Button variant={"link"} size={"icon"}>
        <Edit />
      </Button>
      <div className="flex items-center justify-center font-bold text-primary">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
