import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getCatImg } from '../redux/reducers/dataImgReducer';

function Counter() {
  /*   const cart = useSelector(state => state.cart); */


    const {count, imgUrl} = useSelector(state => ({
       
        ...state.counterReducer,
        ...state.dataImgReducer
    }))
    

    const dispatch = useDispatch()

    const incrFunc = () => {
        dispatch({
            type:"INCR",
            payload:count
        })
    }
    const decrFunc = () => {
        dispatch({
            type:"DECR",
            payload:count
        })
    }

    const resetFunc = () => {
        dispatch({
            type:"RESET",
            payload:count
        })
    }


   
    useEffect (() => {
        dispatch(getCatImg())
        
       
    },[dispatch])

    return (
        <div>
            <h1>Count :  {count}</h1>
            <button onClick={incrFunc}>+1</button>
            <button onClick={decrFunc}>-1</button> 
            <button onClick={resetFunc}>Reset</button> 
            <br/>
            <br/>
            {imgUrl && <img style={{width: "300px"}} src={imgUrl}  alt="cats"/>}
        </div>
    )
}

export default Counter
