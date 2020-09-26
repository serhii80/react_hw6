import { fetchMiddlewareUserProfile } from './userProfile/middleware';
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import auth, { AuthState, authMiddlewares } from './auth';
import boards, { BoardsState } from './boards';
import user, { UserState } from './userProfile';
import thunk from 'redux-thunk';

export interface AppState {
    auth: AuthState;
    boards: BoardsState;
    user: UserState;
}

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ?
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

export default function configureStore() {
    const rootReducer = combineReducers<AppState>({
        auth,
        boards,
        user,
    });
    return createStore(
        rootReducer,
        undefined,
        composeEnhancers(applyMiddleware(...authMiddlewares, fetchMiddlewareUserProfile, thunk)),
    );
}

export * from './auth';
export * from './boards';