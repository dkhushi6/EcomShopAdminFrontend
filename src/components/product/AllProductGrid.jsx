import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

const AllProductGrid = () => {
  const [products, setProducts] = useState([]);
  const adminId = JSON.parse(localStorage.getItem("admin"))._id;
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.post(
        "http://localhost:4010/product/adminSpecific",
        {
          adminId,
        }
      );
      setProducts(res.data.allAProducts);
    };
    fetchProducts();
  }, []);
  const navigate = useNavigate();
  return (
    <div className=" p-8 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md p-5 border border-[#D2C69E] hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="h-56 w-full flex items-center justify-center overflow-hidden rounded-lg ">
              <img
                src={product.media}
                alt={product.title}
                className="h-full w-full object-contain rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h2
              className="text-lg font-semibold text-gray-800 mt-4 hover:underline"
              onClick={() => {
                localStorage.setItem("product", JSON.stringify(product));
                navigate("/productView");
              }}
            >
              {product.title}
            </h2>
            <p className="text-xl font-bold text-orange-500 mt-1">
              $ {product.price}
            </p>

            <div className="flex justify-center items-center gap-2 mt-4">
              <button
                onClick={() => {
                  localStorage.setItem("product", JSON.stringify(product));
                  navigate("/product/specificedit");
                }}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg text-orange-500 border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300"
              >
                <FiEdit2 className="text-lg" />
                Edit
              </button>

              <NavLink className="flex items-center gap-2 px-4 py-2 border rounded-lg text-red-500 border-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white transition-all duration-300">
                <AiOutlineDelete className="text-lg" />
                Delete
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductGrid;
