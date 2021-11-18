import {pokimonContants} from "../constants/constants"

const initialState = {
     loading: false,
     data:[],
     errorMsg: ""
}

const pokimonListReducer =  (state =initialState,action) =>{

   switch(action.type) {
       case pokimonContants.POKIMON_LIST_LOADING : {
            return {
                ...state,
                loading: true
            }
       }

       case pokimonContants.POKIMON_LIST_FAIL : {
        return {
            ...state,
            loading: false,
            errorMsg: "undalbe to get pokimon"
         }
       }

        case pokimonContants.POKIMON_LIST_SUCCESS : {
           return {
               loading: false,
               data:[...state.data, ...action.payload,] ,
               errorMsg: "failed to get pokimon"
           }
        }

        default:
          return state

   }

}


export default pokimonListReducer;