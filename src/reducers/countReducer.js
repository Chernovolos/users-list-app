import * as ACTION from '../actions/types';

const initialState = {
    count: 0,
}

export default ( state = initialState, action ) => {
    let { type, payload } = action;

    switch (type) {
        case ACTION.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case ACTION.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        default:
            return state

    }
}
