import { combineReducers, createStore } from "redux";
import { dialogsPageReducer } from "./oldStore/dialogsPage-reducer";
import { propfilePageReducer } from "./oldStore/profilePage-reducer";
import { StoreType } from "./oldStore/store";


const reducer = combineReducers(
  {
    profilePage: propfilePageReducer,
    dialogsPage: dialogsPageReducer
  }
);

export const store: StoreType = createStore(reducer);