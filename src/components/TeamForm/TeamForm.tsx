import React, { useState } from "react";
import classes from "./TeamForm.module.scss";
import Card from "../Layout/Card/Card";
import { bc } from "../../util/bootstrap";
import RadioButton from "../Layout/UI/RadioButton/RadioButton";
import TeamFormation from "../TeamFormation/TeamFormation";
import TagsInput from "../Layout/UI/RadioButton/TagsInput/TagsInput";

enum FormModes {
  edit = "edit",
  create = "create",
}

interface TeamFormProps {
  mode: FormModes;
}

const checkRequiredField = (value: string, required: boolean) => {
  let isValid = true;

  if (required) {
    isValid = value.trim() !== "";
  }

  return isValid;
};

const TeamInformationForm = () => {
  const [teamInformationForm, setTeamInformationForm] = useState({
    teamName: {
      value: "",
      validation: { valid: false, touched: false, rules: { required: true } },
    },
    description: {
      value: "",
      validation: { valid: false, touched: false, rules: { required: false } },
    },
    teamWebsite: {
      value: "",
      validation: { valid: false, touched: false, rules: { required: true } },
    },
    teamType: {
      value: "",
      validation: { valid: false, touched: false, rules: { required: true } },
    },
  });

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
                  className={bc(
                    `w-100 font-weight-bold ${
                      !teamInformationForm.teamName.validation.valid &&
                      teamInformationForm.teamName.validation.touched
                        ? "text-danger"
                        : null
                    }`
                  )}
                  htmlFor="validationCustom03"
                >
                  Team name
                  <input
                    onChange={(e) => {
                      setTeamInformationForm({
                        ...teamInformationForm,
                        teamName: {
                          ...teamInformationForm.teamName,
                          value: e.target.value,
                          validation: {
                            ...teamInformationForm.teamName.validation,
                            valid: checkRequiredField(
                              e.target.value,
                              teamInformationForm.teamName.validation.rules
                                .required
                            ),
                            touched: true,
                          },
                        },
                      });
                    }}
                    value={teamInformationForm.teamName.value}
                    type="text"
                    className={bc(
                      `form-control mt-2 ${
                        !teamInformationForm.teamName.validation.valid &&
                        teamInformationForm.teamName.validation.touched
                          ? "is-invalid"
                          : null
                      }`
                    )}
                    id="validationCustom03"
                    placeholder="Insert team name"
                    required
                  />
                </label>
              </div>
              <div className={bc("col mb-3 px-5")}>
                <label
                  className={bc(
                    `w-100 font-weight-bold ${
                      !teamInformationForm.teamWebsite.validation.valid &&
                      teamInformationForm.teamWebsite.validation.touched
                        ? "text-danger"
                        : null
                    }`
                  )}
                  htmlFor="validationCustom03"
                >
                  Team website
                  <input
                    onChange={(e) => {
                      setTeamInformationForm({
                        ...teamInformationForm,
                        teamWebsite: {
                          ...teamInformationForm.teamWebsite,
                          value: e.target.value,
                          validation: {
                            ...teamInformationForm.teamWebsite.validation,
                            valid: checkRequiredField(
                              e.target.value,
                              teamInformationForm.teamWebsite.validation.rules
                                .required
                            ),
                            touched: true,
                          },
                        },
                      });
                    }}
                    type="url"
                    value={teamInformationForm.teamWebsite.value}
                    className={bc(
                      `form-control mt-2 ${
                        !teamInformationForm.teamWebsite.validation.valid &&
                        teamInformationForm.teamWebsite.validation.touched
                          ? "is-invalid"
                          : null
                      }`
                    )}
                    id="validationCustom03"
                    placeholder="http://myteam.com"
                  />
                </label>
              </div>
            </div>
            <div className={bc("form-row")}>
              <div className={bc("col mb-3 px-5")}>
                <label
                  className={[
                    bc(
                      `w-100 font-weight-bold ${
                        !teamInformationForm.description.validation.valid &&
                        teamInformationForm.description.validation.touched
                          ? "text-danger"
                          : null
                      }`
                    ),
                    classes.Description,
                  ].join(" ")}
                  htmlFor="exampleFormControlTextarea1"
                >
                  Description
                  <textarea
                    onChange={(e) => {
                      setTeamInformationForm({
                        ...teamInformationForm,
                        description: {
                          ...teamInformationForm.description,
                          value: e.target.value,
                          validation: {
                            ...teamInformationForm.description.validation,
                            valid: checkRequiredField(
                              e.target.value,
                              teamInformationForm.description.validation.rules
                                .required
                            ),
                            touched: true,
                          },
                        },
                      });
                    }}
                    value={teamInformationForm.description.value}
                    className={bc(
                      `form-control mt-2 ${
                        !teamInformationForm.description.validation.valid &&
                        teamInformationForm.description.validation.touched
                          ? "is-invalid"
                          : null
                      }`
                    )}
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
                  <div className={bc("row mb-3")}>
                    <div className={bc("col-2")}>
                      <RadioButton
                        value="first"
                        selected={teamInformationForm.teamType.value}
                        text="Real"
                        onChange={() => {
                          setTeamInformationForm({
                            ...teamInformationForm,
                            teamType: {
                              ...teamInformationForm.teamType,
                              value: "first",
                            },
                          });
                        }}
                      />
                    </div>
                    <div className={bc("col-3")}>
                      <RadioButton
                        value="second"
                        selected={teamInformationForm.teamType.value}
                        text="Fantasy"
                        onChange={() => {
                          setTeamInformationForm({
                            ...teamInformationForm,
                            teamType: {
                              ...teamInformationForm.teamType,
                              value: "second",
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                </label>
                <label className={bc("w-100 font-weight-bold")}>
                  Tags
                  <TagsInput tagList={[]} />
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
