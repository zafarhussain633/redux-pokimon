import React,{useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {GetPokemonList} from "../redux/actions/pokimonAction"
import _ from "lodash"
import PokimonListCard from "../containers/component/PokimonListCard"


const PokiMonList = () => {
    const dispatch = useDispatch();
    const pokimonList = useSelector(state=>state.PokimonList)
    const [page, setPage] = React.useState(1);
  

    useEffect( () => {
        dispatch(GetPokemonList(page))
        //  console.log("from pokimonList.jsx comp" + pokimonList.data.results)
    },[page])


    const showData=()=>{
       if(!_.isEmpty(pokimonList.data)){ // this is short way to chek with lodash package there is data
        
       } 

       if(pokimonList.data)
        return <PokimonListCard pokimonData={pokimonList.data}/>
          
       if(pokimonList.loading)   
        return <p>loading</p>
        
       if(pokimonList.errorMsg !== "") 
        return <p>{pokimonList.errorMsg}</p>

       return "sorry data not fetched"

    }

    return (
        <div>
           {showData()}  
           <button onClick={()=>setPage(page+1)}  style={{padding:"1rem"}} >Loadmore</button>
        </div>
    )
}

export default PokiMonList
