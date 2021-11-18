import React from 'react'
import { useLocation } from 'react-router';
import { GetPokemonSearchResults } from "../redux/actions/pokimonAction"
import { useSelector, useDispatch } from "react-redux"
import Layout from '../containers/component/Layout';
import PokiMonList from '../containers/PokiMonList';
import _ from "lodash";

const SearchResult = () => {
    const dispatch = useDispatch();
    const searchResult = useSelector(state=>state.PokimonSearchResult)

    function useQuery() {
        return new URLSearchParams(useLocation().search) //here search is default which get string after ? in url
    }

    const query = useQuery();
    const userQuery = query.get("search");
    // console.log(query);


    React.useEffect(() => {
        dispatch(GetPokemonSearchResults(userQuery))
        console.log(searchResult);
    },[userQuery])



    function showData(){
        if(!_.isEmpty(searchResult.data)){
          return <h1> pokimon height: 
             <b style={{color:"red"}}>  {searchResult.data.height}</b>
            </h1>
        }
        if(searchResult.loading){
          return "loading"
        }
        if(searchResult.erroMsg){
          return searchResult.erroMsg + "yhi hia"
        }else{
            return <h2 style={{color:"red"}}>search item not found</h2>
        }
      }


    return (
        <Layout>
           
           <div className = "grid-layout">
              <div>
                <PokiMonList />
              </div>

              <div>
                  <h2>
                  your search parmas is : {query.get("search")}
                  </h2>
                  {showData()}
              </div>

           </div>
      
    
        </Layout>
    )
}

export default SearchResult
