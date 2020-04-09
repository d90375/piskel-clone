import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/resources/img/logo_transparent_small_compact.png";
import baseApp from "../../utils/base";

const Header = () => {
  const obj = useSelector(state => state.log.obj);
  return (
    <header className="header">
      <h1 className="visualHide">PISKEL</h1>
      <Link className="header__logo" to="/">
        <img src={logo} alt="piskel" />
      </Link>
      <div className="header__buttonWrap">
        <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
          <div style={{ display: "flex", flexDirection: "row",marginRight: "10px" }}>
            <span style={{marginRight: "10px", color: "#a7a7a7"}}>User:</span>
            <span style={{ color: "#FFFFFF" }}> {obj.displayName}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "row",marginRight: "10px" }}>
            <span style={{marginRight: "10px", color: "#a7a7a7"}}>email:</span>
            <span style={{ color: "#FFFFFF" }}>{obj.email}</span>
          </div>
        </div>
        <Link to="/application">
          <button type="button" className="header__btn header__createBtn">
            Create Sprite
          </button>
        </Link>
        <Link to="/login">
          <button type="button" className="header__btn header__loginBtn">
            Sign in
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            className="header__btn header__outBtn"
            onClick={() => baseApp.auth().signOut()}
          >
            Sign out
          </button>
        </Link>
        <Link to="/signup">
          <button type="button" className="header__btn header__registerBtn">
            Sign up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
