import {
  applyMiddleware, combineReducers, createStore, Middleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { dispatchReducer } from './IncrDecrValue/reducers';

const rootReducer = combineReducers({
  dispatch: dispatchReducer
});

export type GlobalState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const middleware: Middleware[] = [];
  const middlewareEnhancer = applyMiddleware(...middleware);
  const composeEnhancers = composeWithDevTools({});

  const store = createStore(rootReducer, composeEnhancers(middlewareEnhancer));
  return store;
};

export default configureStore;