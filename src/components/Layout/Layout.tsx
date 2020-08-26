import React from "react";
import classes from "./Layout.module.scss";
import Toolbar from "./Toolbar/Toolbar";
import { bc } from "../../util/bootstrap";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => (
  <div className={classes.Layout}>
    <Toolbar user="Bob Burnquist" />
    <div className={classes.Content}>
      <div className={bc("col-12 px-4")}>{children}</div>
    </div>
  </div>
);

export default Layout;
