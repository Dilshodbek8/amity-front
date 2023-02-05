import classes from "./Showcase.module.scss";
import ShowcaseCard, { ShowcaseProps } from "../ShowcaseCard";
import MySlider from "../../Slider";
import { GetBanners } from "../../../api";
export default function Showcase() {
  const data = [
    {
      img: "campus.jpg",
      title: "Admission open for Academic year 2023-2024",
      text: "Prepare in 3 months with amity pre-foundation course.",
      link: "Apply",
      href: "/apply",
    },
    {
      img: "campus.jpg",
      title: "Admission open for Academic year 2023-2024",
      text: "Prepare in 3 months with amity pre-foundation course.",
      link: "Apply",
      href: "/apply",
    },
  ];
  const { data: banners } = GetBanners({});
  console.log(banners?.data);

  const elems = banners?.data.map((d: any, i: number) => (
    <div className={classes.body} key={i}>
      <ShowcaseCard
        img={d?.photo?.src}
        title={d?.title?.uz}
        text={d?.title?.uz}
        link={d?.link}
      />
    </div>
  ));
  return (
    <div className={classes.body}>
      <MySlider sliders={elems} show={1} />
    </div>
  );
}
