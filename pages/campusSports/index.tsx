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
    "/media/images/sport_8.jpg",
    "/media/images/sport_8.jpg",
    "/media/images/sport_8.jpg",
    "/media/images/sport_8.jpg",
    "/media/images/sport_8.jpg",
    "/media/images/sport_8.jpg",
    "/media/images/sport_8.jpg",
    "/media/images/sport_8.jpg",
  ];
  return (
    <>
      <Header title={t("Campus Sport")} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            <p>
              {t(
                "Sports complex pertains to any form of competitive physical activity or game that aims to use, maintain or improve physical ability and skills while providing enjoyment to participants and, in some cases, entertainment to spectators."
              )}
            </p>
            <p>
              {t(
                "The Sports Centre oversees various student activities and events where excellent indoor and outdoor sports facilities are designed to suit the needs of the students."
              )}
            </p>
            <p>
              {t(
                "Despite there is a whole range of sports and fitness activities such as basketball, football, badminton, basketball, tennis, ping-pong, and volleyball. The Sports Centre provides basic amenities like changing rooms, cloakroom, shower rooms, and a medical room."
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
