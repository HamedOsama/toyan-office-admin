import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const HeaderSlider = ({ slide, id }) => {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({});
  const handleEdit = () => {
    setEdit(true);
  };
  let headersList = {
    Accept: "/",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  };
  let requestOptions = {
    url: `https://api.tawyanoffice.com/api/v1/admin/slider/${id}`,
    method: "PATCH",
    headers: headersList,
    data: { ...slide, ...formData }
  };
  let requestOptionsD = {
    url: `https://api.tawyanoffice.com/api/v1/admin/slider/${id}`,
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
            src={`https://api.tawyanoffice.com/images/${slide.image}`}
            alt={slide._id}
          />
          <p>
            {slide.text.ar}
          </p>
          <p>
            {slide.text.en}
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
          rows="2"
          id="hero-text"
          name="hero-text"
          placeholder="تعديل النص"
          onChange={e =>
            setFormData({
              ...formData,
              text: { ...formData.text, ar: e.target.value }
            })}
        />
        <textarea
          rows="2"
          id="hero-text"
          name="hero-text"
          style={{ direction: "ltr" }}
          placeholder="Edit Text"
          onChange={e =>
            setFormData({
              ...formData,
              text: { ...formData.text, en: e.target.value }
            })}
        />
        <button type="submit" className="btn">
          تعديل
        </button>
      </form>
    </div>
  );
};

export default HeaderSlider;
