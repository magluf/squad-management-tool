import React from "react";
import Toolbar from "./Toolbar/Toolbar";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Toolbar user="Bob Burnquist" />
    <div>{children}</div>
  </>
);

export default Layout;
