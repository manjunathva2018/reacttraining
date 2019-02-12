import { createStore,combineReducers } from 'redux';
import { currencyReducer } from './reducers/currencyReducer';
import { cartReducer } from './reducers/cartReducer';

// combineReducer used for combine 2 or more reducer bz store accepts only one reducer as a argument
const reducer = combineReducers({
    code: currencyReducer,
    cart: cartReducer
})
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;