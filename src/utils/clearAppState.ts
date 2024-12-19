import { Dispatch } from "redux";
import { logout } from "@/store/features/auth.slice";

export const clearAppState = (dispatch: Dispatch) => {
  // Clear local storage
  localStorage.clear();

  // Clear session storage (if needed)
  sessionStorage.clear();

  // Dispatch logout action to clear app state
  dispatch(logout());
};
