import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'


function CardPanel() {
 
    const {cart} = useSelector(state => ({
         ...state.addCartReducer,
       
    }))
    const [cartData, setCartData] = useState(0);

    const dispatch = useDispatch()

  

    const addToCart = () => {
        dispatch({
            type:'ADDCART',
            payload:cartData
        })
    }
   

    return (
        <div>
            <h1>Votre panier : {cart}</h1>
            
            <input
            value={cartData}
            onInput={e => setCartData(e.target.value)}
            type="number" 
            />
            <br/>
            <button onClick={addToCart}>Ajouter au Panier</button>
            
           
        </div>
    )
}

export default CardPanel
