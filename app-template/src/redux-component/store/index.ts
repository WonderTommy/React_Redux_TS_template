import { createStore, Store } from "redux";
import { combinedReducers } from "../reducers";
import { IActionType } from "../actions";

export interface IStateType {
    value: number;
    isLogged: boolean;
};

export let store: Store<IStateType, IActionType> = createStore(combinedReducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export const dispatch = (action: IActionType) => store.dispatch(action);