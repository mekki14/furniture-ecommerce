import { useStateContext } from '@/context/StateContext'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {BsBagCheckFill} from 'react-icons/bs'
const Success = () => {
    const {setCart, setTotalPrice, setTotalQuantity} =useStateContext();
    const [order,setOrder]= useState(null);
    useEffect(() => {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantity(0);
    
    }, [])
    return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>شكرا للطلب</h2>
            <p className='email-msg'> القي نظرة على بريدك الالكتروني</p> 
            <p className='description'>
                اي اسئلة لا تردد في طرحها
                <a className="email" href='mailto:email@mail.com'>notemail@mail.com</a>
            </p>
            <Link href='/'>
                <button type='button' className='btn'>
                    اكمال التسوق
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success