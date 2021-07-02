import * as ACTION from '../actions/types';

export const incrementCreator = () => ({type: ACTION.INCREMENT});
export const asyncIncrementCreator = () => ({type: ACTION.ASYNC_INCREMENT});
export const decrementCreator = () => ({type: ACTION.DECREMENT});
export const asyncDecrementCreator = () => ({type: ACTION.ASYNC_DECREMENT});
