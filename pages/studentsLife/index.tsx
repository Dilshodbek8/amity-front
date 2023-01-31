import classes from './style.module.scss';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Gallery from '../../components/Gallery';
export default function News() {
  const links = [
    { href: '/studentsLife', rel: 'Students Life' },
    { href: '/campusTour', rel: 'Campus Tour' },
    { href: '/transportServices', rel: 'Transport Services' },
    { href: '/campusSafety', rel: 'Campus Safety' },
    { href: '/campusSports', rel: 'Sports' },
    { href: '/campusLibrary', rel: 'Library' },
  ];
  const images = [
    '/media/images/student-life1.jpg',
    '/media/images/student-life2.jpg',
    '/media/images/student-life3.jpg',
    '/media/images/student-life4.jpg',
    '/media/images/student-life5.jpg',
    '/media/images/student-life6.jpg',
    '/media/images/student-life7.jpg',
    '/media/images/student-life8.jpg',
  ];
  return (
    <>
      <Header title={'Students Life'} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            <p>
              Enjoy social, cultural, and educational opportunities with plenty
              of chances to connect with your peers through extracurricular
              activities such as clubs, sports events, cultural study trips,
              workshops, master classes and guest lectures.
            </p>
          </div>
          <div className={classes.body_links}>
            <Navigation links={links} />
          </div>
        </div>
        <Gallery images={images} />
      </div>
    </>
  );
}
