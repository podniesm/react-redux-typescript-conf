import IStoreState from './IStoreState';

const initialState: IStoreState = {
    quantity: 0,
    tasks: {
        isLoading: false,
        items: [],
    },
};

export default initialState;
