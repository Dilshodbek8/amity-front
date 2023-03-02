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
      img: `${process.env.NEXT_PUBLIC_API_IMG}${p?.imagePath}`,
      title: p?.title?.uz,
    };
  });

  return (
    <div className={classes.body}>
      <div className="container">
        <MainTitle title={t("Program & Academics")} style="blueborder" />
        <ProgramsCard data={titles} />
      </div>
    </div>
  );
}
