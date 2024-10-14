import { useState } from "react";
import Header from "../_components/Header";
import "../_styles/home.scss";
import { BiChip } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import Main from "../_components/Main";

export default function Home() {
  const [showFirst, setFirst] = useState(true);
  const [showPost, setPost] = useState(false);
  const info = [
    {
      user_image: "https://avatars.githubusercontent.com/u/2479967?v=4",
      main_image:
        "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d2cbaefd1df233633e7a642d9f00ac24?_a=AQAEuiZ",
      title: "React is a Full-Stack Framework",
      description:
        "React has evolved into a full-stack framework with the introduction of Server Components and Server Actions, allowing for seamless integration between frontend and backend. This paradigm shift has created an environment where TypeScript has become the industry standard, and tools like tRPC make calling backend functions more efficient. While initially popular as a frontend framework, React's new capabilities, especially as implemented in Next.js, empower developers to directly access server-side resources. This marks the beginning of a new era of full-stack development where React developers can implement features across the entire stack, from UI to database.",
      tags: ["codehub", "coding-world"],
    },
    {
      user_image:
        "https://res.cloudinary.com/daily-now/image/upload/s--h4FhDrgQ--/f_auto/v1726986575/avatars/avatar_LPbviamksf07ewqCu5N4p",
      main_image:
        "https://res.cloudinary.com/daily-now/image/upload/s--IqWMDQia--/f_auto/v1727609369/posts/03YXdGIil",
      title: "Ray Tracer with C++ !",
      description:
        "Creating an effective web developer resume can be challenging given the diverse skills in multiple languages, frameworks, and technologies required. This guide breaks down essential elements for tailored resumes based on different web dev specializations and career stages. From front-end to full-stack, J2EE, Java, PHP, ASP.NET developers, and career levels ranging from freelance to senior positions—each resume should emphasize relevant skills, notable projects, and specific proficiencies to catch hiring managers' attention.",
      tags: ["codehub", "coding-world"],
    },

    {
      group_image:
        "https://res.cloudinary.com/daily-now/image/upload/s--Nz8m8vMZ--/f_auto,q_auto/v1/squads/a1f0092b-0ee1-414b-82e6-f2c92d7335e4",
      user_image:
        "https://res.cloudinary.com/daily-now/image/upload/s--FnxxFa0T--/f_auto/v1724758388/squads/f0ff452e-851f-4f15-804c-0d1333bd4325",
      main_image:
        "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/4772a322ea04322a4a903c72a4af79a7?_a=AQAEuiZ",
      title: "Tailwind CSS Page Calculator",
      description:
        "Tails V2 is a design tool for TailwindCSS developers, enabling the creation of beautiful websites with a comprehensive site builder, design library, and built-in code editor. It features project organization, multiple page settings, and usage of Tailwind V3 with JIT mode. Users can sign up for a free account or upgrade to a Pro plan for additional features and unlimited projects",
      tags: ["tailwindcss", "web-styling"],
    },

    {
      group_image:
        "https://res.cloudinary.com/daily-now/image/upload/s--3BoAETXw--/f_auto/v1717993214/squads/8a09782e-202a-450f-afda-d4dd3ae97589",
      user_image:
        "https://res.cloudinary.com/daily-now/image/upload/s--emL-fnKS--/f_auto/v1728532299/avatars/avatar_3e06UInwsq3bNpOFna5bW",
      main_image:
        "https://res.cloudinary.com/daily-now/image/upload/s--ClrlWFm6--/f_auto/v1722579218/posts/GaZxO2biI",
      title:
        "Mastering Next.js: Structuring Your Large-Scale Project for Success",
      description:
        "Tails V2 is a design tool for TailwindCSS developers, enabling the creation of beautiful websites with a comprehensive site builder, design library, and built-in code editor. It features project organization, multiple page settings, and usage of Tailwind V3 with JIT mode. Users can sign up for a free account or upgrade to a Pro plan for additional features and unlimited projects",
      tags: ["next", "next.js"],
    },

    {
      group_image:
        "https://res.cloudinary.com/daily-now/image/upload/s--jD4pftYn--/f_auto/v1720848573/squads/5bbd1151-d4e5-4369-9832-1e64c0854dde",
      user_image:
        "https://lh3.googleusercontent.com/a/ACg8ocItWfFNp9WQ94Lpq0X0qA_WuAVqwTVwjZy96pStA-PZJerpPLo=s96-c",
      main_image: "https://i.ytimg.com/vi/ddKQ8sZo_v8/sddefault.jpg",
      title:
        "Build Nextjs Inventory Management Dashboard & Deploy on AWS | Postgres, Node, Tailwind, EC2, RDS, S3",
      description:
        "Tails V2 is a design tool for TailwindCSS developers, enabling the creation of beautiful websites with a comprehensive site builder, design library, and built-in code editor. It features project organization, multiple page settings, and usage of Tailwind V3 with JIT mode. Users can sign up for a free account or upgrade to a Pro plan for additional features and unlimited projects",
      tags: ["next", "next.js"],
    },

    {
      user_image:
        "https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/064efc4834bd43b987bcda02e8ad6709",
      main_image:
        "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d0e5c4791f7bffd982f074d1f8e15f8a?_a=AQAEuiZ",
      title: "React Hooks vs. Redux in 2024",
      description:
        "Tails V2 is a design tool for TailwindCSS developers, enabling the creation of beautiful websites with a comprehensive site builder, design library, and built-in code editor. It features project organization, multiple page settings, and usage of Tailwind V3 with JIT mode. Users can sign up for a free account or upgrade to a Pro plan for additional features and unlimited projects",
      tags: ["next", "next.js"],
    },
  ];
  return (
    <div className="flex col">
      <Header />
      <div className="main-container flex">
        <div className="wrapper flex">
          {info.map((card) => {
            return (
              <div
                className="card flex col"
                key={card.title}
                onClick={() => setPost(true)}
              >
                <div className="top flex">
                  {card.group_image ? (
                    <img src={card?.group_image} alt="" />
                  ) : (
                    this
                  )}
                  {card?.user_image ? (
                    <img src={card?.user_image} alt="" />
                  ) : (
                    this
                  )}
                </div>
                <div className="title">
                  <h1>
                    {card?.title?.substring(0, 30)}
                    {card?.title?.length <= 30 ? "" : "..."}
                  </h1>
                </div>
                <div className="tags flex">
                  {card?.tags?.map((tag) => {
                    return (
                      <div className="tag" key={tag}>
                        #{tag}
                      </div>
                    );
                  })}
                </div>
                <div className="main-image">
                  {card?.main_image ? (
                    <img src={card?.main_image} alt="" />
                  ) : (
                    this
                  )}
                </div>
                <div className="icons flex">
                  <div className="icon">
                    <img src="/icons/upvote.svg" alt="" />
                  </div>
                  <div className="icon">
                    <img
                      src="/icons/upvote.svg"
                      alt=""
                      style={{ transform: "rotate(180deg)" }}
                    />
                  </div>
                  <div className="icon">
                    <img src="/icons/comment.svg" alt="" />
                  </div>
                  <div className="icon">
                    <img src="/icons/bookmark.svg" alt="" />
                  </div>
                  <div className="icon">
                    <img src="/icons/link.svg" alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showFirst ? (
        <div className="first-time flex" onClick={() => setFirst(false)}>
          <div
            className="wrapper flex col"
            onClick={(e) => e.stopPropagation()}
          >
            <h1>Welcome!</h1>
            <p>
              We want to collect some basic information from you to proceed!
            </p>
            <div className="inputs flex col">
              <div className="input-wrap flex">
                <label htmlFor="first_name">First Name</label>
                <input type="text" />
              </div>
              <div className="input-wrap flex">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" />
              </div>
            </div>
            {/* <p style={{ textTransform: "capitalize", alignSelf: "flex-start" }}>
              Experience Level
            </p> */}
            <div className="cards flex">
              <div className="card flex col">
                <FaRegStar />
              </div>
              <div className="card flex col">
                <FiBookOpen />
              </div>
              <div className="card flex col">
                <BiChip />
              </div>
            </div>
            <button className="btn-confirm flex">Confirm</button>
          </div>
        </div>
      ) : (
        this
      )}
      <Main
        userId={"random"}
        postId={"random"}
        showMain={showPost}
        setShowPost={setPost}
      />
    </div>
  );
}
