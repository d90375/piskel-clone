import React, { useCallback, useContext } from "react";
import * as PropTypes from "prop-types";
import { withRouter, Redirect } from "react-router";
import { useDispatch } from "react-redux";
import baseApp from "../../utils/base";
import { AuthContext } from "../../store/auth/AuthProvider";
import "firebase/auth";
import GoogleBtn from "./GoogleBtn";
import "./login.scss";
import { setLogin } from "../../store/actions/authentication";

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await baseApp.auth().signInWithEmailAndPassword(email.value, password.value);
        dispatch(setLogin({ logIn: true }));
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signIn">
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <label className="signIn__email">
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label className="signIn__password">
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign In</button>
        <div className="signIn__googleBtn">
          <GoogleBtn />
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Login);
