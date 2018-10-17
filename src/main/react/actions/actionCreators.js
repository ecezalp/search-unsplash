import {
  SET_INPUT_VALUE, CLEAR_STATE, SET_IS_FETCHING_DATA,
  SET_ERROR_MESSAGE, SET_PICTURE_RESPONSE
} from "./actionConstants";

export const setInputValue = value => ({type: SET_INPUT_VALUE, payload: value});

export const clearState = () => ({type: CLEAR_STATE});

export const setIsFetchingData = isFetching => ({type: SET_IS_FETCHING_DATA, payload: isFetching});

export const setErrorMessage = errorMessage => ({type: SET_ERROR_MESSAGE, payload: errorMessage});

export const setPicture = picture => ({type: SET_PICTURE_RESPONSE, payload: picture});