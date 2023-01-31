import Slider from 'react-slick';
import classes from './Slider.module.scss';

export type SliderProps = {
  sliders: any[];
  show?: number;
  dotsFalse?: boolean;
};

export default function MySlider({ sliders, show, dotsFalse }: SliderProps) {
  const settings = {
    dots: !dotsFalse,
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 2000,
    slidesToShow: show || 1,
    slidesToScroll: 1,

    responsive:
      show != 1
        ? [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ]
        : undefined,
  };
  return (
    <div className={classes.slider}>
      <Slider {...settings}>
        {sliders?.map((s: any, i: number) => (
          <div className={classes.slider_item} key={i}>
            {s}
          </div>
        ))}
      </Slider>
    </div>
  );
}
