import { AppState } from "..";

export const getToken = (state: AppState): string => state.auth.token;
export const isLogin = (state: AppState) => !!state.auth.token;