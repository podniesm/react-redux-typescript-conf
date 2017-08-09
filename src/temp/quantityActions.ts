import {IAction} from '../_core/IAction';

export const quantityActionTypes = {
    ADD: 'ADD_QUANTITY',
    SUBTRACT: 'SUBTRACT_QUANTITY',
};

export interface IQuantityActions {
    add(quantity: number): IAction<number>;
    subtract(quantity: number): IAction<number>;
}

export const quantityActions: IQuantityActions = {
    add(quantity: number): IAction<number> {
        return {
            payload: quantity,
            type: quantityActionTypes.ADD,
        };
    },
    subtract(quantity: number): IAction<number> {
        return {
            payload: quantity,
            type: quantityActionTypes.SUBTRACT,
        };
    },
};
