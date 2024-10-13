import { BiHome, BiTag } from "react-icons/bi";
import "../_styles/header.scss";
import { CgHashtag } from "react-icons/cg";

const Header = () => {
  const tab = window.location.pathname;
  return (
    <div className="header-main flex">
      <div className="icon flex" id={tab === "/" ? "active" : ""}>
        <BiHome className="icon-main" />
      </div>
      <div className="icon flex">
        <img src="/icons/fire.svg" alt="" className="icon-main" />
      </div>
      <div className="icon flex">
        <img src="/icons/menu.svg" alt="" className="icon-main" />
      </div>

      <div className="icon flex">
        <img src="/icons/bookmark.svg" alt="" className="icon-main" />
      </div>
      <div className="icon flex">
        <CgHashtag className="icon-main" />
      </div>
    </div>
  );
};

export default Header;
