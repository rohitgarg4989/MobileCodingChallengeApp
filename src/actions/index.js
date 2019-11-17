import {
  FETCH_IMAGES_API_CALL,
  FETCH_IMAGES_API_SUCCESS,
  FETCH_IMAGES_API_ERROR,
  CHANGE_GRID_COLUMN_NO,
} from './types';

import fetchImagesFromNativeModules from '../components/ImageAPICaller';

export function fetchImages() {
  return dispatch => {
    dispatch(fetchImagesRequest());
    fetchImagesFromNativeModules()
      .then(responseJson => {
        dispatch(fetchImagesSuccess(responseJson));
      })
      .catch(error => {
        dispatch(fetchImagesError(error));
      });
  };
}

export function fetchImagesRequest() {
  return {
    type: FETCH_IMAGES_API_CALL,
  };
}

export function fetchImagesSuccess(imagesList) {
  return {
    type: FETCH_IMAGES_API_SUCCESS,
    payload: imagesList,
  };
}

export function fetchImagesError(error) {
  return {
    type: FETCH_IMAGES_API_ERROR,
    payload: error,
  };
}

export function changeGridColumn(count) {
  return {
    type: CHANGE_GRID_COLUMN_NO,
    payload: count,
  };
}
