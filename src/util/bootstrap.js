import bsClasses from "../assets/styles/bootstrap/bootstrap.module.css";

export const BootstrapClasses = bsClasses;

// TODO: Try to implement this with Typescript for intellisense.

// Returns valid CSS Modules Bootstrap classes.
export const bc = (classesString) => {
  return classesString
    .split(" ")
    .map((c) => BootstrapClasses[c])
    .join(" ");
};

// Lame, not using this.
export const getBootstrapClassesFromArray = (classesArray) => {
  return classesArray.map((className) => BootstrapClasses[className]).join(" ");
};
