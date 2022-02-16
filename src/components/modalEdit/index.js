import React, { useState } from "react";
import style from "./ModalEdit.module.css";
import { useDispatch } from "react-redux";
import { edit } from "../../features/posts/postSlice";
const ModalEdit = ({ post, setPostCurrent }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(post);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleCancel = () => {
    setPostCurrent(null);
  };
  const handleSave = () => {
    dispatch(edit(form));
    setPostCurrent(null);
  };
  return (
    <div className={style.modal}>
      <div className={style.overlay}></div>
      <div className={style.body}>
        <div className={style.formGroup}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={form.title}
            id=""
          />
        </div>

        <div className={style.formGroup}>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={form.description}
            id=""
          />
        </div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={() => handleSave(form)}>Save</button>
      </div>
    </div>
  );
};

export default ModalEdit;
