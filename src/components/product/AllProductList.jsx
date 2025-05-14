import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

const AllProductList = () => {
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

  const handleDelete = async () => {
    const res = await axios.delete("http://localhost:4010/delete", {
      pID: products._id,
    });
  };

  const navigate = useNavigate();
  return (
    <div className=" flex justify-center">
      <div className="bg-white  shadow rounded-lg overflow-hidden  w-[90%]">
        <div className="grid grid-cols-5  p-4 text-[#24251F] font-semibold text-center  border border-[#D2C69E]">
          <div className="col-span-2 text-left">Product</div>
          <div>Price</div>
          <div>Category</div>
          <div>Actions</div>
        </div>

        {products.map((product) => (
          <div
            key={product._id}
            className="grid grid-cols-5 items-center px-6 py-3 border border-[#D2C69E] hover:shadow-2xl transition-all duration-300 hover:scale-105 justify-between text-center  "
          >
            <div className="flex items-center col-span-2 gap-8 text-left">
              <img
                src={product.media}
                alt={product.title}
                className="h-[60px] w-[60px] object-cover rounded-lg"
              />
              <div>
                <p
                  className="font-semibold text-[20px] hover:underline"
                  onClick={() => {
                    localStorage.setItem("product", JSON.stringify(product));
                    navigate("/productView");
                  }}
                >
                  {product.title}
                </p>
                <div className="text-[12px]">ID:{product._id}</div>
              </div>
            </div>

            <div className="text-xl font-bold text-orange-500 mt-1">
              ${product.price}
            </div>

            <div className="text-gray-700 font-medium">{product.category}</div>

            <div className="flex gap-4 justify-center">
              <NavLink
                to="/product/specificedit"
                className="border  p-2 rounded-lg text-orange-500 border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300"
              >
                <FiEdit2 className="text-[20px]" />
              </NavLink>
              <button
                className="border p-2 rounded-lg  text-red-500 border-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                onClick={handleDelete}
              >
                <AiOutlineDelete className="text-[20px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductList;
