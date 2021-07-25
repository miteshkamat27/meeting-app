import { combineReducers } from "redux";
import AppointmentReducer from "./AppointmentReducer";

export const rootReducer = combineReducers({
  appointment: AppointmentReducer
});
