
const initialState = {
    count : 0
}

const CounterReducer = (state=initialState,actions) =>{
    switch(actions.type){
        case "INCREMENT" : {
           return {
              count: state.count+1
           }
        }
        case "DECREMENT" : {

            // localStorage.setItem('counterData', `${}`);
        
            return {
                count: state.count===0 ? state.count : state.count-1
            }
        }
        default : 
           return state
    }
}


export default CounterReducer;