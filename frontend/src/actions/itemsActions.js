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

import axios from "axios";

export const listItems = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ITEMS_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/items/${id}`);

    dispatch({
      type: ITEMS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ITEMS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createItemAction =
  (
    garment,
    sleeve,
    baseColor,
    patternColor,
    aColor,
    bColor,
    set1Color,
    set2Color,
    set3Color,
    ssOrLs,
    topOrShorts,
    logosA,
    logosB,
    logosC,
    logosD,
    logosE,
    logosF,
    logosG,
    pattern,
    design,
    club,
    breakPath,
    backgroundTone1,
    backgroundTone2,
    backgroundTone3,
    backgroundTone4,
    backgroundTone5,
    backgroundTone6,
    backgroundTone7,
    backgroundTone8,
    backgroundTone9,
    backgroundTone10,
    backgroundTone12,
    backgroundTone13,
    backgroundTone14,
    backgroundTone15,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo12,
    logo13,
    logo14,
    logo15,
    garmentName,
    baseColorName,
    set1ColorName,
    set2ColorName,
    set3ColorName,
    set1Name,
    set2Name,
    set3Name,
    aColorName,
    bColorName,
    patternName,
    designName,
    sleeveOptions,
    colorOptions,
    designOptions,
    patternOptions,
    collection
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ITEMS_CREATE_REQUEST,
      });

      const { data } = await axios.post(`/api/items/create`, {
        garment,
        sleeve,
        baseColor,
        patternColor,
        aColor,
        bColor,
        set1Color,
        set2Color,
        set3Color,
        ssOrLs,
        topOrShorts,
        logosA,
        logosB,
        logosC,
        logosD,
        logosE,
        logosF,
        logosG,
        pattern,
        design,
        club,
        breakPath,
        backgroundTone1,
        backgroundTone2,
        backgroundTone3,
        backgroundTone4,
        backgroundTone5,
        backgroundTone6,
        backgroundTone7,
        backgroundTone8,
        backgroundTone9,
        backgroundTone10,
        backgroundTone12,
        backgroundTone13,
        backgroundTone14,
        backgroundTone15,
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
        logo9,
        logo10,
        logo12,
        logo13,
        logo14,
        logo15,
        garmentName,
        baseColorName,
        set1ColorName,
        set2ColorName,
        set3ColorName,
        set1Name,
        set2Name,
        set3Name,
        aColorName,
        bColorName,
        patternName,
        designName,
        sleeveOptions,
        colorOptions,
        designOptions,
        patternOptions,
        collection,
      });

      dispatch({
        type: ITEMS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ITEMS_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteItemAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ITEMS_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`/api/items/item/${id}`);

    dispatch({
      type: ITEMS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ITEMS_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateItemAction =
  (
    id,
    garment,
    sleeve,
    baseColor,
    patternColor,
    aColor,
    bColor,
    set1Color,
    set2Color,
    set3Color,
    ssOrLs,
    topOrShorts,
    logosA,
    logosB,
    logosC,
    logosD,
    logosE,
    logosF,
    logosG,
    pattern,
    design,
    club,
    breakPath,
    backgroundTone1,
    backgroundTone2,
    backgroundTone3,
    backgroundTone4,
    backgroundTone5,
    backgroundTone6,
    backgroundTone7,
    backgroundTone8,
    backgroundTone9,
    backgroundTone10,
    backgroundTone12,
    backgroundTone13,
    backgroundTone14,
    backgroundTone15,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo12,
    logo13,
    logo14,
    logo15,
    garmentName,
    baseColorName,
    set1ColorName,
    set2ColorName,
    set3ColorName,
    set1Name,
    set2Name,
    set3Name,
    aColorName,
    bColorName,
    patternName,
    designName,
    sleeveOptions,
    colorOptions,
    designOptions,
    patternOptions
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ITEMS_UPDATE_REQUEST,
      });

      const { data } = await axios.put(`/api/items/item/${id}`, {
        garment,
        sleeve,
        baseColor,
        patternColor,
        aColor,
        bColor,
        set1Color,
        set2Color,
        set3Color,
        ssOrLs,
        topOrShorts,
        logosA,
        logosB,
        logosC,
        logosD,
        logosE,
        logosF,
        logosG,
        pattern,
        design,
        club,
        breakPath,
        backgroundTone1,
        backgroundTone2,
        backgroundTone3,
        backgroundTone4,
        backgroundTone5,
        backgroundTone6,
        backgroundTone7,
        backgroundTone8,
        backgroundTone9,
        backgroundTone10,
        backgroundTone12,
        backgroundTone13,
        backgroundTone14,
        backgroundTone15,
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
        logo9,
        logo10,
        logo12,
        logo13,
        logo14,
        logo15,
        garmentName,
        baseColorName,
        set1ColorName,
        set2ColorName,
        set3ColorName,
        set1Name,
        set2Name,
        set3Name,
        aColorName,
        bColorName,
        patternName,
        designName,
        sleeveOptions,
        colorOptions,
        designOptions,
        patternOptions,
      });

      dispatch({
        type: ITEMS_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ITEMS_UPDATE_FAIL,
        payload: message,
      });
    }
  };
