import classes from "./ProgramBody.module.scss";
import InfoCard, { InfoCardProps } from "../InfoCard";
import MainTitle from "../../Maintitle";
import MyTab from "../../MyTab";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import MyButton from "../../MyButton";
import { GetSingleProgram } from "@/api";
import i18next from "i18next";
export default function ProgramBody() {
  const { query } = useRouter();
  const { t } = useTranslation();
  const curLang = i18next.language;

  const { data: program } = GetSingleProgram(query?.id, {
    limit: 100,
    offset: 0,
  });

  const titlesStructure = program?.data?.courseStructure?.level?.map(
    (e: any) => e?.title?.[curLang]
  );
  const bodyStructure = program?.data?.courseStructure?.level?.map((e: any) =>
    parse(e?.description?.[curLang])
  );
  const titlesEntry = program?.data?.entryRequirement?.map(
    (e: any) => e?.title?.[curLang]
  );
  const bodyEntry = program?.data?.entryRequirement?.map((e: any) =>
    parse(e?.description?.[curLang])
  );
  return (
    <div className="container">
      <MainTitle title={program?.data?.title?.[curLang]} />
      <div className={classes.body}>
        <div className={classes.body_info}>
          {program?.data?.basicInformation?.map((d: any, i: number) => (
            <InfoCard
              key={i}
              img={d?.imagePath}
              name={d?.title?.[curLang]}
              title={d?.description?.[curLang]}
            />
          ))}
        </div>
        <div className={classes.body_data}>
          <div className={classes.body_data_left}>
            <div className={classes.body_desc}>
              <MainTitle
                title={t("Course description")}
                textposition={"left"}
                style="card"
              />
              <p>{parse(`${program?.data?.courseDescription?.[curLang]}`)}</p>
            </div>
            <div className={classes.body_how}>
              <MainTitle
                style="card"
                title={t("How you will study")}
                textposition={"left"}
              />
              <p>{parse(`${program?.data?.howYouWillStudy?.[curLang]}`)}</p>
            </div>
          </div>
          <div className={classes.body_data_right}>
            <div className={classes.body_structure}>
              <MainTitle
                title={t("Course structure")}
                textposition={"left"}
                style="card"
              />
              <p>
                {parse(
                  `${program?.data?.courseStructure?.description?.[curLang]}`
                )}
              </p>
            </div>
            <div>
              <MyTab titles={titlesStructure} components={bodyStructure} />
            </div>
          </div>
        </div>
        <MainTitle title={t("WHY STUDY THIS COURSE?")} />
        <div className={classes.body_why}>
          {program?.data?.whyStudyThisCourse?.map((d: any, i: number) => (
            <InfoCard
              key={i}
              img={d?.imagePath}
              name={d?.title?.[curLang]}
              title={d?.description?.[curLang]}
            />
          ))}
        </div>
        <MainTitle title={t("ENTRY REQUIREMENTS")} />
        <div className={classes.body_entry}>
          <MyTab titles={titlesEntry} components={bodyEntry} />
        </div>
        <MyButton fullWidth title={t("Apply")} primary />
      </div>
    </div>
  );
}
