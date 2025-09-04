import Item from 'antd/es/list/Item'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Product from '../components/Product'
import ChipCategpry from '../components/ChipCategpry'
import { Badge} from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { CartContext } from '../context/CartContext'

const Products = () => {

  const [products, setProduct] = useState([])
  const [category, setCategory] = useState([])
  const [choosenCategory,setChoosenCategor] = useState("All")
  const {cartItem} = useContext(CartContext)
  console.log(cartItem)

  useEffect(() => {
    const url = choosenCategory == "All" ?"https://dummyjson.com/products":`https://dummyjson.com/products/category/${choosenCategory}`
    axios.get(url)
      .then((res) => {
        console.log(res?.data?.products)
        setProduct(res?.data?.products)
      })
      .catch((err) => console.log(err))
  }, [choosenCategory])

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
      .then((res) => {
        console.log(res.data)
        setCategory(res.data)
      })
      .catch((err) => console.log(err))
  }, [])


  return (
    <div>
      <div className='flex justify-between bg-purple-800  p-4'>
        <div>
          <h1>Ecommerce Website</h1>
        </div>
        <div>
          <Badge count={cartItem?.length} >
           <ShoppingCartOutlined className='text-2xl cursor-pointer'/>
          </Badge>
        </div>
        
      </div>
      <div className="flex flex-wrap">
        <div>
          <ChipCategpry onclick={()=>setChoosenCategor("All")} cat={{name:"All",slug:"All"}} isChoosen = {choosenCategory === "All"}/>

        </div>
        {
          category.map((cat)=>(
            <ChipCategpry onclick={()=>setChoosenCategor(cat.slug)} isChoosen={cat.slug===choosenCategory} cat={cat}/>
          ))
        }
      </div>


      <div className='flex flex-wrap'>

        {
          products.map((item) => (
            <Product key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Products