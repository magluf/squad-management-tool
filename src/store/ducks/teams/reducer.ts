import { Reducer } from "redux";
import {
  TeamsState,
  TeamsActionTypes,
  Team,
  FormationTypes,
  TeamTypes,
} from "./types";

const mockedTeams: Team[] = [
  {
    id: 1,
    name: "Barcelona",
    type: TeamTypes.REAL,
    description: "Barcelona Squad",
    website: "www.team.com",
    formation: FormationTypes["4 - 3 - 3"],
  },
  {
    id: 2,
    name: "Real Madrid",
    type: TeamTypes.REAL,
    description: "Real Madrid Squad",
    website: "www.team.com",
    formation: FormationTypes["3 - 2 - 2 - 3"],
  },
  {
    id: 3,
    name: "Milan",
    type: TeamTypes.REAL,
    description: "Milan Squad",
    website: "www.team.com",
    formation: FormationTypes["4 - 2 - 3 - 1"],
  },
  {
    id: 4,
    name: "Liverpool",
    type: TeamTypes.REAL,
    description: "Liverpool Squad",
    website: "www.team.com",
    formation: FormationTypes["4 - 4 - 2"],
  },
  {
    id: 5,
    name: "Bayern Munich",
    type: TeamTypes.REAL,
    description: "Bayern Munich Squad",
    website: "www.team.com",
    formation: FormationTypes["4 - 3 - 3"],
  },
  {
    id: 6,
    name: "Lazio",
    type: TeamTypes.REAL,
    description: "Lazio Squad",
    website: "www.team.com",
    formation: FormationTypes["3 - 5 - 2"],
  },
];

const INITIAL_STATE: TeamsState = {
  data: mockedTeams,
  loading: false,
  error: false,
};

const teamsReducer: Reducer<TeamsState> = (state = INITIAL_STATE, action) => {
  console.log("action", action);
  switch (action.type) {
    case TeamsActionTypes.CREATE_TEAM:
      return {
        ...state,
        data: state.data.concat(action.payload.team),
      };

    case TeamsActionTypes.DELETE_TEAM:
      return {
        ...state,
        data: state.data.filter((team) => team.id !== action.payload),
      };

    case TeamsActionTypes.UPDATE_TEAM:
      return {
        ...state,
        data: state.data.map((team) => {
          return team.id !== action.payload.id
            ? team
            : { ...team, ...action.payload };
        }),
      };

    default:
      return state;
  }
};

export default teamsReducer;
