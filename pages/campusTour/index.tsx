import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Image from "next/image";
import Gallery from "../../components/Gallery";
export default function News() {
  const links = [
    { href: "/studentsLife", rel: "Students Life" },
    { href: "/campusTour", rel: "Campus Tour" },
    { href: "/transportServices", rel: "Transport Services" },
    { href: "/campusSafety", rel: "Campus Safety" },
    { href: "/campusSports", rel: "Campus Sports" },
    { href: "/campusLibrary", rel: "Campus Library" },
  ];
  const images = [
    "/media/images/campusT-1.JPG",
    "/media/images/campusT-2.JPG",
    "/media/images/campusT-3.JPG",
    "/media/images/campusT-4.JPG",
    "/media/images/campusT-5.JPG",
    "/media/images/campusT-6.JPG",
    "/media/images/campusT-7.JPG",
    "/media/images/campusT-8.JPG",
  ];
  return (
    <>
      <Header title={"Campus Tour"} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_card}>
            <div className={classes.body_img}>
              <Image
                src={"/media/images/campusTour.JPG"}
                layout={"fill"}
                alt={"campus"}
              />
            </div>
            <p>
              We are a multifaceted university in Tashkent, committed to
              delivering world-class education and research. At Amity University
              Tashkent Campus, you’ll gain more than just an outstanding
              education, you’ll be exposed to a world of opportunities and learn
              from faculty who are masters in their field.
            </p>
            <iframe
              width="100%"
              height="355"
              src="https://www.youtube.com/embed/sptn39x6U94"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
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
