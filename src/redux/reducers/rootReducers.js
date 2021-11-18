import { combineReducers } from "redux";
import pokimonListReducer from "./pokimonListReducer"
import pokimonDetailReducer from "./pokimonDetailReducer"
import SearchResultReducer from "./pokimonSearchResultReducer"


const RootReducers = combineReducers({
    PokimonList: pokimonListReducer,
    PokimonDetail: pokimonDetailReducer,
    PokimonSearchResult: SearchResultReducer
})

export default RootReducers




