import React from "react";
import classes from "./programscard.module.scss";
import Image from "next/image";

interface ProgramsCardProps {
  title: string;
  img: string;
}

const ProgramsCard = (props: ProgramsCardProps) => {
  return (
    <>
      <div className={classes.singleCard}>
        <Image layout="fill" src={props.img} alt={"programs"} />
        <div className={classes.title}>{props.title}</div>
      </div>
    </>
  );
};

export default ProgramsCard;
