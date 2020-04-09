import React, { useCallback } from "react";
import { withRouter } from "react-router";
import * as PropTypes from "prop-types";
import baseApp from "../../utils/base";
import GoogleBtn from "../login/GoogleBtn";
import "./signup.scss";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await baseApp.auth().createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="signUp">
      <h1 className="signUp__title">Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label className="signUp__email">
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label className="signUp__password">
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button className="signUp__btn" type="submit">
          Sign Up
        </button>
        <div className="signUp__googleBtn">
          <GoogleBtn />
        </div>
      </form>
    </div>
  );
};


export default withRouter(SignUp);
