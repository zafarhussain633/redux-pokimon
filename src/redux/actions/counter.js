

const IncrementCounter = () => dispatch => {
     dispatch({
         type: "INCREMENT"
     })
}


 const DecrementCounter = () => dispatch => {
    dispatch({
        type: "DECREMENT"
    })
}


 const CounterAction =  {
    IncrementCounter,
    DecrementCounter
}

export default CounterAction;



