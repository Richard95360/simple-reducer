const INITIAL_STATE = {
    count:0
}

function counterReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'INCR':{
           return{
               ...state,
               count: action.payload +1
           }
        }
        case 'DECR':{
            return{
                ...state,
                count: action.payload - 1

                
            }
            
            
         }
         case 'RESET': {
            return{
                ...state,
                count: action.payload =0

                
            }
            
            
         }
         default:
           
         
    }

    return state;
}

export default counterReducer;


