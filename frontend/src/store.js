import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer, usersReducer, postReducer, postsReducer } from './reducers';
import { appReducer } from './reducers/app-reducer';

const reducer = combineReducers({
	user: userReducer,
	users: usersReducer,
	post: postReducer,
	posts: postsReducer,
	app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
