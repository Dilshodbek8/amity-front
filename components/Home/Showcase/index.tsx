import classes from "./Showcase.module.scss";
import ShowcaseCard, { ShowcaseProps } from "../ShowcaseCard";
import MySlider from "../../Slider";
import { GetBanners } from "../../../api";
export default function Showcase() {
  const data = [
    // {
    //   img: "aboutCard.jfif",
    //   title: "Inspiring adventure and confidence",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit placerat sit purus molestie.",
    //   link: "Apply",
    //   href: "/apply",
    // },
    // {
    //   img: "fakeNews.jfif",
    //   title: "Inspiring adventure and confidence",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit placerat sit purus molestie.",
    //   link: "Apply",
    //   href: "/apply",
    // },
    // {
    //   img: "fakeNews.jfif",
    //   title: "Inspiring adventure and confidence",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit placerat sit purus molestie.",
    //   link: "Apply",
    //   href: "/apply",
    // },
    {
      img: "mainCampus.png",
      title: "Admission open for Academic year 2023-2024",
      text: "Prepare in 3 months with amity pre-foundation course.",
      link: "Apply",
      href: "/apply",
    },
  ];
  const { data: banners } = GetBanners({});
  console.log(banners, "banners");

  const elems = data?.map((d: ShowcaseProps, i: number) => (
    <div className={classes.body} key={i}>
      <ShowcaseCard
        img={d?.img}
        title={d?.title}
        text={d?.text}
        link={d?.link}
        href={d?.href}
      />
    </div>
  ));
  return (
    <div className={classes.body}>
      <MySlider sliders={elems} show={1} />
    </div>
  );
}
