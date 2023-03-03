import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Gallery from "../../components/Gallery";
import { useTranslation } from "next-i18next";
import Image from "next/image";
export default function News() {
  const { t } = useTranslation();
  const links = [
    { href: "/applicationProcess", rel: t("Application Process") },
    { href: "/entryRequirements", rel: t("Entry Requirements") },
    { href: "/fees", rel: "Fees" },
    { href: "/scholarships", rel: "Scholarships" },
    { href: "/internationalStudents", rel: "International Students" },
  ];

  return (
    <>
      <Header title={t("International Students")} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_card}>
            <img
              src={"/media/images/international-student.jpg"}
              width={"100%"}
              height={"300px"}
            />
            <p>
              {t(
                "Transitioning to university is never easy – and if you’re an international student who has never lived or experienced life in Tashkent, the process of moving to a new city could be a challenge. We currently have more than 50 nationalities within our student body and a strong mentor-ship system to help you to settle in."
              )}
            </p>

            <h6>{t("Uzbekistan Visa")}</h6>
            <br />
            <h6>{t("Visa free nationalities")}</h6>

            <p>
              {t(
                "Citizens of Azerbaijan, Armenia, Belarus, Georgia, Kazakhstan, Moldova, Russia, Kyrgyzstan and Ukraine DO NOT NEED A VISA to enter the Republic of Uzbekistan."
              )}
            </p>
            <h6>{t("Where to apply for Uzbekistan Visa")}?</h6>
            <p>
              {t(
                "You can apply for a visa where Uzbekistan Embassy or Consulate exist. Please note that required documents and visa fees may differ based on your citizenship and where you apply."
              )}
            </p>
            <h6>{t("Visa at the airport")}</h6>
            <p>
              {t(
                "It is possible to obtain a visa at the international arrivals lounge of Tashkent International Airport if there is no Uzbekistan Embassy or Consulate in the country, where you are originating your flight to Uzbekistan."
              )}
            </p>
            <p>
              {t(
                "You can download the official visa application form to apply for a student visa at evisa.mfa.uz. This application form is valid for all Uzbekistan Embassies and Consulates."
              )}
            </p>
            <h6>{t("A Student-Visa application requirements")}:</h6>
            <br />
            <h5>{t("Visa Application Form")}</h5>
            <p>
              <b>{t("Important note")}:</b>
              {t(
                "Do not enter Uzbekistan on a  visitor’s visa with the intention of being registered as a student at a later date."
              )}
            </p>
            <p>{t("You can only enter the country with a student visa.")}</p>

            <ul>
              <li>
                {t("Apply to Amity University via online application form")}
              </li>
              <li>
                {t("Receive a letter of unconditional acceptance for a study")}
              </li>
              <li>{t("Fill the official visa application form")}</li>
              <li>{t("Fee, payable on collection of visa")}</li>
              <li>
                {t("Stamped, self-addressed envelope, if applying by post")}
              </li>
            </ul>

            <h6>{t("Registration & Customs")}</h6>
            <p>
              {t(
                "The essential part of Uzbekistan travel guide is the Registration of Stay; as soon as you arrive in Uzbekistan, you have 72 hours to get registered at local Immigration Authorities of Uzbekistan. Customs officers will require the declaration form upon arrival and at the departure."
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
