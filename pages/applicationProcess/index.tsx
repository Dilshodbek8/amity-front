import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { useTranslation } from "next-i18next";
export default function News() {
  const { t } = useTranslation();
  const links = [
    { href: "/applicationProcess", rel: t("Application Process") },
    { href: "/entryRequirements", rel: t("Entry Requirements") },
    { href: "/fees", rel: "Fees" },
  ];
  return (
    <>
      <Header title={t("Application Process")} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_card}>
            <p>
              {t(
                "Amity students are able to choose from an abundance of onventional and contemporary courses that are taught by lecturers who are masters in their field. Guest lecturers who are leading professionals in their industry further enhance each course."
              )}
            </p>
            <p>
              {t(
                "Every graduate leaves Amity University in Tashkent equipped with a wealth of knowledge and practical experience in their field, as well as the relevant skills needed to secure a highly successful career."
              )}
            </p>
            <p>
              {t(
                "Our Admissions Counsellors are here to guide you through the application process. They are extremely knowledgeable about the program on offer and can arrange for you to meet with faculty members to ensure that you make the right choice for your future career."
              )}
            </p>
            <h1>{t("ADMISSION PROCEDURE")}</h1>
            <p>
              Click on{" "}
              <a href="https://amity.uz/admissionmicrosite/login.php">
                Apply now
              </a>
              {t(
                " to create your personal application profile, fill the application form and and upload scanned version of the following documents mentioned below."
              )}
            </p>
            <p className={classes.body__italic}>
              {t(
                "Note: Your personal profile in the Admission system of Amity University in Tashkent is the only way to communicate between you as an applicant and the University. All important information and news regarding your status are sent by and saved in the system. Therefore, we strongly advise you to check your personal account regularly in the admission system for any important updates."
              )}
            </p>
            <h6>{t("International Foundation Studies")}</h6>
            <ul>
              <li>
                {t("Proof of total 11 or 12 years of Secondary Education")}
                {t("(Diploma/transcript)")}
              </li>
              <li>{t("Passport copy")}</li>
              <li>{t("Photography")} 3*4</li>
              <li>
                {t("IELTS Certificate")} ({t("Optional")})
              </li>
            </ul>
            <h6>{t("For Undergraduate programs")}:</h6>

            <h6>{t("B.Tech. (CSE)/B.Sc. (IT)")}</h6>

            <ul>
              <li>
                {t("Proof of total 12 years of Secondary Education")}(
                {t("Diploma/transcript")})
              </li>
              <li>{t("Passport copy")}</li>
              <li>{t("Photography")} 3*4</li>
              <li>
                {t("IELTS 5 or higher")} ({t("TOEFL 35-45, CEFR B1")})
              </li>
            </ul>

            <h6>
              B.A. (Hons.)({t("Economics")})/ B.A. ({t("Tourism Admin")})/BBA
            </h6>

            <ul>
              <li>
                {t("Proof of total 12 years of Secondary Education")}(
                {t("Diploma/transcript")})
              </li>
              <li>{t("Passport copy")}</li>
              <li>{t("Photography")} 3*4</li>
              <li>
                {t("IELTS 5 or higher")} ({t("TOEFL 60-78, CEFR B1")})
              </li>
            </ul>

            <h6>{t("For postgraduate programs")}:</h6>
            <h6>M.Sc. ({t("IT")})</h6>
            <ul>
              <li>
                {t(
                  "Undergraduate Degree in Computer Science/Information Technology/Electronics/Telecommunications"
                )}
              </li>
              <li>{t("Passport copy")}</li>
              <li>{t("Photography")} 3*4</li>
              <li>
                {t("IELTS 5 or higher")} ({t("TOEFL 35-45, CEFR B1")})
              </li>
            </ul>

            <p>
              {t(
                "Once completed, your application and admission tests will be assessed by the Admissions Committee and, for successful candidates, an offer will be made."
              )}
            </p>
            <p>
              {t(
                "Please review your offer letter carefully as it will outline the program you have been admitted to, the start date, tuition fees, method of payments, refund policy and other important information."
              )}
            </p>
            <p>
              {t(
                "The offer letter can be accepted on the payment of a registrationand tuition fees."
              )}
            </p>
          </div>
          <div className={classes.body_links}>
            <Navigation links={links} />
          </div>
        </div>
      </div>
    </>
  );
}
