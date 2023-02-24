import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Gallery from "../../components/Gallery";
export default function News() {
  const links = [
    { href: "/studentsLife", rel: "Students Life" },
    // { href: "/campusTour", rel: "Campus Tour" },
    { href: "/transportServices", rel: "Transport Services" },
    { href: "/campusSafety", rel: "Campus Safety" },
    { href: "/campusSports", rel: "Sports" },
    { href: "/campusLibrary", rel: "Library" },
  ];
  const images = [
    "/media/images/library_1.jpg",
    "/media/images/library_2.jpg",
    "/media/images/library_4.jpg",
    "/media/images/library_5.jpg",
  ];
  return (
    <>
      <Header title={"Students Life"} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            <p>
              Amity University in Tashkent Library is among the leading
              libraries of International Universities in Tashkent. There are
              many books in various fields, especially fiction, as well as
              bestsellers of world literature, which gives students the
              opportunity to spend their free time with benefit and engage in
              self-development. Also, our library cooperates with the National
              Library of the Republic of Uzbekistan, which has access to
              numerous artistic and classical, and modern literature. There is
              also online access to some of the most sought-after online
              journals, including Oxford, Cambridge, and Nature.
            </p>
            <p>
              The library is equipped in a new style with advanced technology,
              which has all the amenities for students. There is also a seating
              area and a book reading area, as well as a lesson area. As one of
              the most important sectors of the institute’s activities, the
              library strives to create all the conditions to support the
              educational process.
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
