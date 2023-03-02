import React, {createContext,  useState, useEffect, useContext} from 'react'

const Context = createContext ();

import { toast } from 'react-hot-toast';
export const StateContext =({children})=>{

    const [showCart, setShowCart]= useState(false)
    const [cartItems, setCartItems]= useState([])
    const [totalPrice, setTotalPrice]= useState(0)
    const [totalQuantities, setTotalQuantities]= useState(0)
    const  [qty, setQty]= useState(1)
    let foundProduct;
    let index;
    const incQty=()=>{
        setQty(prevQty=>prevQty+1)
    }
    const decQty=()=>{
        setQty(prevQty=>{
            if(prevQty-1 <1) return 1;
            return prevQty-1 
        })
    }
    
    const onAdd= (product,quantity) => {
        const checkProductInCart= cartItems.find((item)=>item._id === product._id)
        setTotalPrice((prevTotalPrice)=>prevTotalPrice+product.price*quantity)
        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities+quantity)
        if(checkProductInCart){
            const updatedCartItems= cartItems.map(((cartProduct)=>{
                if(cartProduct._id === product._id) return {...cartProduct, quantity: cartProduct.quantity+quantity}
            }))    
            setCartItems(updatedCartItems)
        }  else {
            product.quantity= quantity;
            setCartItems([...cartItems, {...product}])
        } 
        toast.success(`تمت اضافة ${qty} ${product.name} الى العربة`)
    }
    const onRemove=(product)=> {
        let newCart= cartItems.filter((cartItem)=>cartItem._id !== product._id)
        setCartItems(newCart)
        setTotalPrice((prevTotalPrice)=>prevTotalPrice-product.price*product.quantity)
        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities-product.quantity)
    }
    const toggleCartItemQuantity= (id,value)=>{
foundProduct =cartItems.find((item)=>item._id === id)
    index= cartItems.findIndex((item)=>item._id===id)
    let TCart= cartItems
    if(value=== 'inc'){
        TCart[index].quantity+=1
        
        setCartItems(TCart)
        setTotalPrice((prevTotalPrice)=>prevTotalPrice+foundProduct.price)
        setTotalQuantities(prevTotalQuantities=>prevTotalQuantities+1)
    } else if(value ==='dec'){
        if(foundProduct.quantity>1){
            //TCart[index]={...foundProduct, quantity:foundProduct.quantity-1}
            TCart[index].quantity-=1
            setCartItems(TCart)
            setTotalPrice((prevTotalPrice)=>prevTotalPrice-foundProduct.price)
            setTotalQuantities(prevTotalQuantities=>prevTotalQuantities-1)
       
        }
    }}

    return (
        <Context.Provider value={{showCart, setShowCart, cartItems,  totalPrice, totalQuantities, qty, incQty, decQty , onAdd,onRemove, toggleCartItemQuantity, setCartItems, setTotalPrice, setTotalQuantities}}>
            {children}
            </Context.Provider>
    )
}

export const useStateContext =()=> useContext(Context)