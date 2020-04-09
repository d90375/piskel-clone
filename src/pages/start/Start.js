import React from "react";
import "./start.scss";
import Example from "../../components/UI/example";
import Home from "../../components/UI/home";
import Assets from "../../components/UI/assets";
import Footer from "../../components/UI/footer";

const Start = () => {
  return (
    <div className="start__wrap">
      <Home />
      <Example />
      <Assets />
      <Footer />
    </div>
  );
};

export default Start;
