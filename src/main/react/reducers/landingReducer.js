import {
  CLEAR_STATE, SET_ERROR_MESSAGE, SET_INPUT_VALUE, SET_IS_FETCHING_DATA,
  SET_PICTURE_RESPONSE,
} from '../actions/actionConstants';

const initialState = {
  inputValue: '',
  errorMessage: '',
  isFetchingData: false,
  isPictureVisible: false,
  pictureResponse: {results: [], total: 0},
};

const landing = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return {...initialState};
    case SET_ERROR_MESSAGE:
      return {...state, errorMessage: action.payload};
    case SET_INPUT_VALUE:
      return {...state, inputValue: action.payload ? action.payload : '', errorMessage: ''};
    case SET_IS_FETCHING_DATA:
      return {...state, isFetchingData: action.payload};
    case SET_PICTURE_RESPONSE:
      return {isPictureVisible: true, pictureResponse: action.payload};
    default:
      return state;
  }
};

export default landing;