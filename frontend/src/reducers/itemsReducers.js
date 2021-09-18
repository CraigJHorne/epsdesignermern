import {
  ITEMS_CREATE_FAIL,
  ITEMS_CREATE_REQUEST,
  ITEMS_CREATE_SUCCESS,
  ITEMS_DELETE_FAIL,
  ITEMS_DELETE_REQUEST,
  ITEMS_DELETE_SUCCESS,
  ITEMS_LIST_FAIL,
  ITEMS_LIST_REQUEST,
  ITEMS_LIST_SUCCESS,
  ITEMS_UPDATE_FAIL,
  ITEMS_UPDATE_REQUEST,
  ITEMS_UPDATE_SUCCESS,
} from "../constants/itemConstants";

export const itemListReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ITEMS_LIST_REQUEST:
      return { loading: true };
    case ITEMS_LIST_SUCCESS:
      return { loading: false, items: action.payload };
    case ITEMS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const itemCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ITEMS_CREATE_REQUEST:
      return { loading: true };
    case ITEMS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ITEMS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const itemDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ITEMS_DELETE_REQUEST:
      return { loading: true };
    case ITEMS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ITEMS_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const itemUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ITEMS_UPDATE_REQUEST:
      return { loading: true };
    case ITEMS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ITEMS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
