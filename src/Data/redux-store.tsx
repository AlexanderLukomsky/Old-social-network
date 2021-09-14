import { combineReducers, createStore } from "redux";
import { DialogsPageActionType, dialogsPageReducer } from "./dialogsPage-reducer";
import { ProfilePageActiontType, propfilePageReducer } from "./profilePage-reducer";
import { StoreType } from "./oldStore/store";
export type ActionTypes = DialogsPageActionType | ProfilePageActiontType

const reducer = combineReducers(
  {
    profilePage: propfilePageReducer,
    dialogsPage: dialogsPageReducer
  }
);

export const store: StoreType = createStore(reducer);