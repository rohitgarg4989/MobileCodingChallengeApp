import {
  FETCH_IMAGES_API_CALL,
  FETCH_IMAGES_API_SUCCESS,
  FETCH_IMAGES_API_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
  imagesList: [],
  error: '',
};

const imageListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_API_CALL:
      return {
        ...state,
        loading: true,
      };
    case FETCH_IMAGES_API_SUCCESS:
      return {
        ...state,
        loading: false,
        imagesList: state.imagesList.concat(action.payload),
      };
    case FETCH_IMAGES_API_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default imageListReducer;
