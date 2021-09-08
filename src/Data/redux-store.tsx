import { combineReducers, createStore } from "redux";
import { dialogsPageReducer } from "./dialogsPage-reducer";
import { propfilePageReducer } from "./profilePage-reducer";
import { StoreType } from "./store";

const reducer = combineReducers(
  {
    profilePageData: propfilePageReducer,
    dialogsPageData: dialogsPageReducer
  }
);

export const store: StoreType = createStore(reducer);