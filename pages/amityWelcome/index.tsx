import classes from "./style.module.scss";
import MiniLayout from "../../components/MiniLayout";
import MainTitle from "../../components/Maintitle";
import { useTranslation } from "next-i18next";
export default function AmityWelcomes() {
  const { t } = useTranslation();
  return (
    <MiniLayout title={t("Amity Welcome")}>
      <h1></h1>
      <MainTitle title={t("AMITY UNIVERSITY IN TASHKENT")} />
      <div className={classes.welcome}>
        <p>
          {t(
            "Nestled amidst the green environs of Uzbekistan’s capital city, Tashkent, the rich educational experience at Amity University Tashkent is founded on research, holistic development, international corporate exposure and academic excellence."
          )}
        </p>
        <p>
          {t(
            "Amity University Tashkent, offers career focused programs at the Foundation, Undergraduate and Postgraduate levels in diverse disciplines of higher education, including Information Technology, Management, Economics and Tourism."
          )}
        </p>
        <p>
          {t(
            "Amity University Tashkent is committed to bringing world class education with commendable research in alignment with the strategic vision of Uzbekistan. It draws from Amity Group’s commitment to research that has earned it the distinction of filing the highest number of patents in India."
          )}
        </p>
        <p>
          {t(
            "Amity’s highly practical and industry focused curriculum has been conceptualized I alignment with the region’s talent-needs, thus opening up a world of opportunities for students. Its focus on industry led education has resulted in a curriculum that is developed in close partnership with industry."
          )}
        </p>
        <p>
          {t(
            "Amity also has the largest Scholarship Programme in India that awards over 25,000 scholarships.The merit scholarships at Amity Tashkent have been initiated to encourage the talents of such students, thereby strengthening the roots of our future generation."
          )}
        </p>
        <p>
          {t(
            "Another hallmark of Amity is its endeavour to create modern hi-tech learning environments, through facilities and infrastructure that is globally benchmarked, and state-of-the-art."
          )}
        </p>
      </div>
    </MiniLayout>
  );
}
