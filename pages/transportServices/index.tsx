import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { useTranslation } from "next-i18next";
export default function News() {
  const { t } = useTranslation();
  const links = [
    { href: "/studentsLife", rel: t("Students Life") },
    { href: "/campusTour", rel: t("Campus Tour") },
    { href: "/transportServices", rel: t("Transport Services") },
    { href: "/campusSafety", rel: t("Campus Safety") },
    { href: "/campusSports", rel: t("Sports") },
    { href: "/campusLibrary", rel: t("Library") },
  ];
  return (
    <>
      <Header title={t("Transport Services")} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            <p>
              {t(
                "Amity University in Tashkent is easy to find and reach with good transport networks including bus, metro and taxi."
              )}
            </p>
            <p>
              {t("Students can use the following buses")}: 78 , 72, 57, 97, 29,
              35, 52, 151
            </p>
            <p>
              {t("Metro stations of closest distance")}: “Gafur Gulom”, “Alisher
              Navoi” {t("and")} “Minor”
            </p>
            <p>{t("Taxi applications")}: YandexGo, Mytaxi.</p>
          </div>
          <div className={classes.body_links}>
            <Navigation links={links} />
          </div>
        </div>
      </div>
    </>
  );
}
