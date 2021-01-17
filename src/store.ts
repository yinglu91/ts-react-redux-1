import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducers } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
