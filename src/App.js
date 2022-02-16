import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
