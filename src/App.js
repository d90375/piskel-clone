import React, { Component } from "react";
import "./app.scss";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore} from "redux";
import Start from "./pages/start";
import Application from "./pages/application";
import Header from "./components/header";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { AuthProvider } from "./store/auth/AuthProvider";
import PrivateRoute from "./store/auth/PrivateRoute";
import rootReducer from "./store/rootReducer";

const store = createStore(
  rootReducer
);

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <Header />
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Start} />
              <Route path="/application" component={Application} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/signup" component={SignUp} exact />
              <Route
                path="/rss"
                render={() => (
                  <div>
                    <h1 className="rss">Thank you RSSchool</h1>
                  </div>
                )}
                exact
              />
            </Switch>
          </AuthProvider>
        </Provider>
      </div>
    );
  }
}
