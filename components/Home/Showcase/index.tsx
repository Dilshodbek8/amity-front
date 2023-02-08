import classes from "./Showcase.module.scss";
import ShowcaseCard, { ShowcaseProps } from "../ShowcaseCard";
import MySlider from "../../Slider";
import { GetBanners } from "../../../api";
export default function Showcase() {
  const { data: banners } = GetBanners({});

  const elems = banners?.data.map((d: any, i: number) => (
    <div className={classes.body} key={i}>
      <ShowcaseCard
        img={d?.photo?.src}
        title={d?.title?.uz}
        text={d?.title?.uz}
        link={d?.link}
        href={d?.link}
      />
    </div>
  ));
  return (
    <div className={classes.body}>
      <MySlider sliders={elems} show={1} />
    </div>
  );
}
