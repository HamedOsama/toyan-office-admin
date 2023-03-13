import React, { useState } from "react";
import HeaderSlider from "./HeaderSlider";
import { toast } from "react-toastify";
import axios from "axios";

const HomepageHeader = ({ slides }) => {
  const [formData, setFormData] = useState({});
  let headersList = {
    Accept: "/",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  };
  let requestOptions = {
    url: "https://api.tawyanoffice.com/api/v1/admin/slider",
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
          <h2>حذف او تعديل العناصر الحاليه</h2>
          <div className="imgs">
            {slides.map(slide => {
              return (
                <HeaderSlider key={slide._id} id={slide._id} slide={slide} />
              );
            })}
          </div>
        </div>
        <div className="add-new">
          <h2>اضافه عنصر جديد</h2>
          <form
            onSubmit={handleSubmitNew}
            id="addNewForm"
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
              required
              rows="2"
              name="hero-text"
              id="hero-text"
              placeholder="اضافه نص"
              onChange={e =>
                setFormData({
                  ...formData,
                  text: { ...formData.text, ar: e.target.value }
                })}
            />
            <textarea
              required
              rows="2"
              id="hero-text"
              name="hero-text"
              placeholder="Add Text"
              style={{ direction: "ltr" }}
              onChange={e =>
                setFormData({
                  ...formData,
                  text: { ...formData.text, en: e.target.value }
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

export default HomepageHeader;
