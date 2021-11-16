import axios from "axios";




export const GetPokemonList =  (page) =>  async dispath => {
    try {
        dispath({
            type: "POKIMON_LIST_LOADING"
        });

        const perPage = 10;
        const offset = page * perPage;

        // const res = await axios.get(` https://pokeapi.co/api/v2/ability/?limit=${perPage}&offset=${offset}`)
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${perPage}&offset=${offset}`);
        
        
        dispath({
            type: "POKIMON_LIST_SUCCESS",
            payload: res.data
        })
    
    } catch (e) {
        dispath({
            type: "POKIMON_LIST_FAIL",
        })
    }

}


 export const GetPokemonDetail = (slug) => async dispath=> {
   
    try{
        dispath({
            type: "POKEMON_BLOG_DETAIL_LOADING"
        })
         
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${slug}`)
        
        dispath({
            type: "POKEMON_BLOG_DETAIL_SUCCSESS",
            payload: res.data
        })


    }
     catch(e){
         dispath({
             type: "POKEMON_BLOG_DETAIL_FAIL"
         })
     }

}