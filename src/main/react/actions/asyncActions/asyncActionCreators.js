import axios from 'axios';

import * as actions from '../actionCreators';

import {findPictureByTerm} from "../../constants/endpoints";

export const fetchPicture = (dispatch, term) => {
  dispatch(actions.setIsFetchingData(true));
  axios.get(findPictureByTerm(term))
    .then(response => {
      dispatch(actions.setIsFetchingData(false));
      response.data.total === 0
        ? dispatch(actions.setErrorMessage("No picture found... Try a different term"))
        : dispatch(actions.setPicture(response.data))
    })
    .catch(error => {
      dispatch(actions.setIsFetchingData(false));
      actions.setErrorMessage("Request Failed... Try again");
    });
};