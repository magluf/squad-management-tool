import React, { useState } from "react";
import classes from "./TeamForm.module.scss";
import Card from "../Layout/Card/Card";
import { bc } from "../../util/bootstrap";
import RadioButton from "../Layout/UI/RadioButton/RadioButton";
import TeamFormation from "../TeamFormation/TeamFormation";

enum FormModes {
  edit = "edit",
  create = "create",
}

interface TeamFormProps {
  mode: FormModes;
}

const TeamInformationForm = () => {
  const [radioSelected, setRadioSelected] = useState("");

  return (
    <div className={bc("col-12 px-5")}>
      <div className={bc("text-center pt-4 font-weight-bold")}>
        <p>TEAM INFORMATION</p>
      </div>
      <div className={bc("pt-4 row px-5")}>
        <div className={bc("col")}>
          <form className={bc("needs-validation")}>
            <div className={bc("form-row")}>
              <div className={bc("col mb-3 px-5")}>
                <label
                  className={bc("w-100 font-weight-bold")}
                  htmlFor="validationCustom03"
                >
                  Team name
                  <input
                    type="text"
                    className={bc("form-control mt-2")}
                    id="validationCustom03"
                    placeholder="Insert team name"
                    required
                  />
                </label>
              </div>
              <div className={bc("col mb-3 px-5")}>
                <label
                  className={bc("w-100 font-weight-bold")}
                  htmlFor="validationCustom03"
                >
                  Team website
                  <input
                    type="url"
                    className={bc("form-control mt-2")}
                    id="validationCustom03"
                    placeholder="http://myteam.com"
                    required
                  />
                </label>
              </div>
            </div>
            <div className={bc("form-row")}>
              <div className={bc("col mb-3 px-5")}>
                <label
                  className={[
                    bc("w-100 font-weight-bold"),
                    classes.Description,
                  ].join(" ")}
                  htmlFor="exampleFormControlTextarea1"
                >
                  Description
                  <textarea
                    className={bc("form-control mt-2")}
                    id="exampleFormControlTextarea1"
                    rows={10}
                  />
                </label>
              </div>
              <div className={bc("col mb-3 px-5")}>
                <label
                  className={bc("w-100 font-weight-bold")}
                  htmlFor="team-type"
                >
                  Team Type
                  <div className={bc("row")}>
                    <div className={bc("col-2")}>
                      <RadioButton
                        value="first"
                        selected={radioSelected}
                        text="Real"
                        onChange={setRadioSelected}
                      />
                    </div>
                    <div className={bc("col-3")}>
                      <RadioButton
                        value="second"
                        selected={radioSelected}
                        text="Fantasy"
                        onChange={setRadioSelected}
                      />
                    </div>
                  </div>
                </label>
                <label
                  className={[bc("w-100 font-weight-bold"), classes.Tags].join(
                    " "
                  )}
                  htmlFor="exampleFormControlTextarea1"
                >
                  Tags
                  <textarea
                    className={bc("form-control mt-2")}
                    id="exampleFormControlTextarea1"
                    rows={10}
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ConfigureSquadForm = () => {
  return (
    <div className={bc("col-12 px-5")}>
      <div className={bc("text-center pt-4 font-weight-bold")}>
        <p>CONFIGURE SQUAD</p>
      </div>
      <div className={bc("pt-4 row px-5")}>
        <div className={bc("col")}>
          <form className={bc("needs-validation")}>
            <div className={bc("form-row")}>
              <div className={bc("col justify-content-center mb-3 px-5")}>
                <TeamFormation />
              </div>
              <div className={bc("col mb-3 px-5")}>
                <label
                  className={bc("w-100 font-weight-bold")}
                  htmlFor="validationCustom03"
                >
                  Search Players
                  <input
                    type="url"
                    className={bc("form-control mt-2")}
                    id="validationCustom03"
                    required
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const TeamFormBody = () => {
  return (
    <>
      <div>{TeamInformationForm()}</div>
      <div>{ConfigureSquadForm()}</div>
    </>
  );
};

const TeamForm = ({ mode }: TeamFormProps) => (
  <div className={classes.TeamForm}>
    <div className={bc("px-3")}>
      <Card title="Create your team" content={TeamFormBody()} />
    </div>
  </div>
);

export default TeamForm;
