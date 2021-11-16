const initialState ={
    loading: true,
    state: {},
    errorMsg: ""
}


const pokimonDetailReducer = (state=initialState , actions)=> {
   
      switch(actions.type){

        case "POKEMON_BLOG_DETAIL_LOADING":
            return {
                ...state,
                loading: true,
            }

        case "POKEMON_BLOG_DETAIL_SUCCSESS":
            return {
                ...state,
                loading:false,
                data:actions.payload,
                errorMsg:"unable to load pokimon detail"
            }
        
        case "POKEMON_BLOG_DETAIL_FAIL":
            return {
                ...state,
                loading:false,
                errorMsg:"failed to fetch pokemon detail page"

            }


        default:
            return state
      }
}


export default pokimonDetailReducer