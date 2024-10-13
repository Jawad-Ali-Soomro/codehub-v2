import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Register from "./_auth/Register";
import Home from "./_pages/Home";

function App() {
  let isAuth = window.localStorage.getItem("_codehub_token");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth ? <Home /> : <Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
