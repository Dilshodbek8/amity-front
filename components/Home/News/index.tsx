import classes from "./News.module.scss";
import Newscardsingle from "../../Newscard/Newcardsingle";
import MySlider from "../../Slider";
import MainTitle from "../../Maintitle";

export default function News() {
  const newsdata = [
    {
      date: "Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)",
      img: "/media/images/card.png",
      categ: "Category",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      date: "Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)",
      img: "/media/images/card.png",
      categ: "Category",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      date: "Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)",
      img: "/media/images/card.png",
      categ: "Category",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      date: "Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)",
      img: "/media/images/card.png",
      categ: "Category",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  const e = newsdata.map((dat: any, i: number) => (
    <div className={classes.card} key={i}>
      <Newscardsingle
        date={dat.date}
        text={dat.text}
        categ={dat.categ}
        img={dat.img}
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
