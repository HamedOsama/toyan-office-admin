import React, { useState } from "react";
import Serv from "./Serv";
import axios from "axios";
import { toast } from "react-toastify";

const Services = ({ services }) => {
  const [formData, setFormData] = useState({});
  const [imageObject, setImageObject] = useState(null);
  const handleImageLoad = (event) => {
    const image = event.target;
    setImageObject(image);
  }
  let headersList = {
    Accept: "/",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  };
  let requestOptions = {
    url: "https://api.tawyanoffice.com/api/v1/admin/service",
    method: "POST",
    headers: headersList,
    data: {...formData,image:imageObject}
  };
  const handleSubmitNew = e => {
    e.preventDefault();
    axios
      .request(requestOptions)
      .then(() => {
        document.getElementById("addNewForm").reset();
        toast.success("تمت الاضافه بنجاح");
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("addNewForm").reset();
        toast.error("عذرا حدث خطا حاول مره اخرى");
      });
  };
  return (
    <main>
      <div className="wrapper">
        <div className="exist">
          <h2>الخدمات الحالية</h2>
          <div className="imgs">
            {services?.map(ser => {
              return <Serv service={ser} key={ser._id} id={ser._id} />;
            })}
          </div>
        </div>
        <div className="add-new">
          <h2>اضافه خدمة جديدة</h2>
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
                onChange={handleImageLoad}
              />
            </div>
            <div className="inputs-group">
              <input
                type="text"
                required
                placeholder="اضف العنوان"
                onChange={e =>
                  setFormData({
                    ...formData,
                    title: { ...formData.title, ar: e.target.value }
                  })}
              />
              <input
                type="text"
                placeholder="Add Title"
                required
                style={{ direction: "ltr" }}
                onChange={e =>
                  setFormData({
                    ...formData,
                    title: { ...formData.title, en: e.target.value }
                  })}
              />
              <input
                type="text"
                placeholder="اضف العنوان الفرعي"
                required
                onChange={e =>
                  setFormData({
                    ...formData,
                    subTitle: { ...formData.subTitle, ar: e.target.value }
                  })}
              />
              <input
                type="text"
                style={{ direction: "ltr" }}
                required
                placeholder="Add"
                onChange={e =>
                  setFormData({
                    ...formData,
                    subTitle: { ...formData.subTitle, en: e.target.value }
                  })}
              />
            </div>
            <div className="inputs-group">
              <textarea
                placeholder="اضف الوصف"
                name="hero-text"
                id="hero-text"
                required
                rows="2"
                onChange={e =>
                  setFormData({
                    ...formData,
                    description: { ...formData.description, ar: e.target.value }
                  })}
              />
              <textarea
                placeholder="Add content"
                style={{ direction: "ltr" }}
                name="hero-text"
                id="hero-text"
                rows="2"
                onChange={e =>
                  setFormData({
                    ...formData,
                    description: { ...formData.description, en: e.target.value }
                  })}
              />
            </div>
            <button type="submit" className="btn">
              اضافة
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Services;
