import classes from "./style.module.scss";
import MiniLayout from "../../components/MiniLayout";
import MainTitle from "../../components/Maintitle";
import { useTranslation } from "next-i18next";
export default function Policies() {
  const { t } = useTranslation();
  return (
    <MiniLayout title={"School Policies & Documents"}>
      <div className={classes.body}>
        <h2>
          {t(
            "Amity International School operates a number of policies and regulations to guarantee the safety and wellbeing of its pupils, staff and wider community."
          )}
        </h2>
        <p>
          {t(
            "Our policies also help us pursue our mission and goals and ensure we provide the best possible care to all children."
          )}
        </p>
        <MainTitle textposition="left" title={"Our Policies"} />
        <p>
          {t(
            "Our key policies and documents are available for you to view below."
          )}
        </p>
        <p>
          {t(
            "Should you have any questions regarding any of our policies, please email"
          )}
          info@amityabudhabi.ae.
        </p>
        <ul>
          <li>
            <a href="https://www.albison.uz/">
              {t("Safeguarding and Child Protection Policy")}
            </a>
          </li>
          <li>
            <a href="https://www.albison.uz/">{t("Cyber Safety Policy")}</a>
          </li>
          <li>
            <a href="https://www.albison.uz/">{t("Uniform Policy")}</a>
          </li>
          <li>
            <a href="https://www.albison.uz/">{t("Anti-bullying Policy")}</a>
          </li>
          <li>
            <a href="https://www.albison.uz/">
              {t("Healthy Eating Guidelines")}
            </a>
          </li>
          <li>
            <a href="https://www.albison.uz/">{t("Tuition Fees Policy")}</a>
          </li>
          <li>
            <a href="https://www.albison.uz/">{t("Admissions Policy")}</a>
          </li>
          <li>
            <a href="https://www.albison.uz/">{t("Complaints Policy")}</a>
          </li>
          <li>
            <a href="https://www.albison.uz/">
              {t("Students Behaviour and Expulsion Policy")}
            </a>
          </li>
          <li>
            <a href="https://www.albison.uz/">
              {t("Absence and Attendance Policy")}
            </a>
          </li>
          <li>
            <a href="https://www.albison.uz/">
              {t("Family Referral Programme Terms & Conditions")}
            </a>
          </li>
          <li>
            <a href="https://www.albison.uz/">{t("Parent Handbook")}</a>
          </li>
        </ul>
        <MainTitle textposition="left" title={t("Useful Forms")} />
        <ul>
          <li>
            <a href="https://www.albison.uz/">{t("Early Pickup Form")}</a>
          </li>
          <li>
            <a href="https://www.albison.uz/">{t("Planned Absence Request")}</a>
          </li>
        </ul>
      </div>
    </MiniLayout>
  );
}
