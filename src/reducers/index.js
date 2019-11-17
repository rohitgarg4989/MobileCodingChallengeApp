import {combineReducers} from 'redux';
import imageListReducer from './imageListReducer';
import gridColumnReducer from './gridColumnReducer';

const rootReducer = combineReducers({
  imageListReducer,
  gridColumnReducer,
});

export default rootReducer;
