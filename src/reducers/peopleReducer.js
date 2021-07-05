import * as ACTION from '../actions/types';

const initialState = {
    people: {},
    preloader: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case ACTION.GET_PEOPLE_START:
            return {
                ...state,
                preloader: true,
            }

        case ACTION.GET_PEOPLE_SUCCESS:
            console.log(payload)
            return {
                ...state,
                people: payload,
                preloader: false,
            }
        default:
            return state
    }
}
