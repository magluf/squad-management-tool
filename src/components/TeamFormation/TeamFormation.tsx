import React, { useState, useEffect } from "react";
import classes from "./TeamFormation.module.scss";
import { bc } from "../../util/bootstrap";
import { FormationTypes } from "../../store/ducks/teams/types";

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
            {Object.values(FormationTypes).map((key) => {
              return !Number(key) && key !== 0 ? (
                <option key={key} value={key}>
                  {key}
                </option>
              ) : null;
            })}
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
