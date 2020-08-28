import React from "react";
import { connect } from "react-redux";
import classes from "./Dashboard.module.scss";
import Card from "../../components/Layout/Card/Card";
import Table from "../../components/Layout/Table/Table";
import {
  getBootstrapClassesFromArray,
  BootstrapClasses,
} from "../../util/bootstrap";
import { AppState } from "../../store/store";
import { Team } from "../../store/ducks/teams/types";

interface StateProps {
  teams: Team[];
}

const myTeamsContent = (teamsList: Team[]) => (
  <div className={getBootstrapClassesFromArray(["px-3", "pb-2"])}>
    <Table tableItems={teamsList} tableColumns={["name", "description", ""]} />
  </div>
);

const Dashboard = ({ teams }: StateProps) => (
  <div className={classes.Dashboard}>
    <div className={getBootstrapClassesFromArray(["row", "px-3"])}>
      <div className={BootstrapClasses["col-6"]}>
        <Card title="My teams" content={myTeamsContent(teams)} button />
      </div>
      <div className={BootstrapClasses["col-6"]}>
        <Card title="Top 5" />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state: AppState) => ({ teams: state.teams.data });

export default connect(mapStateToProps)(Dashboard);
