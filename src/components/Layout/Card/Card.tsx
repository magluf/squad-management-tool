import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Card.module.scss";

interface CardProps {
  title?: string;
  content?: JSX.Element | null;
  button?: boolean;
}

const Card = ({ title, content, button }: CardProps) => (
  <div className={classes.Card}>
    <div className={classes.Card}>
      <div className={classes.CardHeader}>
        <div className={classes.Title}>{title}</div>
        {button ? (
          <NavLink className={classes.NavLink} to="/create-team">
            <button type="button" className={classes.AddButton}>
              +
            </button>
          </NavLink>
        ) : null}
      </div>
      <div className={classes.Content}>{content}</div>
    </div>
  </div>
);

Card.defaultProps = {
  button: false,
  content: null,
  title: "",
} as CardProps;

export default Card;
