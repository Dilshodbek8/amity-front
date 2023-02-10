import classes from "./News.module.scss";
import Newscardsingle from "../../Newscard/Newcardsingle";
import MySlider from "../../Slider";
import MainTitle from "../../Maintitle";
import { GetNews } from "@/api";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import i18next from "i18next";
export default function News() {
  const { t } = useTranslation();
  let { data: news } = GetNews();
  const curLang = i18next.language;

  const e = news?.data?.data?.map((dat: any, i: number) => (
    <div className={classes.card} key={i}>
      <Link href={`/news/${dat._id}`} key={i}>
        <Newscardsingle
          date={dat?.createdAt}
          text={dat?.title?.[curLang]}
          categ={dat?.category?.title?.[curLang]}
          img={dat?.imagePath?.src}
        />
      </Link>
    </div>
  ));

  return (
    <div className={classes.container}>
      <div className="container">
        <MainTitle title={t("CAMPUS EVENT CALENDAR")} />
        <div className={classes.body}>
          <MySlider show={3} sliders={e} />
        </div>
      </div>
    </div>
  );
}
