import axios from "axios"

const baseUrl ="https://pokeapi.co/api/v2/pokemon/";


const pokimonList = async (page) => {
    const perPage = 10;
    const offset = page * perPage;
    // const res = await axios.get(` https://pokeapi.co/api/v2/ability/?limit=${perPage}&offset=${offset}`)
    const {data} = await axios.get(`${baseUrl}?limit=${perPage}&offset=${offset}`);
    return data.results
}


const pokimonDetail = async (slug) => {
    const {data} = await axios.get(`${baseUrl}${slug}`)
    return data;
}
 

const pokimonSearchResult = async (search) => {
    const {data} = await axios.get(`${baseUrl}${search}`)
    return data;  
}


export const pokimonServices = {
    pokimonList ,
    pokimonDetail,
    pokimonSearchResult
}
