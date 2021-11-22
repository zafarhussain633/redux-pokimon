import React,{useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import CounterAction from "../../redux/actions/counter"
import {useNavigate} from 'react-router-dom';

 


const Counter = () => {
     const navigate  = useNavigate();
     const [count, setCount] =useState(0);

     const CounterResult = useSelector(state=>state.CounterReducer)
     const dispatch = useDispatch();
     

    function handleIncrement(){
         setCount(count+1)
         navigate(`/counterTest/setvalue?value=${count}`);
         dispatch(CounterAction.IncrementCounter());
    }


    function handleDecrement(){
        setCount(count-1)
       navigate(`/counterTest/setvalue?value=${count}`)
       dispatch(CounterAction.DecrementCounter());
   }

   useEffect(()=>{  
     dispatch(CounterAction.IncrementCounter());
     dispatch(CounterAction.DecrementCounter());
   },[count])




    return (
        <div>
             <button onClick={handleDecrement}>-</button>
             <span style={{padding:"2rem"}}>{CounterResult.count || count}</span>
             <button onClick={handleIncrement}>+</button>
             
           
        </div>
    )
}

export default Counter
