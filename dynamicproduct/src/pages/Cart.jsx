import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { cartItem } = useContext(CartContext)
    console.log("cartItem==>", cartItem)
    return (
        <div>
            <h1 className='max-w-6xl  bg-green-600 p-5 text-center '>Cart Item </h1>


            {
                cartItem.map((value) => (
                    <div className='bg-red-700 p-20 mt-2 flex justify-between items-center'>
                        <div className='flex  items-center gap-3'>
                            <img src={value.thumbnail} alt="" />
                            <div className='flex flex-row gap-2'>
                                <button className='text-4xl'>+</button>
                                <span className='text-3xl'>quantity:{value.quantity}</span>
                                <button className='text-4xl'>-</button>
                            </div>


                        </div>

                        <div>
                            <span className='text-4xl'>Price:{value.price}</span>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default Cart