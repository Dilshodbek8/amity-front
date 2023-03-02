import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { useTranslation } from "next-i18next";
import MyTable from "@/components/MyTable";
export default function News() {
  const { t } = useTranslation();
  const links = [
    { href: "/applicationProcess", rel: t("Application Process") },
    { href: "/entryRequirements", rel: t("Entry Requirements") },
    { href: "/fees", rel: t("Fees") },
  ];

  const cols = [
    {
      date: "International Foundation Studies",
      program: "1 year (2 Semesters)",
      mode: "12,500,000 Uzbek Sums",
    },
    {
      date: "B.Sc.(IT)/ BBA / B.A. (Hons)(Economics)/ B.A. (Tourism Admin)",
      program: "All Programs",
      mode: "16,500,000 Uzbek Sums",
    },
    {
      date: "B.Tech. (CSE)",
      program: "4 years (8 Semesters)",
      mode: "18,000,000 Uzbek Sums",
    },
    {
      date: "M.Sc.(IT)",
      program: "2 years (4 Semesters)",
      mode: "23,825,000 Uzbek Sums",
    },
  ];
  return (
    <>
      <Header title={t("Fees")} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_card}>
            <p>
              {t(
                "We ensure that our fees are competitive. Amity University Tashkent is proud to offer a range of scholarships to enable students to study at our institution."
              )}
            </p>
            <p>
              {t(
                "The fees are for first year, and they will increase by 5% every year of the course."
              )}
            </p>

            <h2>{t("Fees For Degrees Per Semester")}</h2>
            <MyTable
              rows={["Program", "Duration", "Fee Per Semester"]}
              cols={cols}
              fields={["date", "program", "mode"]}
            />
            <div className={classes.body__refund}>
              <h2>{t("Our Refund Policy")}</h2>
              <div className={classes.body__refund_card}>
                <h3>{t("Total Refund")}</h3>
                <ul>
                  <li>
                    {t(
                      "If the student is unsuccessful in obtaining a student visa."
                    )}
                  </li>
                  <li>
                    {t(
                      "If the offer is withdrawn by Amity University due to ineligibility of the student to join the programme."
                    )}
                  </li>
                  <li>
                    {t("If the university is unable to provide the programme.")}
                  </li>
                </ul>
              </div>
              <div className={classes.body__refund_card}>
                <h3>{t("Partial Refund")}</h3>
                <ul>
                  <li>
                    {t(
                      "If a student withdraws before the commencement of the semester, all tuition fees paid in advance are refundable except the registration fee."
                    )}
                  </li>
                  <li>
                    {t(
                      "If a student withdraws within the first 14 days from the commencement of semester, the student shall be eligible for a refund of 50% of the tuition fee paid for the respective semester."
                    )}
                  </li>
                </ul>
              </div>
              <div className={classes.body__refund_card}>
                <h3>{t("No Refund")}</h3>
                <ul>
                  <li>
                    {t(
                      "If a student withdraws after first 14 days from the commencement of any semester, the student shall not be eligible for a refund of the tuition fee or registration fee paid for the relevant semester."
                    )}
                  </li>
                  <li>
                    {t(
                      "Students, who have been either suspended or excluded from the university for disciplinary reasons or for not maintaining minimum standards or academic progression, shall not be eligible for any refund of tuition fees."
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={classes.body_links}>
            <Navigation links={links} />
          </div>
        </div>
      </div>
    </>
  );
}
