import {createStore , applyMiddleware } from 'redux';
import {rootReducer} from '../Reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const ReduxThunk = require('redux-thunk').default;

export const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
