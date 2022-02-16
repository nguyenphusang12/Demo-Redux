import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css";
import ModalEdit from "../../components/modalEdit";
import { del } from "../../features/posts/postSlice";
const Home = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post.posts);
  const [postCurrent, setPostCurrent] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleEdit = (p) => {
    if (isAuthenticated) {
      setPostCurrent(p);
    } else {
      navigate("/login");
    }
  };
  const handleDelete = (id) => {
    if (isAuthenticated) {
      dispatch(del(id));
    } else {
      navigate("/login");
    }
  };
  return (
    <div className={style.root}>
      {posts.map((p, i) => (
        <div className={style.item} key={i}>
          <img
            className={style.itemImg}
            src="http://placeimg.com/640/360/any"
            alt="..."
          />
          <h1>{p.title}</h1>
          <p>{p.description}</p>
          <button onClick={() => handleEdit(p)}>Edit</button>
          <button onClick={() => handleDelete(i)}>Delete</button>
        </div>
      ))}
      {postCurrent && (
        <ModalEdit post={postCurrent} setPostCurrent={setPostCurrent} />
      )}
    </div>
  );
};

export default Home;
