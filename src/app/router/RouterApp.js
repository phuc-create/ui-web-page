import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";

const RouterApp = () => {
  return (
    <>
      <Link className="container__link--l" to="/">
        Home
      </Link>
      <Link className="container__link--l" to="/docs">
        Docs
      </Link>
      <Link className="container__link--l" to="/usage">
        Usage
      </Link>
      <Link className="container__link--l" to="/usage">
        GitHub 🔥
      </Link>
    </>
  );
};

export default RouterApp;
