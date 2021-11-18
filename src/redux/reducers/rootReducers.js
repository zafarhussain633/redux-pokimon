import { combineReducers } from "redux";
import pokimonListReducer from "./pokimonListReducer"
import pokimonDetailReducer from "./pokimonDetailReducer"
import SearchResultReducer from "./pokimonSearchResultReducer"
import CounterReducer from "../reducers/CounterReducer"

const RootReducers = combineReducers({
    PokimonList: pokimonListReducer,
    PokimonDetail: pokimonDetailReducer,
    PokimonSearchResult: SearchResultReducer,
    CounterReducer
})

export default RootReducers




