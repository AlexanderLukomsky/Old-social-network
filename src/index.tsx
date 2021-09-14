import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RootStateType } from "./Data/oldStore/store";

import { store } from "./Data/redux-store";
import './index.css';

export const renderTree = (state: RootStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App dispatch={store.dispatch.bind(store)} state={store.getState()} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderTree(store.getState())

store.subscribe(() => {
  const state = store.getState()
  renderTree(state)
}
)