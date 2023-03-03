import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Gallery from "../../components/Gallery";
import { useTranslation } from "next-i18next";
export default function News() {
  const { t } = useTranslation();
  const links = [
    { href: "/applicationProcess", rel: t("Application Process") },
    { href: "/entryRequirements", rel: t("Entry Requirements") },
    { href: "/fees", rel: "Fees" },
    { href: "/scholarships", rel: "Scholarships" },
    { href: "/internationalStudents", rel: "International Students" },
  ];
  const images = [
    "/media/images/scholarships-5.jpg",
    "/media/images/scholarships-1.jpg",
    "/media/images/scholarships-2.jpg",
    "/media/images/scholarships3-1-3.jpg",
    "/media/images/scholarships4-1-4.jpg",
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
                <br />
                <p>
                  {t("10% scholarships are awarded to students having")}: <br />
                  {t(
                    "Outstanding Performance in the Interview and Top result in Written Exam"
                  )}
                </p>
              </li>
              <li>
                <h6>{t("Postgraduate Programs")}:</h6>
                <br />
                <p>
                  {t("10% scholarships are awarded to students having")}: <br />
                  {t(
                    "Outstanding Performance in the Interview and Top result in Written Exam"
                  )}
                </p>
              </li>
            </ul>
            <h6>{t("Amity Graduate Awards")}</h6>
            <ul>
              <li>
                {t(
                  "Students who have completed an undergraduate program from Amity University will be awarded a 20% scholarship for postgraduate degree program"
                )}
              </li>
            </ul>

            <h6>{t("Sibling Scholarship")}</h6>
            <ul>
              <li>
                {t(
                  "When a second sibling joins Amity University Tashkent, a 10% scholarship is awarded to that student."
                )}
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
