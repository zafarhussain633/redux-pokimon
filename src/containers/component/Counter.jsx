import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import CounterAction from "../../redux/actions/counter"

const Counter = () => {

     const CounterResult = useSelector(state=>state.CounterReducer)
     const dispatch = useDispatch();

    return (
        <div>
             <button onClick={()=>dispatch(CounterAction.DecrementCounter())}>-</button>
             <span style={{padding:"2rem"}}>{CounterResult.count}</span>
            <button onClick={()=>dispatch(CounterAction.IncrementCounter())}>+</button>
             
           
        </div>
    )
}

export default Counter
