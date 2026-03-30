import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ClothesDetails() {
  const [product,setProduct] = useState(null)

  const { id } = useParams();

  useEffect(() => {
      fetch(`http://localhost:5001/api/product/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.rows[0]);
          console.log(data.rows[0])
        })
        .catch((err) => console.log(err));
    }, []);

  
  const navigate = useNavigate();

  // product find by id
  // const product = products.find((p) => p.id === Number(id));
  

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    
    <section className="w-full py-12 bg-gray-100">
        {/* Heading */}
      <button onClick={()=>navigate(-1)}>back</button>
      

    

      {/* Main layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">

        {/* LEFT SIDE */}
        <div className="flex gap-4">

          {/* thumbnails */}
          <div className="flex flex-col gap-3">
            <img src={product.image_url} className="w-20 border cursor-pointer"/>
            <img src={product.image_url} className="w-20 border cursor-pointer"/>
            <img src={product.image_url} className="w-20 border cursor-pointer"/>
          </div>

          {/* main image */}
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full max-w-md object-cover rounded"
          />

        </div>

        {/* RIGHT SIDE */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            {product.title}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-3 mb-2">

            <span className="text-xl font-semibold">
              ₹{product.price}
            </span>

            <span className="line-through text-gray-400">
              ₹{product.oldPrice}
            </span>

          </div>

          <p className="text-sm text-gray-500 mb-6">
            Inclusive of all taxes
          </p>

          {/* SIZE */}
          <div className="mb-6">

            <p className="text-sm font-semibold mb-2">
              SIZE:
            </p>

            <div className="flex flex-wrap gap-2">

              {["XS","S","M","L","XL","2XL","3XL"].map((size) => (

                <button
                  key={size}
                  className="border px-4 py-1 text-sm hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>

              ))}

            </div>

          </div>

          {/* Quantity */}
          <div className="flex gap-4 mb-4">

            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-20 border px-2 py-2"
            />

            <button className="bg-black text-white px-8 py-2 hover:bg-gray-800">
              ADD TO CART
            </button>

          </div>

          {/* Buy Now */}
          <button className="w-full border py-3 hover:bg-black hover:text-white transition">
            BUY IT NOW
          </button>

        </div>

      </div>

    </section>
  );
}