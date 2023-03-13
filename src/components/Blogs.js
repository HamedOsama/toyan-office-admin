import React, { useState } from "react";
import Blog from "./Blog";
import axios from "axios";
import { toast } from "react-toastify";

const Blogs = ({ blogs }) => {
  console.log(blogs)
  const [formData, setFormData] = useState({});
  let headersList = {
    Accept: "/",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  };
  let requestOptions = {
    url: "https://api.tawyanoffice.com/api/v1/admin/blog",
    method: "POST",
    headers: headersList,
    data: formData
  };
  const handleSubmitNew = e => {
    e.preventDefault();
    axios
      .request(requestOptions)
      .then(() => {
        document.getElementById("addNewForm").reset();
        toast.success("تمت الاضافه بنجاح");
      })
      .catch(() => {
        document.getElementById("addNewForm").reset();
        toast.error("عذرا حدث خطا حاول مره اخرى");
      });
  };
  return (
    <main>
      <div className="wrapper">
        <div className="exist">
          <h2>حذف او تعديل المقالات الحالية</h2>
          <div className="imgs">
            {blogs?.map(b => {
              return <Blog blog={b} key={b._id} id={b._id} />;
            })}
          </div>
        </div>
        <div className="add-new">
          <h2>اضافه مقالة جديدة</h2>
          <form
            id="addNewForm"
            onSubmit={handleSubmitNew}
            className="input-box hero-img"
          >
            <div className="file_feild">
              <p>حمل صوره جديده</p>
              <input
                required
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
              placeholder="اضف اسم المقالة"
              name="hero-text"
              id="hero-text"
              rows="2"
              required
              onChange={e =>
                setFormData({
                  ...formData,
                  title: { ...formData.title, ar: e.target.value }
                })}
            />
            <textarea
              style={{ direction: "ltr" }}
              required
              placeholder="Add blog Name"
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
              placeholder="اضف محتوي المقالة"
              name="hero-text"
              id="hero-text"
              rows="2"
              required
              onChange={e =>
                setFormData({
                  ...formData,
                  description: { ...formData.description, ar: e.target.value }
                })}
            />
            <textarea
              style={{ direction: "ltr" }}
              placeholder="Add Article content"
              name="hero-text"
              id="hero-text"
              rows="2"
              required
              onChange={e =>
                setFormData({
                  ...formData,
                  description: { ...formData.description, en: e.target.value }
                })}
            />
            <button type="submit" className="btn">
              اضافه
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Blogs;
