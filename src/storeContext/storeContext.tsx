import React from "react";
import { store } from "../Data/store";

export const StoreContext = React.createContext(store.getState())