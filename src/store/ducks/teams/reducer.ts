import { Reducer } from "redux";
import { TeamsState, TeamsActionTypes, Team, FormationTypes } from "./types";

const mockedTeams: Team[] = [
  {
    id: 1,
    name: "Barcelona",
    description: "Barcelona Squad",
    formation: FormationTypes["4 - 3 - 3"],
  },
  {
    id: 2,
    name: "Real Madrid",
    description: "Real Madrid Squad",
    formation: FormationTypes["3 - 2 - 2 - 3"],
  },
  {
    id: 3,
    name: "Milan",
    description: "Milan Squad",
    formation: FormationTypes["4 - 2 - 3 - 1"],
  },
  {
    id: 4,
    name: "Liverpool",
    description: "Liverpool Squad",
    formation: FormationTypes["4 - 4 - 2"],
  },
  {
    id: 5,
    name: "Bayern Munich",
    description: "Bayern Munich Squad",
    formation: FormationTypes["4 - 3 - 3"],
  },
  {
    id: 6,
    name: "Lazio",
    description: "Lazio Squad",
    formation: FormationTypes["3 - 5 - 2"],
  },
];

const INITIAL_STATE: TeamsState = {
  data: mockedTeams,
  loading: false,
  error: false,
};

export const teamsReducer: Reducer<TeamsState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case TeamsActionTypes.CREATE_TEAM:
      return {
        ...state,
        data: state.data.concat(action.payload),
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
