import {
  GARMENTS_LIST_FAIL,
  GARMENTS_LIST_REQUEST,
  GARMENTS_LIST_SUCCESS,
} from "../constants/garmentConstants";

export const garmentListReducer = (state = { garments: [] }, action) => {
  switch (action.type) {
    case GARMENTS_LIST_REQUEST:
      return { loading: true };
    case GARMENTS_LIST_SUCCESS:
      return { loading: false, garments: action.payload };
    case GARMENTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
