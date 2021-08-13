import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StateType, store } from "./Data/state";
import './index.css';


export const renderTree = (state: StateType) => {
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
store.renderTreeSubscriber(renderTree)