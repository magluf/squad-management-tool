import React from "react";
import classes from "./Dashboard.module.scss";
import Card from "../../components/Layout/Card/Card";
import { BootstrapClasses } from "../../assets/styles/bootstrap/bootstrap.interface";
import bsClasses from "../../assets/styles/bootstrap/bootstrap.module.css";

const joinBootstrapClasses = (classesArray: Array<keyof BootstrapClasses>) => {
  return classesArray.map((className) => bsClasses[className]).join(" ");
};

const myTeamsContent = () => <span>STUFF</span>;

const Dashboard = () => (
  <div className={classes.Dashboard}>
    <div className={joinBootstrapClasses(["col-12", "px-4"])}>
      <div className={joinBootstrapClasses(["row", "px-3"])}>
        <div className={bsClasses["col-6"]}>
          <Card title="My teams" content={myTeamsContent()} button />
        </div>
        <div className={bsClasses["col-6"]}>
          <Card title="Top 5" />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
