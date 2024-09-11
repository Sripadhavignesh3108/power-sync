import { combineReducers, legacy_createStore } from "redux";
import {
  ApiDataReducer,
  equipmentSelection,
  selectedMuscle,
  selectedWorkoutMuscleList,
} from "../REDUCER/ReducersList";
const finalReducer = combineReducers({
  selectedMuscle,
  ApiDataReducer,
  selectedWorkoutMuscleList,
  equipmentSelection,
});
export const reduxStore = legacy_createStore(finalReducer);
