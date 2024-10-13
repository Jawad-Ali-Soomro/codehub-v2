import { BsGithub, BsGoogle, BsTwitterX } from "react-icons/bs";
import "../_styles/register.scss";
import { useState } from "react";
const Register = () => {
  const [showReg, setShow] = useState(true);
  return (
    <div className="reg-main flex">
      <div className="left flex col">
        <div className="card-1 flex">
          <img src="/icons/group.svg" alt="" />
        </div>
        <div className="cards flex">
          <div className="card flex card-one">
            <img src="/icons/code.svg" alt="" />
          </div>
          <div className="card flex card-two">
            <img src="/icons/fire.svg" alt="" />
          </div>
        </div>
        <div className="card-last flex">
          <img src="/icons/video.svg" alt="" />
        </div>
      </div>
      <div className="right flex col">
        <div className="main flex col">
          <h1>{showReg ? "Let's Explore" : "Welcome"}!</h1>
          {showReg ? (
            <div className="input-wrap flex" style={{ marginTop: "30px" }}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
          ) : (
            this
          )}
          <div className="input-wrap flex">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="input-wrap flex">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" />
          </div>
          {showReg ? (
            <button
              className="btn-big flex"
              onClick={() =>
                window.localStorage.setItem("_codehub_token", "randomtoken")
              }
            >
              REGISTER
            </button>
          ) : (
            <button className="btn-big flex">lOGIN</button>
          )}
          <div className="text flex">
            <span>OR</span>
          </div>
          <div className="icons flex">
            <div className="icon flex">
              <BsGoogle />
            </div>
            <div className="icon flex">
              <BsGithub />
            </div>
            <div className="icon flex">
              <BsTwitterX />
            </div>
            {showReg ? (
              <button className="btn-small" onClick={() => setShow(false)}>
                LOGIN
              </button>
            ) : (
              <button className="btn-small" onClick={() => setShow(true)}>
                REGISTER
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
