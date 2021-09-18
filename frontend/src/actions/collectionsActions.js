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

import axios from "axios";

export const listCollections = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: COLLECTIONS_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/collections`, config);

    dispatch({
      type: COLLECTIONS_LIST_SUCCESS,
      payload: data,
    });

    console.log(data);
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COLLECTIONS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createCollectionAction = (title) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COLLECTIONS_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/collections/create`,
      { title },
      config
    );

    dispatch({
      type: COLLECTIONS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COLLECTIONS_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteCollectionAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COLLECTIONS_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/collections/${id}`, config);

    dispatch({
      type: COLLECTIONS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COLLECTIONS_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateCollectionAction =
  (id, title, items) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COLLECTIONS_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/collections/${id}`,
        { title },
        config
      );

      dispatch({
        type: COLLECTIONS_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: COLLECTIONS_UPDATE_FAIL,
        payload: message,
      });
    }
  };
