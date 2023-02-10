import ProgramsCard from "../../Programscard";
import classes from "./Programs.module.scss";
import MainTitle from "../../Maintitle";
import { GetPrograms } from "@/api";
import { useTranslation } from "next-i18next";
export default function Programs() {
  const { t } = useTranslation();
  const { data: programs } = GetPrograms({ limit: 100, offset: 0 });
  let titles = programs?.data?.data?.map((p: any) => {
    return {
      id: p?._id,
      img: "https://amity.albison.software/api/file/1.%20%C3%90%C2%A7%C3%90%C2%B5%C3%91%C2%80%C3%90%C2%BD%C3%91%C2%8B%C3%90%C2%B9%20%C3%90%C2%BA%C3%90%C2%BE%C3%91%C2%82%20%C3%91%C2%81%20%C3%91%C2%80%C3%91%C2%8B%C3%90%C2%B1%C3%90%C2%BA%C3%90%C2%BE%C3%90%C2%B9.jpg-1676011299438-223957858-.jpg",
      title: p?.title?.uz,
    };
  });

  return (
    <div className={classes.body}>
      <div className="container">
        <MainTitle title={t("PROGRAM & Academics")} style="blueborder" />
        <ProgramsCard data={titles} />
      </div>
    </div>
  );
}
