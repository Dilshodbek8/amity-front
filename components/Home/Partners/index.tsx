import classes from "./Partners.module.scss";
import Image from "next/image";
import MySlider from "../../Slider";

export default function Partners() {
  const partners = [
    "web-logo-01.png",
    "web-logo-02.png",
    "web-logo-03.png",
    "web-logo-04.png",
    "web-logo-05.png",
    "web-logo-06.png",
    "web-logo-08.png",
    "web-logo-09.png",
    "web-logo-10.png",
    "web-logo-11.png",
    "web-logo-12.png",
  ];
  const elems = partners.map((p: string, i: number) => (
    <div className={classes.card_img} key={i}>
      <a href="https://www.albison.uz/">
        <Image
          src={`/media/icons/${p}`}
          alt="partners"
          width={200}
          height={115}
        />
      </a>
    </div>
  ));
  return (
    <div className={classes.card}>
      <MySlider show={5} sliders={elems} dotsFalse />
    </div>
  );
}
