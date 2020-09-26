import { ACTION_TYPES } from './types';

const INITIAL_STATE = {
    boardsData: [],
    isLoadindBoards: true,
}

export interface BoardsState {
    boardsData: Record<string, any>[];
    isLoadindBoards: boolean;
}

export default (state: BoardsState = INITIAL_STATE, { type, payload }: any) => {
    switch (type) {
        case ACTION_TYPES.GET_BOARDS_REQUEST:
            return { ...state, boardsData: payload, isLoadindBoards: true };
        case ACTION_TYPES.GET_BOARDS_SUCCESS:
            return { ...state, boardsData: payload, isLoadindBoards: false };
        default:
            return state;
    }
}