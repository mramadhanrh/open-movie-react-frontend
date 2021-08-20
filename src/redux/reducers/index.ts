import { combineReducers } from 'redux';
import movie from './movie';

export const reducers = combineReducers({
  movie,
});

export type AppStateType = ReturnType<typeof reducers>;
