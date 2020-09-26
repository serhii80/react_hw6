import { AppState } from "..";

export const getUserProfile = (state: AppState): Record<string, any>[] => state.user.userData;