import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Gallery from "../../components/Gallery";
import { useTranslation } from "next-i18next";
export default function News() {
  const { t } = useTranslation();
  const links = [
    { href: "/applicationProcess", rel: "Application Process" },
    { href: "/entry-requirements", rel: "Entry Requirements" },
    { href: "/transportServices", rel: "Transport Services" },
    { href: "/fees", rel: "Fees" },
  ];
  const images = [
    "/media/images/student-life1.jpg",
    "/media/images/student-life4.jpg",
    "/media/images/student-life3.jpg",
    "/media/images/student-life5.jpg",
  ];
  return (
    <>
      <Header title={t("Scholarships")} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_card}>
            <p>
              {t(
                "At Amity, we believe in rewarding the hard work and excellence  achieved by outstanding students in their academic endeavors. The Amity Scholarships have been initiated to encourage students to achieve their best. Places for scholarship are limited."
              )}
            </p>
            <h6>{t("About our scholarships")}</h6>
            <p>
              {t(
                "Our scholarships are granted annually and reassessed for the following years according to academic performance (Merit List based on CGPA). Students can view the criteria in the Guidelines section in ‘Scholarships, Award & Medals’ on AMIZONE, which is the student intranet portal."
              )}
            </p>
            <h6>{t("Here is a list of the various scholarships we offer")}:</h6>
            <h6>{t("Merit Scholarship")}</h6>
            <ul>
              <li>
                {t(
                  "These scholarships are granted at the time of admission. These are on annual basis and will be assessed for continuation based on performances"
                )}
                ({t("among top 5% students as per CGPA")}).
              </li>
              <li>
                <h6>{t("Undergraduate Programs")}:</h6>
                <p>
                  {t(
                    "10% scholarships are awarded to students having: <br /> Outstanding Performance in the Interview and Top result in Written Exam"
                  )}
                </p>
              </li>
            </ul>
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
