import classes from './style.module.scss';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
export default function News() {
  const links = [
    { href: '/studentsLife', rel: 'Students Life' },
    { href: '/campusTour', rel: 'Campus Tour' },
    { href: '/transportServices', rel: 'Transport Services' },
    { href: '/campusSafety', rel: 'Campus Safety' },
    { href: '/campusSports', rel: 'Sports' },
    { href: '/campusLibrary', rel: 'Library' },
  ];
  return (
    <>
      <Header title={'Transport Services'} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            <p>
              Amity University in Tashkent is easy to find and reach with good
              transport networks including bus, metro and taxi.
            </p>
            <p>
              Students can use the following buses: 78 , 72, 57, 97, 29, 35, 52,
              151
            </p>
            <p>
              Metro stations of closest distance: “Gafur Gulom”, “Alisher Navoi”
              and “Minor”
            </p>
            <p>Taxi applications: YandexGo, Mytaxi.</p>
          </div>
          <div className={classes.body_links}>
            <Navigation links={links} />
          </div>
        </div>
      </div>
    </>
  );
}
