
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";
import cartReducer from "./cart";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    filtersReducer,
    pizzasReducer,
    cartReducer,
});


export default rootReducer;