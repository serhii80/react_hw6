import { ACTION_TYPES } from './types';

export interface UserState {
    userData: Record<string, any>[];
    isLoadindProfile: boolean;
}

export const INITIAL_STATE = {
    userData: [],
    isLoadindProfile: false,
}

export default (state: UserState = INITIAL_STATE, { type, payload }: any) => {
    switch (type) {
        case ACTION_TYPES.GET_PROFILE_REQUEST:
            return { ...state, userData: payload, isLoadindProfile: true };
        case ACTION_TYPES.GET_PROFILE_SUCCESS:
            return { ...state, userData: payload, isLoadindProfile: false };
        default:
            return state;
    }
}