import React from 'react'
import Layout from '../containers/component/Layout'
import { useParams } from 'react-router-dom'
import {GetPokemonDetail}  from "../redux/actions/pokimonAction"
import { useDispatch, useSelector } from 'react-redux'

const PokimonDetail = () => {
  
  const {slug} = useParams();

  const pokimonDetail = useSelector(state=>state.PokimonDetail)
  const dispatch = useDispatch()


   React.useEffect(()=>{
     dispatch(GetPokemonDetail(slug))
     console.log("pokimon detail page" + pokimonDetail.data)
   },[slug])
   
   

    function showData(){
      if(pokimonDetail.data){
        return <b>height: {pokimonDetail.data.height}</b>
      }
      if(pokimonDetail.loading){
        return "loading"
      }
      if(pokimonDetail.erroMsg.length>0){
        return pokimonDetail.erroMsg
      }
    }


    return (
     <Layout>
          your sug is:  {slug}
          <div>
            {showData()}
          </div>
       
    </Layout>
    )
}

export default PokimonDetail
