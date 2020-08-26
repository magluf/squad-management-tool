import React, { useState, useEffect } from "react";
import classes from "./TeamFormation.module.scss";
import { bc } from "../../util/bootstrap";

const PlayerCircle = (index: number) => {
  return (
    <div key={index} className={classes.PlayerCircleOuter}>
      <div className={classes.PlayerCircleInner}>+</div>
    </div>
  );
};

const PlayersSection = (size: number, type: any, id: string) => {
  let positionClass = "";
  switch (type) {
    case "Attackers":
      positionClass = classes.Attackers;
      break;

    case "Midfielders":
      positionClass = classes.Midfielders;
      break;

    case "Defenders":
      positionClass = classes.Defenders;
      break;

    case "Goalkeeper":
      positionClass = classes.Goalkeeper;
      break;

    default:
      break;
  }

  return (
    <div
      key={id}
      className={[classes.FormationSection, positionClass].join(" ")}
    >
      {[...Array(size)].map((_, i) => PlayerCircle(i))}
    </div>
  );
};

const TeamFormation = () => {
  const [formation, setFormation] = useState("select");

  const [formationParams, setFormationParams] = useState([
    { id: "", type: "", qty: 0 },
  ]);

  useEffect(() => {
    const getFormationParams = () => {
      const formationQtyArray = formation.replace(/ /g, "").split("-");

      if (formationQtyArray.length === 3) {
        const [def, mid, att] = formationQtyArray;
        return [
          {
            id: "att",
            type: "Attackers",
            qty: +att,
          },
          {
            id: "mid",
            type: "Midfielders",
            qty: +mid,
          },
          {
            id: "def",
            type: "Defenders",
            qty: +def,
          },
        ];
      }
      const [def, midD, mid, att] = formationQtyArray;
      return [
        {
          id: "att",
          type: "Attackers",
          qty: +att,
        },
        {
          id: "mid",
          type: "Midfielders",
          qty: +mid,
        },
        {
          id: "midD",
          type: "Midfielders",
          qty: +midD,
        },
        {
          id: "def",
          type: "Defenders",
          qty: +def,
        },
      ];
    };

    if (formation !== "select") {
      setFormationParams(getFormationParams());
    }
  }, [formation]);

  const onChangeFormationHandler = (e: any) => {
    setFormation(e.target.value);
  };

  return (
    <div className={classes.TeamFormation}>
      <div className={bc("form-group row")}>
        <label
          htmlFor="inputPassword"
          className={bc("col-sm-2 col-form-label")}
        >
          Formation
        </label>
        <div className={bc("col-sm-10")}>
          <select
            value={formation}
            onChange={(e) => onChangeFormationHandler(e)}
            className={bc("custom-select w-50")}
          >
            <option value="select">Choose formation...</option>
            <option value="3 - 2 - 2 - 3">3 - 2 - 2 - 3</option>
            <option value="3 - 2 - 3 - 1">3 - 2 - 3 - 1</option>
            <option value="3 - 4 - 3">3 - 4 - 3</option>
            <option value="3 - 5 - 2">3 - 5 - 2</option>
            <option value="4 - 2 - 3 - 1">4 - 2 - 3 - 1</option>
            <option value="4 - 3 - 2 - 1">4 - 3 - 2 - 1</option>
            <option value="4 - 3 - 3">4 - 3 - 3</option>
            <option value="4 - 4 - 2">4 - 4 - 2</option>
            <option value="4 - 5 - 1">4 - 5 - 1</option>
            <option value="5 - 4 - 1">5 - 4 - 1</option>
          </select>
        </div>
      </div>
      <div className={classes.FormationField}>
        <div className={classes.MidfieldCircle} />
        <div className={classes.MidfieldLine} />
        <div className={classes.FormationTacticsContainer}>
          {/* {PlayersSection(2, "Attackers")}
          {PlayersSection(4, "Midfielders")}
          {PlayersSection(2, "Defenders")}
          {PlayersSection(1, "Goalkeeper")} */}
          {formation !== "select"
            ? formationParams.map((el) => {
                return PlayersSection(el.qty, el.type, el.id);
              })
            : null}
          {formation !== "select"
            ? PlayersSection(1, "Goalkeeper", "gk")
            : null}
        </div>
      </div>
    </div>
  );
};

export default TeamFormation;
