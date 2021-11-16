import { combineReducers } from "redux";
import pokimonListReducer from "./pokimonListReducer"
import pokimonDetailReducer from "./pokimonDetailReducer"

const RootReducers = combineReducers({
    PokimonList: pokimonListReducer,
    PokimonDetail: pokimonDetailReducer
})


export default RootReducers




