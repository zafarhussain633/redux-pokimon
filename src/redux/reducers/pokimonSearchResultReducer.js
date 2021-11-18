import {pokimonContants} from "../constants/constants"

const initialState ={
    loading: true,
    state: {},
    errorMsg: ""
}

const SearchResultReducer = (state=initialState, actions) =>{
     
     switch(actions.type){ 

        case pokimonContants.POKEMON_SEARCH_RESULT_LOADING: 
        return {
            ...state,
            loading: true
        }

        case pokimonContants.POKEMON_SEARCH_RESULT_SUCCESS:
        return {
            ...state,
            loading:false,
            data:actions.payload,
            errMsg: ""
        }

        case pokimonContants.POKEMON_SEARCH__RESULT_FAIL: 
        return {
            ...state,
            loading: false,
            errMsg: "failed to get search result"
        }

        case pokimonContants.CLEAR_SEARCH_RESULT: 
        return {
            ...state,
            loading: false,
            data: actions.payload 
        }


        default: 
             return state;

     }
}

export default SearchResultReducer;