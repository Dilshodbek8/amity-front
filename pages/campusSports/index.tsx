import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Gallery from "../../components/Gallery";
export default function News() {
  const links = [
    { href: "/studentsLife", rel: "Students Life" },
    { href: "/campusTour", rel: "Campus Tour" },
    { href: "/transportServices", rel: "Transport Services" },
    { href: "/campusSafety", rel: "Campus Safety" },
    { href: "/campusSports", rel: "Sports" },
    { href: "/campusLibrary", rel: "Library" },
  ];
  const images = [
    "/media/images/sport_1.jpg",
    "/media/images/sport_2.jpg",
    "/media/images/sport_3.jpg",
    "/media/images/sport_4.jpg",
    "/media/images/sport_5.jpg",
    "/media/images/sport_6.jpg",
    "/media/images/sport_8.jpg",
    "/media/images/sport_3.jpg",
  ];
  return (
    <>
      <Header title={"Students Life"} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            <p>
              Sports complex pertains to any form of competitive physical
              activity or game that aims to use, maintain or improve physical
              ability and skills while providing enjoyment to participants and,
              in some cases, entertainment to spectators.
            </p>
            <p>
              The Sports Centre oversees various student activities and events
              where excellent indoor and outdoor sports facilities are designed
              to suit the needs of the students.
            </p>
            <p>
              Despite there is a whole range of sports and fitness activities
              such as basketball, football, badminton, basketball, tennis,
              ping-pong, and volleyball. The Sports Centre provides basic
              amenities like changing rooms, cloakroom, shower rooms, and a
              medical room.
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
