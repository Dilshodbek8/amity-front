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
    "/media/images/security1.jpg",
    "/media/images/security2.jpg",
    "/media/images/security3.jpg",
    "/media/images/security2.jpg",
  ];
  return (
    <>
      <Header title={t("Campus Safety")} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            <p>
              {t(
                "Amity University in Tashkent places enormous attention on Campus safety matters. The University provides a team of trained and dedicated security officers who are focused on the provision of quality security services at the University. Security personnel works to cover 24 hours a day, 7 days a week throughout the entire year."
              )}
            </p>
            <p>
              {t(
                "Check-in, check-out system with Face-ID function works provides high-level safety for students."
              )}
            </p>
            <p>
              {t(
                "The Public Safety department is aimed to ensure the safety of students, staff, and visitors of the Amity University Tashkent to maintain a safe and secure environment."
              )}
            </p>
            <p>
              {t(
                "Video surveillance cameras have been enabled both inside and outside campus buildings with the purpose of proper security management and ensuring safety within and around the Campus."
              )}
            </p>
            <p>
              {t(
                "Students, staff, and visitors are highly encouraged to participate actively in the support of the Amity University Tashkent by taking personal precautions and immediately reporting about any suspicious activities related to the security."
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
