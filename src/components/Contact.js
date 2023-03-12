import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = ({ contacts, id }) => {
  const [edit, setEdit] = useState(false);
  const [editTel, setEditTel] = useState(false);
  const [editTel2, setEditTel2] = useState(false);
  const [address, setAddress] = useState(false);

  const [email, setEmail] = useState(null);
  const handleEmailChange = e => {
    e.preventDefault();
    setEdit(false);
    axios
      .patch(`https://api.tawyanoffice.com/api/v1/admin/contacts/${id}`, {
        ...contacts,
        email: email
      })
      .then(() => {
        toast.success("تم التعديل بنجاح");
      })
      .catch(() => {
        toast.error("عذرا حدث خطا حاول مره اخرى");
      });
  };

  const [mainPhone, setMainPhone] = useState(null);
  const handlePhone1Change = e => {
    e.preventDefault();
    setEditTel(false);
    axios
      .patch(`https://api.tawyanoffice.com/api/v1/admin/contacts/${id}`, {
        ...contacts,
        mainPhone: mainPhone,
      })
      .then(() => {
        toast.success("تم التعديل بنجاح");
      })
      .catch(() => {
        toast.error("عذرا حدث خطا حاول مره اخرى");
      });
  };

  const [subPhone, setSubPhone] = useState(null);
  const handlePhone2Change = e => {
    e.preventDefault();
    setEditTel2(false);
    axios
      .patch(`https://api.tawyanoffice.com/api/v1/admin/contacts/${id}`, {
        ...contacts,
        subPhone: subPhone
      })
      .then(() => {
        toast.success("تم التعديل بنجاح");
      })
      .catch(() => {
        toast.error("عذرا حدث خطا حاول مره اخرى");
      });
  };

  const [addressInfo, setAddressInfo] = useState({});
  const handleaddressChange = e => {
    e.preventDefault();
    setAddress(false);
    axios
      .patch(`https://api.tawyanoffice.com/api/v1/admin/contacts/${id}`, {
        ...contacts,
        address: addressInfo.address
      })
      .then(() => {
        toast.success("تم التعديل بنجاح");
      })
      .catch(() => {
        toast.error("عذرا حدث خطا حاول مره اخرى");
      });
  };
  return (
    <main>
      <div className="wrapper">
        <div className="exist">
          <h2>معلومات الاتصال</h2>
          <div className="imgs">
            <div className="img">
              <div className="container">
                <div className="content-text">
                  <h3>البريد الاكتروني</h3>
                  <p>
                    {contacts.email}
                  </p>
                </div>
                <div className="control-btn">
                  <button
                    className="edit"
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    تعديل
                  </button>
                </div>
              </div>
              <form
                onSubmit={handleEmailChange}
                className={edit ? "active" : ""}
              >
                <input
                  placeholder="تعديل البريد الاكتروني"
                  name="email"
                  id="email"
                  type="email"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
                <button type="submit" className="btn">
                  تعديل
                </button>
              </form>
            </div>
            <div className="img">
              <div className="container">
                <div className="content-text">
                  <h3>رقم الهاتف</h3>
                  <p>
                    {contacts.mainPhone}
                  </p>
                </div>
                <div className="control-btn">
                  <button
                    className="edit"
                    onClick={() => {
                      setEditTel(true);
                    }}
                  >
                    تعديل
                  </button>
                </div>
              </div>
              <form
                onSubmit={handlePhone1Change}
                className={editTel ? "active" : ""}
              >
                <input
                  placeholder="تعديل رقم الهاتف"
                  name="subtel"
                  id="subtel"
                  type="tel"
                  onChange={e => {
                    setMainPhone(e.target.value);
                  }}
                />
                <button type="submit" className="btn">
                  تعديل
                </button>
              </form>
            </div>
            <div className="img">
              <div className="container">
                <div className="content-text">
                  <h3>رقم الهاتف الثاني</h3>
                  <p>
                    {contacts.subPhone}
                  </p>
                </div>
                <div className="control-btn">
                  <button
                    className="edit"
                    onClick={() => {
                      setEditTel2(true);
                    }}
                  >
                    تعديل
                  </button>
                </div>
              </div>
              <form
                onSubmit={handlePhone2Change}
                className={editTel2 ? "active" : ""}
              >
                <input
                  placeholder="تعديل رقم الهاتف"
                  name="tel"
                  id="tel"
                  type="tel"
                  onChange={e => {
                    setSubPhone(e.target.value);
                  }}
                />
                <button type="submit" className="btn">
                  تعديل
                </button>
              </form>
            </div>
            <div className="img">
              <div className="container">
                <div className="content-text">
                  <h3>العنوان</h3>
                  <p>
                    {contacts?.address?.ar}
                  </p>
                </div>
                <div className="control-btn">
                  <button
                    className="edit"
                    onClick={() => {
                      setAddress(true);
                    }}
                  >
                    تعديل
                  </button>
                </div>
              </div>
              <form
                onSubmit={handleaddressChange}
                className={address ? "active" : ""}
              >
                <textarea
                  required
                  placeholder="تعديل العنوان"
                  name="adress"
                  id="address"
                  rows="2"
                  onChange={e =>
                    setAddressInfo({
                      ...addressInfo,
                      address: { ...addressInfo.address, ar: e.target.value }
                    })}
                />
                <textarea
                  placeholder="Edit Address"
                  style={{ direction: "ltr" }}
                  name="adress"
                  id="address"
                  required
                  rows="2"
                  onChange={e =>
                    setAddressInfo({
                      ...addressInfo,
                      address: { ...addressInfo.address, en: e.target.value }
                    })}
                />
                <button type="submit" className="btn">
                  تعديل
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
