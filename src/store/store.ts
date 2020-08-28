import { createStore, Store } from "redux";
import { TeamsState } from "./ducks/teams/types";
import rootReducer from "./ducks/rootReducer";

export interface AppState {
  teams: TeamsState;
}

const store: Store<AppState> = createStore(rootReducer);

export default store;
