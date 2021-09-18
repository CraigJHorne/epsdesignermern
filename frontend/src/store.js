import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userReducers";
import {
  collectionCreateReducer,
  collectionDeleteReducer,
  collectionListReducer,
  collectionUpdateReducer,
} from "./reducers/collectionsReducers";
import {
  itemCreateReducer,
  itemDeleteReducer,
  itemListReducer,
  itemUpdateReducer,
} from "./reducers/itemsReducers";
import { garmentListReducer } from "./reducers/garmentsReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  collectionList: collectionListReducer,
  collectionCreate: collectionCreateReducer,
  collectionDelete: collectionDeleteReducer,
  collectionUpdate: collectionUpdateReducer,
  itemList: itemListReducer,
  itemCreate: itemCreateReducer,
  itemDelete: itemDeleteReducer,
  itemUpdate: itemUpdateReducer,
  garmentList: garmentListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
