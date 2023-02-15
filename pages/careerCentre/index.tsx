import classes from "./style.module.scss";
import Header from "../../components/Header";
import { useTranslation } from "next-i18next";
import { GetCareerCategory } from "@/api";
import MyTabCareer from "@/components/MyTabCareer";

export default function CareerCentre() {
  const { t } = useTranslation();
  const { data: career } = GetCareerCategory();
  const careerTitle = career?.data?.map((c: any) => c?.titleUz);

  return (
    <>
      <Header title={t("Career Centre")} white />
      <div className="container">
        <div className={classes.body}>
          <MyTabCareer titles={career?.data} />
        </div>
      </div>
    </>
  );
}
