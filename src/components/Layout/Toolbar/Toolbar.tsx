import React from "react";
import classes from "./Toolbar.module.scss";
import venturusLogo from "../../../assets/images/venturus-logo.svg";
import UserBox from "../UserBox/UserBox";

interface ToolbarProps {
  user: string;
}

const Toolbar = ({ user }: ToolbarProps) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <img src={venturusLogo} alt="Venturus" />
      <span>Squad Management Tool</span>
    </div>
    <div className={classes.UserBox}>
      <UserBox userName={user} />
    </div>
  </header>
);

export default Toolbar;
