import React from "react";
import ProgramsCard from "./Programscard";
import classes from "./programscard.module.scss";
import Link from "next/link";
interface wrapCardProps {
  data: Array<{
    img: string;
    title: string;
    id: string;
  }>;
}

const wrapCard = (props: wrapCardProps) => {
  return (
    <>
      <div className={classes.wrapCard}>
        {props?.data?.map((item: any, i: number) => (
          <Link key={i} href={`/programs?id=${item?.id}`}>
            <ProgramsCard title={item.title} img={item.img} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default wrapCard;
