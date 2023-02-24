import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Image from "next/image";
import Gallery from "../../components/Gallery";
import { useTranslation } from "next-i18next";
export default function News() {
  const { t } = useTranslation();
  const links = [
    { href: "/studentsLife", rel: t("Students Life") },
    // { href: "/campusTour", rel: t("Campus Tour") },
    { href: "/transportServices", rel: t("Transport Services") },
    { href: "/campusSafety", rel: t("Campus Safety") },
    { href: "/campusSports", rel: t("Sports") },
    { href: "/campusLibrary", rel: t("Library") },
  ];
  const images = [
    "/media/images/campus1.JPG",
    "/media/images/campus2.JPG",
    "/media/images/campus3.JPG",
    "/media/images/campus4.JPG",
    "/media/images/campus5.JPG",
    "/media/images/campus6.JPG",
    "/media/images/campus7.JPG",
    "/media/images/campus8.JPG",
  ];
  return (
    <>
      <Header title={t("Campus Tour")} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_card}>
            <div className={classes.body_img}>
              <Image
                src={"/media/images/campus.jpg"}
                layout={"fill"}
                alt={"campus"}
              />
            </div>
            <p>
              {t(
                "We are a multifaceted university in Tashkent, committed to delivering world-class education and research. At Amity University Tashkent Campus, you’ll gain more than just an outstanding education, you’ll be exposed to a world of opportunities and learn from faculty who are masters in their field."
              )}
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
