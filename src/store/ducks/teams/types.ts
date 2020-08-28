export enum TeamsActionTypes {
  LOAD_TEAMS = "[Teams] Load Teams",
  CREATE_TEAM = "[Teams] Create Team",
  DELETE_TEAM = "[Teams] Delete Team",
  UPDATE_TEAM = "[Teams] Update Team",
}

export enum TeamTypes {
  REAL = "real",
  FANTASY = "fantasy",
}

export enum FormationTypes {
  "3 - 2 - 2 - 3",
  "3 - 2 - 3 - 1",
  "3 - 4 - 3",
  "3 - 5 - 2",
  "4 - 2 - 3 - 1",
  "4 - 3 - 2 - 1",
  "4 - 3 - 3",
  "4 - 4 - 2",
  "4 - 5 - 1",
  "5 - 4 - 1",
}

export interface Team {
  id: number;
  name: string;
  description: string;
  type: TeamTypes;
  website: string;
  formation: FormationTypes;
}

export interface TeamsState {
  readonly data: Team[];
  readonly loading: boolean;
  readonly error: boolean;
}
