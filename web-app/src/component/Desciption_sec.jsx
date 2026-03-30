import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetail() {

  const navigate = useNavigate();
  const { id } = useParams();

  const products = [
    {
      id: 1,
      title: "HANDBLOCK BOHO DRESS WITH ORNATE PEARL STRAPS",
      price: 5199,
      oldPrice: 6499,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "WHITE LINEN KURTA",
      price: 6399,
      oldPrice: 7999,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "FLORAL MIDI DRESS",
      price: 4299,
      oldPrice: 5999,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      title: "ANARKALI SET",
      price: 7299,
      oldPrice: 8999,
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      title: "HANDLOOM DRESS",
      price: 4899,
      oldPrice: 6499,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 6,
      title: "BOHO KURTI",
      price: 3899,
      oldPrice: 4999,
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 7,
      title: "SUMMER DRESS",
      price: 3599,
      oldPrice: 4599,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 8,
      title: "FESTIVE MAXI",
      price: 8599,
      oldPrice: 9999,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 9,
      title: "HANDPRINTED SET",
      price: 5699,
      oldPrice: 6999,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 10,
      title: "EVENING DRESS",
      price: 6199,
      oldPrice: 7499,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 11,
      title: "COTTON MIDI",
      price: 4799,
      oldPrice: 5999,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 12,
      title: "DESIGNER KURTA",
      price: 6999,
      oldPrice: 8999,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const product = products.find(p => p.id === Number(id));

  const [view, setView] = useState("full");

  useEffect(() => {
    setView("full");
  }, [id]);

  if (!product) return <h1 className="p-10">Product Not Found</h1>;

  return (
    <div className="bg-[#f6f6f6] min-h-screen py-12">

      {/* BACK BUTTON */}
      <div className="max-w-7xl mx-auto mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-600 hover:underline"
        >
          ← Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16">

        {/* LEFT IMAGE */}
        <div className="flex gap-6">

          <div className="flex flex-col gap-4">
            {["full","top","middle","bottom"].map(type => (
              <div
                key={type}
                onClick={() => setView(type)}
                className="w-24 h-28 border cursor-pointer overflow-hidden"
              >
                <img
                  src={product.image}
                  className={`w-full h-full object-cover ${
                    type === "top" && "object-top scale-125"
                  } ${
                    type === "middle" && "object-center scale-110"
                  } ${
                    type === "bottom" && "object-bottom scale-125"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg">
            <img
              src={product.image}
              className={`w-[500px] h-[600px] object-cover transition-all duration-300 ${
                view === "top" && "object-top scale-125"
              } ${
                view === "middle" && "object-center scale-110"
              } ${
                view === "bottom" && "object-bottom scale-125"
              }`}
            />
          </div>
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div>

          <h1 className="text-2xl font-semibold leading-snug">
            {product.title}
          </h1>

          <div className="mt-3 flex items-center gap-3">
            <span className="line-through text-gray-400">
              ₹{product.oldPrice}
            </span>
            <span className="text-xl font-semibold">
              ₹{product.price}
            </span>
            <span className="text-red-500">
              (-{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%)
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Inclusive of all taxes
          </p>

          {/* DESCRIPTION */}
          <div className="mt-10 border-t pt-6">
            <h3 className="font-semibold text-lg mb-4">
              DESCRIPTION
            </h3>

            <p className="text-gray-700 mb-4">
              Boho chic gets a stylish makeover with this outfit.
              Crafted with precision tailoring and breathable fabric,
              it blends elegance with everyday comfort.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-3">
              <li><strong>Design details:</strong> Elegant neckline, refined stitching and flowing silhouette</li>
              <li><strong>Fabric:</strong> Premium organic cotton blend</li>
              <li><strong>Style Tip:</strong> Pair with statement heels and minimal accessories</li>
              <li><strong>Fit:</strong> Relaxed comfort fit suitable for all-day wear</li>
              <li><strong>Wash Care:</strong> Gentle hand wash with mild detergent</li>
            </ul>

            <p className="mt-6 text-sm text-gray-500">
              Disclaimer: This garment is handcrafted. Slight color variations may occur due to lighting and screen settings.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}