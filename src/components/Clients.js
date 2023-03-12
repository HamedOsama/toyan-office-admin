import React, { useState } from "react";
import Client from "./Client";
import axios from "axios";
import { toast } from "react-toastify";

const Clients = ({ clients }) => {
  const [formData, setFormData] = useState({});
  let headersList = {
    Accept: "/",
    "Content-Type": "multipart/form-data"
  };
  let requestOptions = {
    url: "https://api.tawyanoffice.com/api/v1/admin/client",
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
          <h2>حذف او تعديل العملاء الحاليين</h2>
          <div className="imgs">
            {clients.map(c => {
              return <Client client={c} key={c._id} id={c._id} />;
            })}
          </div>
        </div>
        <div className="add-new">
          <h2>اضافه عميل جديد</h2>
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
              placeholder="اضف اسم العميل"
              name="hero-text"
              id="hero-text"
              rows="2"
              onChange={e => {
                setFormData({ ...formData, name: e.target.value });
              }}
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

export default Clients;
