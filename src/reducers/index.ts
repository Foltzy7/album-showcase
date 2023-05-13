import { combineReducers } from "@reduxjs/toolkit";
import ministries from "./ministries";
import orgEvents from "./org-events";

export const rootReducer = combineReducers({
  ministries,
  orgEvents
});
