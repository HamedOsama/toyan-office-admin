import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Blog = ({ blog, id }) => {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({});
  const handleEdit = () => {
    setEdit(true);
  };
  let headersList = {
    Accept: "/",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  };
  let requestOptions = {
    url: `https://api.tawyanoffice.com/api/v1/admin/blog/${id}`,
    method: "PATCH",
    headers: headersList,
    data: formData
  };
  let requestOptionsD = {
    url: `https://api.tawyanoffice.com/api/v1/admin/blog/${id}`,
    method: "DELETE",
    headers: headersList
  };
  const handleSubmitEdits = e => {
    e.preventDefault();
    setEdit(false);
    axios
      .request(requestOptions)
      .then(() => {
        toast.success("تم التعديل بنجاح");
      })
      .catch(() => {
        toast.error("اختار صوره اخرى بحجم اقل");
      });
  };
  const handleDelete = async () => {
    axios
      .request(requestOptionsD)
      .then(() => {
        document.getElementById("uform").reset();
        toast.success("تم الحذف بنجاح");
      })
      .catch(() => {
        document.getElementById("uform").reset();
        toast.error("عذرا حدث خطا حاول مره اخرى");
      });
  };
  return (
    <div className="img">
      <div className="container">
        <div className="content">
          <img
            src={`https://api.tawyanoffice.com/images/${blog.image}`}
            alt={blog.name}
          />
          <p>
            {blog.title.ar}
          </p>
        </div>
        <div className="control-btn">
          <button className="edit" onClick={handleEdit}>
            تعديل
          </button>
          <button onClick={handleDelete} className="delete">
            حذف
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmitEdits}
        id="uform"
        className={edit ? "active" : ""}
      >
        <div className="file_feild">
          <p>حمل صوره جديده</p>
          <input
            type="file"
            name="file"
            className="file_in"
            accept="image/*"
            onChange={e => {
              setFormData({ ...formData, image: e.target.files[0] });
            }}
          />
        </div>
        <textarea
          placeholder="تعديل اسم المقالة"
          name="hero-text"
          id="hero-text"
          rows="2"
          onChange={e =>
            setFormData({
              ...formData,
              title: { ...formData.title, ar: e.target.value }
            })}
        />
        <textarea
          style={{ direction: "ltr" }}
          placeholder="Edit article name"
          name="hero-text"
          id="hero-text"
          rows="2"
          onChange={e =>
            setFormData({
              ...formData,
              title: { ...formData.title, en: e.target.value }
            })}
        />
        <textarea
          placeholder="تعديل محتوي المقالة"
          name="hero-text"
          id="hero-text"
          rows="2"
          onChange={e =>
            setFormData({
              ...formData,
              description: { ...formData.description, ar: e.target.value }
            })}
        />
        <textarea
          style={{ direction: "ltr" }}
          placeholder="Edit article content"
          name="hero-text"
          id="hero-text"
          rows="2"
          onChange={e =>
            setFormData({
              ...formData,
              description: { ...formData.description, en: e.target.value }
            })}
        />
        <button type="submit" className="btn">
          تعديل
        </button>
      </form>
    </div>
  );
};

export default Blog;
