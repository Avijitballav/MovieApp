import { combineReducers } from 'redux';
import UserReducer from './users/users';
import fontsizeReducers from './fontsizeReducers';
import languageReducers from './languageReducers';
import handleColorMode from './colorContextReducer';
const rootReducer = combineReducers({
  user: UserReducer,
  font:fontsizeReducers,
  language:languageReducers,
  handleColorMode: handleColorMode
});

export default rootReducer;