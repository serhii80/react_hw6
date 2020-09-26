import { AppState } from "..";

export const getBoards = (state: AppState): Record<string, any>[] => state.boards.boardsData;