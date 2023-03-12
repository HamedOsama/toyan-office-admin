import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AboutCard = ({ id, infoo }) => {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({});
  const handleEdit = () => {
    setEdit(true);
  };
  const handleSubmitEdits = e => {
    e.preventDefault();
    setEdit(false);
    axios
      .patch(
        `https://api.tawyanoffice.com/api/v1/admin/information/${id}`,
        formData
      )
      .then(() => {
        toast.success("تم التعديل بنجاح");
      })
      .catch(() => {
        toast.error("اختار صوره اخرى بحجم اقل");
      });
  };
  return (
    <div className="img">
      <div className="container">
        <div className="content-text">
          <h3 className="title">
            {infoo.title.ar}
          </h3>
          <p>
            {infoo.description.ar}
          </p>
        </div>
        <div className="control-btn">
          <button className="edit" onClick={handleEdit}>
            تعديل
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmitEdits}
        id="uform"
        className={edit ? "active" : ""}
      >
        <input
          type="text"
          placeholder="تعديل العنوان"
          onChange={e =>
            setFormData({
              ...formData,
              title: { ...formData.title, ar: e.target.value }
            })}
        />
        <input
          type="text"
          style={{ direction: "ltr" }}
          placeholder="Edit Title"
          onChange={e =>
            setFormData({
              ...formData,
              title: { ...formData.title, en: e.target.value }
            })}
            
        />
        <textarea
          placeholder="تعديل النص"
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
          placeholder="Edit text"
          name="hero-text"
          id="hero-text"
          style={{ direction: "ltr" }}
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

export default AboutCard;
