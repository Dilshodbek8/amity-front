import classes from "./style.module.scss";
import MiniLayout from "../../components/MiniLayout";
import Programs from "../../components/Info";
import AboutCard from "../../components/AboutCard";
import MainTitle from "../../components/Maintitle";
import { useTranslation } from "next-i18next";
export default function About() {
  const { t } = useTranslation();
  const programs = [
    "Cater to the individual needs of every child (student-centred).",
    "Generate remarkable levels of academic progress.  ",
    "Foster a global mindset, with an awareness and respect for other cultures and ways of thinking. ",
    "Are highly transferable. We work hard to help our pupils and their families to seamlessly transition between countries and different curriculums with as minimal disruption as possible. ",
  ];
  return (
    <>
      <MiniLayout title={t("About")}>
        <div className={classes.body}>
          <MainTitle title={t("AMITY UNIVERSITY IN TASHKENT")} />
          <p>
            {t(
              "Amity University in Tashkent was established by the Decree of the President of the Republic of Uzbekistan dated January 7, 2019 No PP-4097 and the academic year started from 2019."
            )}
          </p>
          <p>
            {t(
              "Amity University in Tashkent offers career focused programs at the Foundation, Undergraduate and Postgraduate levels in diverse disciplines of higher education, including Information Technology, Economics, Management and Tourism."
            )}
          </p>
          <p>
            {t(
              "Amity University in Tashkent is committed to bringing world class education with commendable research and innovation in alignment with the strategic vision of Uzbekistan."
            )}
          </p>
          <p>
            {t(
              "Amity’s highly practical and industry focused curriculum has been conceptualized in alignment with the region’s talent-needs, thus opening up a world of opportunities for students. It’s focus on  led education has resulted in a curriculum that isdeveloped in close partnership with industry."
            )}
          </p>
          <p>
            {t(
              "Another hallmark of Amity is its endeavor to create modern hi-tech learning environments, through facilities and infrastructure that is globally benchmarked and state-of-the-art."
            )}
          </p>
          <p>
            {t(
              "More than 750 students are currently enrolled in Amity University in Tashkent. Graduates are awarded a standard diploma of Amity University (Republic of India), which is recognized as a document of higher education in the Republic of Uzbekistan."
            )}
          </p>
          <div className={classes.body_programs}>
            <Programs title={t("Our Programmes")} titles={programs} />
          </div>
        </div>
      </MiniLayout>
      <AboutCard />
    </>
  );
}
