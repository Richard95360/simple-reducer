const INITIAL_STATE = {
    cart:0
}

function addCartReducer(state = INITIAL_STATE, action){

    switch (action.type) {

        case 'ADDCART': {
           return {
               ...state,
               cart: action.payload
           }
        }
      
         default:
           
         
    }

    return state;
}

export default addCartReducer;


