/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  FaFacebook,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import "../_styles/main.scss";

const Main = ({ userId, postId, showMain, setShowPost }) => {
  return (
    <div
      className="main-post flex"
      style={{ height: `${showMain ? "100vh" : "0vh"}` }}
      onClick={() => setShowPost(false)}
    >
      <div className="main flex" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close flex" onClick={() => setShowPost(false)}>
          <div className="close-sect flex col">
            <div></div>
            <div></div>
          </div>
        </button>
      </div>
      <div className="left-sect flex col" onClick={(e) => e.stopPropagation()}>
        <h1>React Hooks vs. Redux in 2024</h1>
        <p>
          <span>TLDR</span>
          Tails V2 is a design tool for TailwindCSS developers, enabling the
          creation of beautiful websites with a comprehensive site builder,
          design library, and built-in code editor. It features project
          organization, multiple page settings, and usage of Tailwind V3 with
          JIT mode. Users can sign up for a free account or upgrade to a Pro
          plan for additional features and unlimited projects
        </p>
        <img
          src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d0e5c4791f7bffd982f074d1f8e15f8a?_a=AQAEuiZ"
          alt=""
        />
      </div>
      <div className="right-sect flex col" onClick={(e) => e.stopPropagation()}>
        <div className="profile flex">
          <div className="flex">
            <img
              src="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/064efc4834bd43b987bcda02e8ad6709"
              alt=""
            />
            <h1>John Doe</h1>
          </div>
          <button>Follow</button>
        </div>
        <div className="icons flex">
          <div className="icon flex">
            <FaFacebook />
          </div>
          <div className="icon flex">
            <FaXTwitter />
          </div>
          <div className="icon flex">
            <FaWhatsapp />
          </div>
          <div className="icon flex">
            <FaLinkedin />
          </div>
          <div className="icon flex">
            <FaInstagram />
          </div>
          <div className="icon flex">
            <FaLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
