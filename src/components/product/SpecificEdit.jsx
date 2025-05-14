import axios from "axios";
import React, { useEffect, useState } from "react";

const SpecificEdit = () => {
  const [newTitle, setTitle] = useState("");
  const [newDescription, setDesc] = useState("");
  const [newPrice, setPrice] = useState("");
  const [newColor, setColor] = useState("");
  const [newCategory, setCategory] = useState("");
  const [newMedia, setMedia] = useState("");
  const [newSize, setSize] = useState("");
  const [pID, setPID] = useState("");
  const [adminId, setAdminId] = useState("");

  const handlePublish = async () => {
    const res = await axios.post(
      "https://shopecombackend-6e34.onrender.com/product/edit",
      {
        newTitle,
        pID,
        newDescription,
        newPrice,
        newSize,
        newColor,
        newCategory,
        newMedia,
        adminId,
      }
    );
    console.log(res.data);
    setCategory("");
    setColor("");
    setDesc("");
    setMedia("");
    setPrice("");
    setSize("");
    setTitle("");
  };
  useEffect(() => {
    const product = localStorage.getItem("product");
    if (product) {
      const parsedProduct = JSON.parse(product);
      if (parsedProduct && parsedProduct._id) {
        setPID(parsedProduct._id);
      }
    }
    const StoredAdmin = localStorage.getItem("admin");
    if (StoredAdmin) {
      const admin = JSON.parse(StoredAdmin);
      setAdminId(admin._id);
    }
  }, []);

  useEffect(() => {
    console.log("Admin ID:", adminId);
    console.log("Product ID:", pID);
  }, [adminId, pID]);

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
        <div>
          {" "}
          <h1 className="text-3xl font-bold text-[#24251F]">Edit Product</h1>
          <div className="font-light">{pID}</div>
        </div>

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
                className="w-full p-3  rounded-lg bg-[#f3eedd] focus:bg-white border border-gray-300  outline-none"
                value={newTitle}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium">
                Full Description
              </label>
              <textarea
                placeholder="Enter product description"
                className="w-full p-3  rounded-lg bg-[#f3eedd]   focus:bg-white border border-gray-300  outline-none h-32"
                value={newDescription}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-600 font-medium">Price</label>
                <input
                  type="text"
                  placeholder="Enter price"
                  className="w-full p-3  rounded-lg bg-[#f3eedd] focus:bg-white border border-gray-300  outline-none"
                  value={newPrice}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Color</label>
                <input
                  type="text"
                  placeholder="Enter color"
                  className="w-full p-3  rounded-lg bg-[#f3eedd] focus:bg-white border border-gray-300  outline-none"
                  value={newColor}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Size</label>
                <input
                  type="text"
                  placeholder="Enter size"
                  className="w-full p-3  rounded-lg  bg-[#f3eedd] focus:bg-white border border-gray-300  outline-none"
                  value={newSize}
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
                className="w-full p-3  rounded-lg border  bg-[#f3eedd] border-gray-300 focus:bg-white   outline-none  "
                value={newMedia}
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
                className="w-full p-3  rounded-lg bg-[#f3eedd]  focus:bg-white border border-gray-300 outline-none"
                value={newCategory}
                onChange={(e) => setCategory(e.target.value)}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificEdit;
