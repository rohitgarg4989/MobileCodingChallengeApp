import {CHANGE_GRID_COLUMN_NO} from '../actions/types';

const initialState = {
  numOfColumns: 3,
};

const gridColumnReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GRID_COLUMN_NO:
      return {
        ...state,
        numOfColumns: action.payload,
      };
    default:
      return state;
  }
};

export default gridColumnReducer;
