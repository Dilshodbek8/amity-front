import classes from './style.module.scss';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Newscardsingle from './../../components/Newscard/Newcardsingle';
export default function News() {
  const links = [
    { href: '/news?ctegory=all', rel: 'All Categories' },
    { href: '/news?ctegory=Admission', rel: 'Admission' },
    { href: '/news?ctegory=Application', rel: 'Application' },
    { href: '/news?ctegory=Competition', rel: 'Competition' },
    { href: '/news?ctegory=Courses', rel: 'Courses' },
    { href: '/news?ctegory=Events', rel: 'Events' },
  ];
  const newsdata = [
    {
      date: 'Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)',
      img: '/media/images/card.png',
      categ: 'Category',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      date: 'Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)',
      img: '/media/images/card.png',
      categ: 'Category',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      date: 'Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)',
      img: '/media/images/card.png',
      categ: 'Category',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      date: 'Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)',
      img: '/media/images/card.png',
      categ: 'Category',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];
  return (
    <>
      <Header title={'News'} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            {newsdata?.map(
              (
                n: {
                  date: string;
                  img: string;
                  categ: string;
                  text: string;
                },
                i: number
              ) => (
                <Newscardsingle
                  key={i}
                  date={n.date}
                  text={n.text}
                  categ={n.categ}
                  img={n.img}
                />
              )
            )}
          </div>
          <div className={classes.body_links}>
            <Navigation links={links} />
          </div>
        </div>
      </div>
    </>
  );
}
