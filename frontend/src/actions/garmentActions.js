import {
  GARMENTS_LIST_FAIL,
  GARMENTS_LIST_REQUEST,
  GARMENTS_LIST_SUCCESS,
} from "../constants/garmentConstants";

import axios from "axios";

export const listGarments = () => async (dispatch) => {
  try {
    dispatch({
      type: GARMENTS_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/garments/`);

    dispatch({
      type: GARMENTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: GARMENTS_LIST_FAIL,
      payload: message,
    });
  }
};
