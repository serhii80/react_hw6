import { ACTION_TYPES } from './types';

export const setUserProfile = (token: string) => {
    return {
        type: ACTION_TYPES.GET_PROFILE_REQUEST,
        payload: {}
    }
}
