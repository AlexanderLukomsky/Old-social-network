import { combineReducers, createStore } from "redux";
import { DialogsPageActionType, dialogsPageReducer } from "./dialogsPage-reducer";
import { ProfilePageActiontType, propfilePageReducer } from "./profilePage-reducer";

export type ActionTypes = DialogsPageActionType | ProfilePageActiontType

const rootReducer = combineReducers(
  {
    profilePage: propfilePageReducer,
    dialogsPage: dialogsPageReducer
  }
);

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);