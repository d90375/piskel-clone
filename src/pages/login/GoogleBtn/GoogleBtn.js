import React from "react";
import "./googlebtn.scss";
import GoogleButton from "react-google-button";
import * as firebase from "firebase/app";
import { useDispatch } from "react-redux";
import baseApp from "../../../utils/base";
import { setUserRules } from "../../../store/actions/authentication";

const GoogleBtn = () => {
  const dispatch = useDispatch();
  return (
    <>
      <GoogleButton
        className="google__btn"
        type="light"
        onClick={() => {
          const provider = new firebase.auth.GoogleAuthProvider();
          baseApp
            .auth()
            .signInWithPopup(provider)
            .then(result => {
              const { displayName, email } = result.user;
              dispatch(setUserRules({ obj: { displayName, email } }));
            });
        }}
      />
    </>
  );
};

export default GoogleBtn;
