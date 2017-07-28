import {IAction, IEvent} from "../_core/IAction";
import {quantityActionTypes} from "../actions/quantityActions";

export default function quantityReducer(state: number = 0, action:IEvent): number {
    switch (action.type) {
        case quantityActionTypes.ADD:
            return state + (action as IAction<number>).payload;
        case quantityActionTypes.SUBTRACT:
            return state - (action as IAction<number>).payload;
        default:
            return state;
    }
}