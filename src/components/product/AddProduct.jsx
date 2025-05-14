import React, { useEffect, useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [media, setMedia] = useState("");
  const [size, setSize] = useState("");
  const [adminId, setAdminId] = useState("");
  useEffect(() => {
    const getItem = () => {
      const adminString = localStorage.getItem("admin");
      if (adminString) {
        const admin = JSON.parse(adminString);
        setAdminId(admin._id);
        console.log("Admin ID:", admin._id);
      }
    };
    getItem();
  }, []);

  const handlePublish = async () => {
    const res = await axios.post("http://localhost:4010/product/add", {
      title,
      description,
      price,
      size,
      color,
      category,
      media,
      adminId: adminId,
    });
    console.log(res.data);
  };
  const handleCancel = async () => {
    setCategory("");
    setColor("");
    setDesc("");
    setMedia("");
    setPrice("");
    setSize("");
    setTitle("");
  };
  return (
    <div className="min-h-screen  p-6">
      <div className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold text-[#24251F]">Add Product</h1>

        <div className="flex gap-3 ">
          <button
            className=" bg-orange-500 text-white px-5 py-2 rounded-lg transition duration-300 
             hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:shadow-orange-500/50 hover:shadow-md cursor-pointer hover:scale-105"
            onClick={handlePublish}
          >
            Publish
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition hover:scale-105 cursor-pointer"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white  rounded-lg shadow-md  border border-[#D2C69E] w-full md:w-2/3 ">
          <h2 className="text-xl font-semibold border-b  border-[#D2C69E] py-3 px-6 text-[#24251F]  ">
            Basic
          </h2>

          <div className="space-y-4 p-6">
            <div>
              <label className="block text-gray-600 font-medium ">
                Product Title
              </label>
              <input
                type="text"
                placeholder="Enter product title"
                className="w-full p-3  rounded-lg bg-[#f3eedd] focus:bg-white border border-[#D2C69E]  outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium">
                Full Description
              </label>
              <textarea
                placeholder="Enter product description"
                className="w-full p-3  rounded-lg bg-[#f3eedd]   focus:bg-white border border-[#D2C69E]  outline-none h-32"
                value={description}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-600 font-medium">Price</label>
                <input
                  type="text"
                  placeholder="Enter price"
                  className="w-full p-3  rounded-lg bg-[#f3eedd] focus:bg-white border border-[#D2C69E]  outline-none"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Color</label>
                <input
                  type="text"
                  placeholder="Enter color"
                  className="w-full p-3  rounded-lg bg-[#f3eedd] focus:bg-white border border-[#D2C69E]  outline-none"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Size</label>
                <input
                  type="text"
                  placeholder="Enter size"
                  className="w-full p-3  rounded-lg  bg-[#f3eedd] focus:bg-white border border-[#D2C69E]  outline-none"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 space-y-4">
          <div className="bg-white shadow-md  border border-[#D2C69E] rounded-lg ">
            <h2 className="text-xl font-semibold border-b text-[#24251F] border-[#D2C69E] py-3 px-6  ">
              Media
            </h2>
            <div className="p-6">
              {" "}
              <input
                type="text"
                placeholder="Add image URL"
                className="w-full p-3  rounded-lg border  bg-[#f3eedd] border-[#D2C69E] focus:bg-white   outline-none  "
                value={media}
                onChange={(e) => setMedia(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border  border-[#D2C69E]  ">
            <h2 className="text-xl font-semibold border-b text-[#24251F] border-[#D2C69E] py-3 px-6 ">
              Category
            </h2>
            <div className="p-6">
              <input
                type="text"
                placeholder="Enter category"
                className="w-full p-3  rounded-lg bg-[#f3eedd]  focus:bg-white border border-[#D2C69E] outline-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
