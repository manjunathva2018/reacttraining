// Every reducer will take 2 arguments it is must 
// reducer(state,action)
// here we should give default value for state

import { UPDATE_CURRENCY } from "../actions/currencyAction";
export const currencyReducer = (state='USD',action) =>{
    switch(action.type){
        case UPDATE_CURRENCY:
            return action.code;
        default:                    // always define default
            return state;
    }
}

