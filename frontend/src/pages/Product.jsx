// import axios from "axios";
import { useEffect, useState } from "react";
import { deleteCall, getCall, postCall } from "../utility/Network";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    sku: "",
    shopifyProductId: "",
    shopifyPrice: "",
    shopifyComparePrice: "",
    stock: "",
    categoryId: "",
    brand: "",
    mpn: "",
    isbn: "",
    ean: "",
    // productOptions: "",
    // package: "",
    productImages: [], // Comma-separated URLs
    status: "ACTIVE",
  });

  const fetchProducts = async () => {
    try {
      const getData = {
        url: "getAllProducts",
      };
      const res = await getCall(getData);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageAdd = () => {
    if (!imageUrlInput.trim()) return;
    setForm((prev) => ({
      ...prev,
      productImages: [
        ...prev.productImages,
        {
          imageUrl: imageUrlInput.trim(),
          position: prev.productImages.length + 1,
        },
      ],
    }));
    setImageUrlInput("");
  };

  const handleDelete = async (id) => {
    const deleteData = {
      url: "deleteProduct",
      bodyData: {
        id,
      },
    };
    try {
      const response = await deleteCall(deleteData);
      if(response){
        fetchProducts()
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        url: "createProduct",
        bodyData: {
          ...form,
          shopifyPrice: parseFloat(form.shopifyPrice),
          shopifyComparePrice: parseFloat(form.shopifyComparePrice),
          shopifyProductId: parseInt(form.shopifyProductId),
          stock: parseInt(form.stock),
          categoryId: parseInt(form.categoryId),
          productOptions: JSON.parse(form.productOptions || "{}"),
          // package: JSON.parse(form.package || "{}"),
          productImages: form.productImages,
        },
      };
      const response = await postCall(postData);
      if (response) {
        setForm({
          title: "",
          description: "",
          sku: "",
          shopifyProductId: "",
          shopifyPrice: "",
          shopifyComparePrice: "",
          stock: "",
          categoryId: "",
          brand: "",
          mpn: "",
          isbn: "",
          ean: "",
          // productOptions: "",
          // package: "",
          productImages: [], // Comma-separated URLs
          status: "ACTIVE",
        });
        setShowModal(false);
      }
      // console.log(response, "product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto shadow rounded-lg mt-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Product List</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Product
        </button>
      </div>

      <ul className="space-y-2">
        {products.map((p) => (
          <li
            key={p.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-gray-600">{p.description}</p>
              <p className="text-sm text-blue-600">${p.shopifyPrice}</p>
              <p className="text-xs text-gray-500">Stock: {p.stock}</p>
            </div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => handleDelete(p.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  max-h-screen bg-black/50   ">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative max-h-[400px] overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Add Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Title"
                  required
                  className="border p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Description"
                  required
                  className="border p-2 w-full rounded"
                />
              </div>
              {/* <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Price"
                  required
                  className="border p-2 w-full rounded"
                />
              </div> */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Category ID
                </label>
                <input
                  name="categoryId"
                  type="number"
                  value={form.categoryId}
                  onChange={handleChange}
                  placeholder="Category ID"
                  required
                  className="border p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Stock</label>
                <input
                  name="stock"
                  type="number"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="Stock"
                  required
                  className="border p-2 w-full rounded"
                />
              </div>
              <Input
                label="Shopify Product ID"
                name="shopifyProductId"
                value={form.shopifyProductId}
                onChange={handleChange}
                required
                type="number"
              />
              <Input
                label="Shopify Price"
                name="shopifyPrice"
                value={form.shopifyPrice}
                onChange={handleChange}
                required
                type="number"
              />
              <Input
                label="Compare Price"
                name="shopifyComparePrice"
                value={form.shopifyComparePrice}
                onChange={handleChange}
                type="number"
              />
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="border p-2 rounded"
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </select>
              </div>
              {/* <div>
                <label className="block text-sm font-medium mb-1">
                  Image URLs
                </label>
                <input
                  name="images"
                  value={form.productImages}
                  onChange={handleImageAdd}
                  placeholder="Image URLs (comma-separated)"
                  className="border p-2 w-full rounded"
                />
              </div> */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Add Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={imageUrlInput}
                    onChange={(e) => setImageUrlInput(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="border p-2 w-full rounded"
                  />
                  <button
                    type="button"
                    onClick={handleImageAdd}
                    className="bg-blue-500 text-white px-3 rounded hover:bg-blue-600"
                  >
                    Add
                  </button>
                </div>
                {form.productImages.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {form.productImages.map((img, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center border p-1 rounded text-sm"
                      >
                        <span className="truncate">{img.imageUrl}</span>
                        <button
                          type="button"
                          onClick={() => handleImageDelete(idx)}
                          className="text-red-500 hover:text-red-700 text-xs"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Input
                label="Brand"
                name="brand"
                value={form.brand}
                onChange={handleChange}
                placeholder="Brand"
              />
              <Input
                label="MPN"
                name="mpn"
                value={form.mpn}
                onChange={handleChange}
                placeholder="MPN"
              />
              <Input
                label="ISBN"
                name="isbn"
                value={form.isbn}
                onChange={handleChange}
                placeholder="ISBN"
              />
              <Input
                label="EAN"
                name="ean"
                value={form.ean}
                onChange={handleChange}
                placeholder="EAN"
              />
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const Input = ({
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
  label,
}) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder || ""}
      value={value || ""}
      onChange={onChange}
      required={required}
      className="border p-2 w-full rounded"
    />
  </div>
);
