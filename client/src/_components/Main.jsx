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
      <div
        className="right-sect flex col"
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default Main;
