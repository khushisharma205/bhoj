import React, { useState } from "react";
import { X } from "lucide-react";

export default function Cart() {

  const [cart,setCart] = useState([
    {
      id:1,
      name:"Nazm Embroidered Kurta Set",
      brand:"Bohojazz",
      size:"XS",
      price:15199,
      oldPrice:18999,
      qty:3,
      img:"/img/first_touch2.jpg"
    },
    {
      id:2,
      name:"Bohemian Signature Mul Dress",
      brand:"Bohojazz",
      size:"S",
      price:9599,
      oldPrice:11999,
      qty:1,
      img:"/img/new4.jpg"
    }
  ])

  const increase = (id)=>{
    setCart(cart.map(item =>
      item.id === id ? {...item, qty:item.qty + 1} : item
    ))
  }

  const decrease = (id)=>{
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? {...item, qty:item.qty - 1}
        : item
    ))
  }

  const removeItem = (id)=>{
    setCart(cart.filter(item => item.id !== id))
  }

  const subtotal = cart.reduce(
    (total,item)=> total + item.price * item.qty,
    0
  )

  return (

    <div className="max-w-7xl mx-auto px-8 py-10">

      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">
        HOME › <span className="text-black">YOUR CART</span>
      </p>

      <h1 className="text-2xl font-semibold mb-6">
        YOUR CART
      </h1>

      {/* Shipping Bar */}
      <div className="bg-green-200 h-3 rounded-full mb-1">
        <div className="bg-green-500 h-3 w-full rounded-full"></div>
      </div>

      <p className="text-green-600 text-sm mb-5">
        You qualify for free shipping!
      </p>

      {/* Message */}
      <div className="bg-yellow-100 p-3 text-sm mb-6">
        Please hurry! Someone has placed an order on one of the items you have in the cart.
      </div>

      <div className="grid grid-cols-3 gap-10">

        {/* LEFT PRODUCTS */}
        <div className="col-span-2">

          {/* header */}
          <div className="grid grid-cols-5 font-semibold text-sm mb-3">
            <span className="col-span-2">PRODUCT</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>TOTAL</span>
          </div>

          {cart.map(item=>(
            <div
              key={item.id}
              className="grid grid-cols-5 border p-4 items-center mb-4"
            >

              {/* Product Info */}
              <div className="col-span-2 flex gap-4">

                <img
                  src={item.img}
                  className="w-20 h-28 object-cover"
                />

                <div>

                  <h3 className="text-sm font-medium">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {item.size}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.brand}
                  </p>

                </div>

              </div>

              {/* Price */}
              <div>

                <p className="line-through text-gray-400 text-sm">
                  ₹{item.oldPrice}
                </p>

                <p className="text-red-500 font-semibold">
                  ₹{item.price}
                </p>

              </div>

              {/* Quantity */}
              <div className="flex border w-fit">

                <button
                  onClick={()=>decrease(item.id)}
                  className="px-3"
                >
                  -
                </button>

                <span className="px-4">
                  {item.qty}
                </span>

                <button
                  onClick={()=>increase(item.id)}
                  className="px-3"
                >
                  +
                </button>

              </div>

              {/* Total */}
              <div className="flex items-center gap-3">

                <span className="font-medium">
                  ₹{item.price * item.qty}
                </span>

                <X
                  onClick={()=>removeItem(item.id)}
                  className="text-red-500 cursor-pointer"
                />

              </div>

            </div>
          ))}

        </div>

        {/* ORDER SUMMARY */}
        <div>

          <h2 className="font-semibold border-b pb-2 mb-4">
            ORDER SUMMARY
          </h2>

          <div className="flex justify-between mb-3">
            <span>SUBTOTAL</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between font-semibold mb-6">
            <span>TOTAL</span>
            <span>₹{subtotal}</span>
          </div>

          <button className="bg-black text-white w-full py-3 mb-3">
            PROCEED TO CHECKOUT
          </button>

          <button className="border w-full py-3">
            CONTINUE SHOPPING
          </button>

        </div>

      </div>

    </div>
  )
}