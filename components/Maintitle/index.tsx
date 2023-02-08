import React from "react";
import classes from "./maintitle.module.scss";

interface MainTitleProps {
  title: string;
  subtitle?: string | null;
  minititle?: string | null;
  style?: "whitetitle" | "blueborder" | "ordinary" | "card";
  textposition?: "left" | "right" | "center";
}

const MainTitle = (props: MainTitleProps) => {
  let style;
  let textposition;

  if (props.style == "blueborder") {
    style = "blueborder";
  } else if (props.style == "whitetitle") {
    style = "whitetitle";
  } else if (props.style == "ordinary") {
    style = "ordinary";
  } else if (props.style == "card") {
    style = "card";
  } else {
    style = "default";
  }

  if (props.textposition == "left") {
    textposition = "left";
  } else if (props.textposition == "right") {
    textposition = "right";
  } else {
    textposition = "center";
  }
  return (
    <>
      <div
        className={`${classes[style]} ${classes.wrap} ${classes[textposition]}`}
      >
        <h5>{props.minititle}</h5>
        <h2>{props.title}</h2>
        <span></span>
        <p>{props.subtitle}</p>
      </div>
    </>
  );
};

export default MainTitle;
