

const IncrementCounter = (count) => dispatch => {
     dispatch({
         type: "INCREMENT",
         
     })
}


 const DecrementCounter = (count) => dispatch => {
    dispatch({
        type: "DECREMENT",
       
    })
}


 const CounterAction =  {
    IncrementCounter,
    DecrementCounter
}

export default CounterAction;



