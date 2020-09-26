import { ACTION_TYPES } from './types';

const { REACT_APP_API_KEY } = process.env;


export const fetchMiddlewareUserProfile = store => next => action => {
    if (action.type === ACTION_TYPES.GET_PROFILE_REQUEST) {
        const token = store.getState().auth.token;
        if (token) {
            const url = `https://api.trello.com/1/members/me?key=${REACT_APP_API_KEY}&token=${token}`
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    return next({
                        type: ACTION_TYPES.GET_PROFILE_SUCCESS,
                        payload: data
                    })
                })
                .catch(error => {
                    console.log(error.status);
                    // TODO: ACTION_TYPES.GET_BOARDS_FAILED
                })
        }

    }
    return next(action)
}