import React, { useEffect, useState } from "react";

const ProductView = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const product = localStorage.getItem("product");
    if (product) {
      setProduct(JSON.parse(product));
    }
  }, []);
  return (
    <div className="flex  justify-center items-center pt-10 h-screen  ">
      <div className="flex  justify-center items-center border px-6 py-4 rounded-lg shadow-md   border-[#D2C69E] hover:shadow-2xl gap-10">
        {" "}
        <div>
          <img
            src={product.media}
            alt={product.title}
            className="h-[300px] w-[300px]"
          />
        </div>
        <div>
          <div className="text-[15px] font-light text-[#24251F]">
            {product.category}
          </div>
          <div className="text-[35px] font-bold text-[#24251F]">
            {product.title}
          </div>
          <div className="text-[#24251F] font-light text-[15px]">
            {product._id}
          </div>
          <div className="text-[30px] font-semibold text-orange-500">
            ${product.price}
          </div>
          <div className="flex text-[#24251F]">
            <div>Color:</div>
            <div className="font-semibold"> {product.color}</div>{" "}
          </div>
          <div className="flex text-[18px] text-[#24251F]">
            <div>Size:</div>
            <div className="font-semibold"> {product.size}</div>{" "}
          </div>
          <div className="text-[20px] font-light text-[#24251F]">
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
