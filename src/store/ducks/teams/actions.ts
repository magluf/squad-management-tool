import { action } from "typesafe-actions";
import { TeamsActionTypes, Team } from "./types";

export const loadTeams = (teams: Team[]) =>
  action(TeamsActionTypes.LOAD_TEAMS, { teams });

export const createTeam = () => action(TeamsActionTypes.CREATE_TEAM);

export const deleteTeam = () => action(TeamsActionTypes.DELETE_TEAM);

export const updateTeam = () => action(TeamsActionTypes.UPDATE_TEAM);
