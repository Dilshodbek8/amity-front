import classes from "./News.module.scss";
import Newscardsingle from "../../Newscard/Newcardsingle";
import MySlider from "../../Slider";
import MainTitle from "../../Maintitle";
import { GetNews } from "@/api";
export default function News() {
  let { data: news } = GetNews();

  const e = news?.data?.data?.map((dat: any, i: number) => (
    <div className={classes.card} key={i}>
      <Newscardsingle
        date={dat.createdAt}
        text={dat.description.uz}
        categ={dat.category.title.uz}
        img={dat.imagePath.src}
      />
    </div>
  ));

  return (
    <div className={classes.container}>
      <div className="container">
        <MainTitle title="CAMPUS EVENT CALENDAR" />
        <div className={classes.body}>
          <MySlider show={3} sliders={e} />
        </div>
      </div>
    </div>
  );
}
