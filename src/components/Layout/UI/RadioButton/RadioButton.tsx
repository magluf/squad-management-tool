import React from "react";
import classes from "./RadioButton.module.scss";

interface RadioButtonProps {
  text: string;
  onChange: any;
  selected: string;
  value: string;
}

const RadioButton = ({ text, onChange, selected, value }: RadioButtonProps) => {
  return (
    <div className={classes.RadioButton}>
      <div
        className={classes["modern-radio-container"]}
        onClick={() => {
          onChange(value);
        }}
        role="radio"
        aria-checked={selected === value}
      >
        <div
          className={[
            classes["radio-outer-circle"],
            value !== selected ? classes.unselected : null,
          ].join(" ")}
        >
          <div
            className={[
              classes["radio-inner-circle"],
              value !== selected ? classes["unselected-circle"] : null,
            ].join(" ")}
          />
        </div>
        <div
          className={[
            classes["helper-text"],
            value !== selected ? classes.inactive : classes.active,
          ].join(" ")}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default RadioButton;
