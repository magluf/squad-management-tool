import React from "react";
import classes from "./Layout.module.scss";
import Toolbar from "./Toolbar/Toolbar";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => (
  <div className={classes.Layout}>
    <Toolbar user="Bob Burnquist" />
    <div className={classes.Content}>{children}</div>
  </div>
);

export default Layout;
