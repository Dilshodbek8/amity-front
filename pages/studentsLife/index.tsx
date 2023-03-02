import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
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
    "/media/images/students1.jpg",
    "/media/images/students2.jpg",
    "/media/images/students3.jpg",
    "/media/images/students4.jpg",
    "/media/images/students5.jpg",
    "/media/images/students7.jpg",

    "/media/images/students6.jpg",
    "/media/images/students8.jpg",
  ];
  return (
    <>
      <Header title={t("Students Life")} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            <p>
              {t(
                "Enjoy social, cultural, and educational opportunities with plenty of chances to connect with your peers through extracurricular activities such as clubs, sports events, cultural study trips, workshops, master classes and guest lectures."
              )}
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
