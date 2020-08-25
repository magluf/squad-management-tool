import React from "react";
import classes from "./UserBox.module.scss";

interface UserBoxProps {
  userName: string;
}

const getInitials = (userName: string) => {
  const namesArray = userName.split(" ");
  return `${namesArray[0][0]}${namesArray[1][0]}`;
};

const UserBox = ({ userName }: UserBoxProps) => (
  <div className={classes.UserBox}>
    <span>{userName}</span>
    <div className={classes.Initials}>{getInitials(userName)}</div>
  </div>
);

export default UserBox;
