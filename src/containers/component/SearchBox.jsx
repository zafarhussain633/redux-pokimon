import React from 'react'

//import { useHistory } from "react-router-dom"  //in v6 it is replace with useNavigate
import {useNavigate} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {ClearSearchResults} from "../../redux/actions/pokimonAction"



const SearchBox = () => {
    const dispatch = useDispatch();
    const reduxData  = useSelector(state=>state.PokimonSearchResult)
    const navigate = useNavigate();
    const [search, setSearch] = React.useState("")
  
    function handleClick(){

        if(reduxData.data){
            dispatch(ClearSearchResults());
        }
        navigate(`/pokimon/search?search=${search}`)
    }

    function handleSubmit(e){
         e.preventDefault()
         navigate(`/pokimon/search?search=${search}`)
        //  dispatch(ClearSearchResults());
    }
    


    return (
        <form onSubmit={handleSubmit}>
            <input type="search" style={{padding:"20px"}} onChange={(e)=>setSearch(e.target.value)} />
            <button  onClick ={handleClick}>Search</button>
        </form> 
    )
}

export default SearchBox
