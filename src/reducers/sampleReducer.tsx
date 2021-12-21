import { SAMPLE } from "../actions/actionTypes";
import { AnyAction } from 'redux';

interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0
}

const sampleReducer = (state=initialState, action: AnyAction) => {
    
    switch(action.type) {
        case SAMPLE:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state;
    }
}

export default sampleReducer;