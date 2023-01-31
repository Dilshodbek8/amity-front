import classes from './style.module.scss';
import GlobalCard, { CardProps } from '../../components/GlobalCard';
import MainTitle from '../../components/Maintitle';
import Breadcrumb from '../../components/Breadcrumb';
export default function Programs() {
  const data = [
    {
      img: 'fakeNews.jfif',
      title: 'A campus unlike any other',
      text: 'Amity University Dubai spans across 700,000 square feet. Not only is it environmentally sustainable, with intelligent building management systems, such as motion-sensor lights, the classrooms are digitised and there are sports and fitness facilities to help flex your athletic aspirations or simply stay fit and healthy. Amity University Dubai is also home to over 30 specialised laboratories to provide students with hands-on experience and insight into the future of industries.',
    },
    {
      img: 'fakeNews.jfif',
      title: 'A campus unlike any other',
      text: 'Amity University Dubai spans across 700,000 square feet. Not only is it environmentally sustainable, with intelligent building management systems, such as motion-sensor lights, the classrooms are digitised and there are sports and fitness facilities to help flex your athletic aspirations or simply stay fit and healthy. Amity University Dubai is also home to over 30 specialised laboratories to provide students with hands-on experience and insight into the future of industries.',
    },
    {
      img: 'fakeNews.jfif',
      title: 'A campus unlike any other',
      text: 'Amity University Dubai spans across 700,000 square feet. Not only is it environmentally sustainable, with intelligent building management systems, such as motion-sensor lights, the classrooms are digitised and there are sports and fitness facilities to help flex your athletic aspirations or simply stay fit and healthy. Amity University Dubai is also home to over 30 specialised laboratories to provide students with hands-on experience and insight into the future of industries.',
    },
    {
      img: 'fakeNews.jfif',
      title: 'A campus unlike any other',
      text: 'Amity University Dubai spans across 700,000 square feet. Not only is it environmentally sustainable, with intelligent building management systems, such as motion-sensor lights, the classrooms are digitised and there are sports and fitness facilities to help flex your athletic aspirations or simply stay fit and healthy. Amity University Dubai is also home to over 30 specialised laboratories to provide students with hands-on experience and insight into the future of industries.',
    },
  ];
  return (
    <div className={classes.global}>
      <Breadcrumb className={''} />
      <MainTitle title="Amity Global" style="whitetitle" />
      <div className="container">
        <div className={classes.global_cards}>
          {data?.map((c: CardProps, i: number) => (
            <GlobalCard key={i} img={c?.img} title={c?.title} text={c?.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
