import React, { useEffect, useState } from "react";
import { getCall, postCall } from "../utility/Network";
// import axios from 'axios';

export default function ShopifyCategoryPage() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    shopifyCategoryId: "",
    name: "",
    parentId: "",
    status: "ACTIVE",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchCategories = async () => {
    try {
      const getData = {
        url: "getShopifyCategories",
      };
      const res = await getCall(getData);
      setCategories(res.data?.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       if (isEditing && editId !== null) {
  //         await axios.put(`/api/shopify-categories/${editId}`, form);
  //       } else {
  //         await axios.post('/api/shopify-categories', form);
  //       }
  //       setForm({
  //         shopifyCategoryId: '',
  //         name: '',
  //         parentId: '',
  //         status: 'ACTIVE',
  //       });
  //       setIsEditing(false);
  //       setEditId(null);
  //       fetchCategories();
  //     } catch (err) {
  //       console.error('Error saving category:', err);
  //     }
  //   };

  const handleEdit = (category) => {
    setForm({
      shopifyCategoryId: category.shopifyCategoryId,
      name: category.name,
      parentId: category.parentId,
      status: category.status,
    });
    setIsEditing(true);
    setEditId(category.id);
  };

  //   const handleDelete = async (id) => {
  //     if (window.confirm('Are you sure you want to delete this category?')) {
  //       try {
  //         await axios.delete(`/api/shopify-categories/${id}`);
  //         fetchCategories();
  //       } catch (err) {
  //         console.error('Error deleting category:', err);
  //       }
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      url: "createShopifyCategory",
      bodyData: {
        ...form,
        shopifyCategoryId: parseInt(form?.shopifyCategoryId),
        parentId: form?.parentId ? parseInt(form.parentId) : 0,
      },
    };
    const response = await postCall(postData);
    console.log(response);
    if (response) {
      setForm({
        shopifyCategoryId: "",
        name: "",
        parentId: "",
        status: "Active",
      });
    }
  };
  const handleDelete = () => {};

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Shopify Categories</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="shopifyCategoryId"
            placeholder="Shopify Category ID"
            value={form.shopifyCategoryId}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Category Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="number"
            name="parentId"
            placeholder="Parent ID"
            value={form.parentId}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isEditing ? "Update Category" : "Create Category"}
        </button>
      </form>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Shopify ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Parent ID</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td className="px-4 py-2 border">{cat.id}</td>
              <td className="px-4 py-2 border">{cat.shopifyCategoryId}</td>
              <td className="px-4 py-2 border">{cat.name}</td>
              <td className="px-4 py-2 border">{cat.parentId}</td>
              <td className="px-4 py-2 border">{cat.status}</td>
              <td className="px-4 py-2 border space-x-2">
                <button
                  onClick={() => handleEdit(cat)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(cat.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {categories.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center p-4">
                No categories found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
