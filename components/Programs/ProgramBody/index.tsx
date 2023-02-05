import classes from "./ProgramBody.module.scss";
import InfoCard, { InfoCardProps } from "../InfoCard";
import MainTitle from "../../Maintitle";
import MyTab from "../../MyTab";
import Entry from "../Entry";
import { useRouter } from "next/router";

import MyButton from "../../MyButton";
import { GetPrograms, GetSingleProgram } from "@/api";

export default function ProgramBody() {
  const { query } = useRouter();

  const { data: program } = GetSingleProgram(query?.id, {
    limit: 100,
    offset: 0,
  });
  console.log(program, "program");

  const data = [
    { img: "Cash.svg", name: "Tuition Fees Uzb", title: "32’993’400 UZS" },
    {
      img: "Cash.svg",
      name: "Tuition Fees International",
      title: "49,637,280 UZS",
    },
    { img: "Cash.svg", name: "Duration", title: "3 years" },
    { img: "Cash.svg", name: "Modules", title: "28" },
  ];
  const data2 = [
    {
      img: "Cash.svg",
      name: "Skills-focussed ",
      text: "Linking theory with practice and with the real-world economy.",
    },
    {
      img: "Cash.svg",
      name: "Skills-focussed ",
      text: "Developing skills that are in great demand by employers in the finance industry.",
    },
    {
      img: "Cash.svg",
      name: "Professionally aligned ",
      text: "With professional bodies such as ACCA.",
    },
  ];
  return (
    <div className="container">
      <MainTitle title={program?.data?.basicInformations?.[0]?.title?.uz} />
      <div className={classes.body}>
        <div className={classes.body_info}>
          {data?.map((d: InfoCardProps, i: number) => (
            <InfoCard key={i} img={d?.img} name={d?.name} title={d?.title} />
          ))}
        </div>

        <MainTitle title={"WHY STUDY THIS COURSE?"} />
        <div className={classes.body_why}>
          {data2?.map((d: InfoCardProps, i: number) => (
            <InfoCard
              key={i}
              img={d?.img}
              name={d?.name}
              title={d?.title}
              text={d?.text}
            />
          ))}
        </div>
        <MainTitle title="ENTRY REQUIREMENTS" />
        <div className={classes.body_entry}>
          <MyTab
            titles={["General", "English language", "Math", "Age"]}
            components={[
              <Entry
                key={"1"}
                title="Applicants should satisfy at a minimum one of the following
            requirements:"
                text={[
                  " Successful completion of an appropriate International  course;",
                  "  Successful completion of the first year of an appropriate degree  in a recognised Uzbek or similar university;",
                  " Two GCE A level passes (in any subject excluding mother tongue), plus three GCSE passes at grade C or above including English Language and Mathematics;",
                  " Successful completion of an appropriate International  course;",
                ]}
              />,
              <Entry
                key={"2"}
                title="Applicants should satisfy at a minimum one of the following
          requirements:"
                text={[
                  " Successful completion of an appropriate International  course;",
                  "  Successful completion of the first year of an appropriate degree  in a recognised Uzbek or similar university;",
                  " Two GCE A level passes (in any subject excluding mother tongue), plus three GCSE passes at grade C or above including English Language and Mathematics;",
                  " Successful completion of an appropriate International  course;",
                ]}
              />,
              <Entry
                key={"3"}
                title="Applicants should satisfy at a minimum one of the following
        requirements:"
                text={[
                  " Successful completion of an appropriate International  course;",
                  "  Successful completion of the first year of an appropriate degree  in a recognised Uzbek or similar university;",
                  " Two GCE A level passes (in any subject excluding mother tongue), plus three GCSE passes at grade C or above including English Language and Mathematics;",
                  " Successful completion of an appropriate International  course;",
                ]}
              />,
            ]}
          />
        </div>
        <MyButton fullWidth title={"Apply"} primary />
      </div>
    </div>
  );
}
