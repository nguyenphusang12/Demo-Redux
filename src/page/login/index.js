import React, { useState, useEffect } from "react";
import style from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../features/auth/authSlice";
const Login = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    if (form.username === "admin" && form.password === "123456") {
      dispatch(loginSuccess());
    } else {
      alert("Mật khẩu sai username = admin password = 123456");
    }
  };
  return (
    <div className={style.root}>
      <div className={style.form}>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="username">
            Tên tài khoản
          </label>
          <input
            className={style.inputForm}
            type="text"
            name="username"
            id="username"
            value={form.username}
            onChange={handleChangeForm}
          />
        </div>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="password">
            Mật Khẩu
          </label>
          <input
            className={style.inputForm}
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChangeForm}
          />
        </div>
        <button className={style.btnLogin} onClick={handleLogin}>
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default Login;
