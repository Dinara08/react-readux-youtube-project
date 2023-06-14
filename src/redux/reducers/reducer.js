import * as types from "../actions/types";

const initialState = {
    videos: [],
    loading: false,
    user: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_VIDEOS : {
            return {
                ...state,
                videos: action.videos,
                loading: false
            }
        }
        case types.SET_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case types.LOGIN: {
            return {
                ...state,
                user: action.payload
            }
        }
        case types.LOGOUT: {
            return {
                ...state,
                user: null,
                loading: false
            }
        }
        default:
            return state;
    }

}