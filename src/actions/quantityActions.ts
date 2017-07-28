import {IAction} from "../_core/IAction";
export const quantityActionTypes = {
    ADD: 'ADD_QUANTITY',
    SUBTRACT: 'SUBTRACT_QUANTITY'
};

export interface IQuantityActions {
    add(quantity: number): IAction<number>;
    subtract(quantity: number): IAction<number>;
}

export const quantityActions: IQuantityActions = {
    add(quantity: number): IAction<number> {
        return {
            type: quantityActionTypes.ADD,
            payload: quantity
        };
    },
    subtract(quantity: number): IAction<number> {
        return {
            type: quantityActionTypes.SUBTRACT,
            payload: quantity
        };
    }
};