export interface IEvent {
    type: string;
}

export interface IAction<TPayload> extends IEvent {
    payload: TPayload;
}
