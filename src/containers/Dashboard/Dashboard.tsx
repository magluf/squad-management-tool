import React from "react";
import classes from "./Dashboard.module.scss";
import Card from "../../components/Layout/Card/Card";
import Table from "../../components/Layout/Table/Table";
import {
  getBootstrapClassesFromArray,
  BootstrapClasses,
} from "../../util/bootstrap";

const myTeamsContent = () => (
  <div className={getBootstrapClassesFromArray(["px-3", "pb-2"])}>
    <Table
      tableItems={[
        {
          id: 1,
          name: "Real Madrid",
          description: "f Team description all fancy",
          stock: 20,
        },
        {
          id: 2,
          name: "Milan ",
          description: "e Team description all fancy",
          stock: 32,
        },
        {
          id: 3,
          name: "Manchester City",
          description: "a Team description all fancy",
          stock: 12,
        },
        {
          id: 4,
          name: "Heavy Cream",
          description: "b Team description all fancy",
          stock: 9,
        },
        {
          id: 5,
          name: "Butter",
          description: "c Team description all fancy",
          stock: 99,
        },
        {
          id: 6,
          name: "Sour Cream ",
          description: "d Team description all fancy",
          stock: 86,
        },
      ]}
      tableColumns={["name", "description", ""]}
    />
  </div>
);

const Dashboard = () => (
  <div className={classes.Dashboard}>
    <div className={getBootstrapClassesFromArray(["row", "px-3"])}>
      <div className={BootstrapClasses["col-6"]}>
        <Card title="My teams" content={myTeamsContent()} button />
      </div>
      <div className={BootstrapClasses["col-6"]}>
        <Card title="Top 5" />
      </div>
    </div>
  </div>
);

export default Dashboard;
