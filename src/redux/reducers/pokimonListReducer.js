const initialState = {
     loading: false,
     data:[],
     errorMsg: ""

}
const pokimonListReducer =  (state =initialState,action) =>{

   switch(action.type) {
       case "POKIMON_LIST_LOADING" : {
            return {
                ...state,
                loading: true
            }
       }

       case "POKIMON_LIST_FAIL" : {
        return {
            ...state,
            loading: false,
            errorMsg: "undalbe to get pokimon"
         }
       }

        case "POKIMON_LIST_SUCCESS" : {
           return {
               ...state,
               loading: false,
               data: action.payload,
               errorMsg: "failed to get pokimon"
           }
        }
      
        default:
          return state

   }

   



}


export default pokimonListReducer;