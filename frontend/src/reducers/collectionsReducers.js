import {
  COLLECTIONS_CREATE_FAIL,
  COLLECTIONS_CREATE_REQUEST,
  COLLECTIONS_CREATE_SUCCESS,
  COLLECTIONS_DELETE_FAIL,
  COLLECTIONS_DELETE_REQUEST,
  COLLECTIONS_DELETE_SUCCESS,
  COLLECTIONS_LIST_FAIL,
  COLLECTIONS_LIST_REQUEST,
  COLLECTIONS_LIST_SUCCESS,
  COLLECTIONS_UPDATE_FAIL,
  COLLECTIONS_UPDATE_REQUEST,
  COLLECTIONS_UPDATE_SUCCESS,
} from "../constants/collectionConstants";

export const collectionListReducer = (state = { collections: [] }, action) => {
  switch (action.type) {
    case COLLECTIONS_LIST_REQUEST:
      return { loading: true };
    case COLLECTIONS_LIST_SUCCESS:
      return { loading: false, collections: action.payload };
    case COLLECTIONS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const collectionCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COLLECTIONS_CREATE_REQUEST:
      return { loading: true };
    case COLLECTIONS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case COLLECTIONS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const collectionDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COLLECTIONS_DELETE_REQUEST:
      return { loading: true };
    case COLLECTIONS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case COLLECTIONS_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const collectionUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case COLLECTIONS_UPDATE_REQUEST:
      return { loading: true };
    case COLLECTIONS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case COLLECTIONS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
