import { ACTION_TYPES } from './types';

const { REACT_APP_API_KEY } = process.env;

export const setBoards = (token: string) => {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.GET_BOARDS_REQUEST
        })
        if (token) {
            const url = `https://api.trello.com/1/members/me/boards?key=${REACT_APP_API_KEY}&token=${token}`
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: ACTION_TYPES.GET_BOARDS_SUCCESS,
                        payload: data,
                    })
                })
                .catch(error => {
                    console.log(error.status);
                    // TODO: ACTION_TYPES.GET_BOARDS_FAILED
                })
        }
    }
}