import {combineReducers} from "redux";
import IAppState from "../store/IAppState";
import quantity from "./quantityReducer";

const rootReducer = combineReducers<IAppState>({
    quantity
});

export default rootReducer;