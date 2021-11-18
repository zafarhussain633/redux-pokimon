
import { pokimonContants } from "../constants/constants"
import { pokimonServices } from "../services/services"


export const GetPokemonList = (page) => async dispath => {

    try {
        dispath({
            type: pokimonContants.POKIMON_LIST_LOADING
        });

        const response = await pokimonServices.pokimonList(page); // it will wait for pokimonServices file

        dispath({
            type: pokimonContants.POKIMON_LIST_SUCCESS,
            payload: response
        })

    } catch (e) {
        dispath({
            type: pokimonContants.POKIMON_LIST_FAIL,
        })
    }

}


export const GetPokemonDetail = (slug) => async dispatch => {

    try {
        dispatch({
            type: pokimonContants.POKEMON_BLOG_DETAIL_LOADING
        })

        const response = await pokimonServices.pokimonDetail(slug);
        // const res = await axios.get(`${baseUrl}${slug}`)

        dispatch({
            type: pokimonContants.POKEMON_BLOG_DETAIL_SUCCSESS,
            payload: response
        })


    }
    catch (e) {
        dispatch({
            type: pokimonContants.POKEMON_BLOG_DETAIL_FAIL
        })
    }

}

export const GetPokemonSearchResults = (search) => async dispatch => {

    try {
        dispatch({
            type: pokimonContants.POKEMON_SEARCH_RESULT_LOADING
        })

        const response = await pokimonServices.pokimonSearchResult(search);

        dispatch({
            type: pokimonContants.POKEMON_SEARCH_RESULT_SUCCESS,
            payload: response
        })

    } catch (e) {
        dispatch({
            type: pokimonContants.POKEMON_SEARCH__RESULT_FAIL
        })

    }
}


export const ClearSearchResults = () => dispatch => {

    dispatch({
        type: pokimonContants.CLEAR_SEARCH_RESULT,
        payload: {}
    })

}