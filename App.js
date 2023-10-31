import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.png";
import user from "./images/user.png";

const heading = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "Heading 1"),
  React.createElement("h2", {}, "Heading 2"),
  React.createElement("h3", {}, "Heading 3"),
]);

const jsxHeading = (
  <div className="title">
    <h1>Heading 1 using JSX</h1>
    <h2>Heading 2 using JSX</h2>
    <h3>Heading 3 using JSX</h3>
  </div>
);

const HeadingComponent = () => (
  <div className="title">
    <TitleComponent />
    <h1>Heading 1 using JSX</h1>
    <h2>Heading 2 using JSX</h2>
    <h3>Heading 3 using JSX</h3>
  </div>
);

const TitleComponent = () => (
  <h1>
    Learn React By Doing!
    <br />
  </h1>
);

const HeaderComponent = () => (
  <>
    <div className="side-by-side">
      <div className="logoImgDiv">
        <img src={logo} alt="logo" className="logoImg" />
      </div>
      <div className="searchDiv">
        <input placeholder="Enter Post Title" className="searchBar" />
      </div>
      <div className="userImgDiv">
        <img src={user} alt="user" className="userImg" />
      </div>
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
