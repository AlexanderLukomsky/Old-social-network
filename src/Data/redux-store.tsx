import { combineReducers, createStore } from "redux";
import { DialogsPageActionType, dialogsPageReducer } from "./dialogsPage-reducer";
import { ProfilePageActiontType, propfilePageReducer } from "./profilePage-reducer";
import { usersReducer } from "./usersPage-reducer";

export type ActionTypes = DialogsPageActionType | ProfilePageActiontType

const rootReducer = combineReducers(
  {
    profilePage: propfilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer
  }
);

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);