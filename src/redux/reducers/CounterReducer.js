const initialState = {
    count : 0
}

const CounterReducer = (state=initialState,actions) =>{
   
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = urlSearchParams.get("value");

    

    switch(actions.type){
        case "INCREMENT" : {

           return {
              count: params 
           }
        }

        case "DECREMENT" : {
            // localStorage.setItem('counterData', `${}`);
            return {
                count: params
            }
        }
        default : 
           return state
    }
}


export default CounterReducer;


