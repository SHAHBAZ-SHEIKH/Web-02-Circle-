import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Product = ({ item }) => {
    // console.log("item===>",item)
    const { thumbnail, title, price ,id} = item

    const {addToCart} = useContext(CartContext)
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl">
            <Link to={`product/${id}`}>
                <a className="block relative h-48 rounded overflow-hidden">
                    <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={thumbnail}
                    />
                </a>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {title}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                        The Catalyzer
                    </h2>
                    <p className="mt-1">${price}</p>
                </div>
            </Link>
            <div className='mt-2 flex justify-center'>
                <button onClick={()=>addToCart(item)} className='bg-black text-white rounded p-4 cursor-pointer'>ADD to Cart</button>
            </div>
        </div>

    )
}

export default Product