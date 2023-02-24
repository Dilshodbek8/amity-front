import classes from "./style.module.scss";
import MiniLayout from "../../components/MiniLayout";
import MyTab from "../../components/MyTab";
import MainTitle from "../../components/Maintitle";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Founders() {
  const { t } = useTranslation();
  return (
    <MiniLayout title={t("Leadership")}>
      <MyTab
        components={[
          <div className={classes.body}>
            <div key={"1"} className={classes.body}>
              <MainTitle title={t("Founder")} />

              <div className={classes.body_top}>
                <div>
                  <h2>Dr. Ashok K. Chauhan</h2>
                  <h3>
                    {t(
                      "Founder President, Ritnand Balved Education Foundation"
                    )}
                  </h3>
                  <p>
                    (
                    {t(
                      "The Foundation of Amity Institutions and the sponsoring body of Amity Universities"
                    )}
                    ) {t("Chairman")}, {t("AKC Group of Companies")}
                  </p>
                  <p>
                    {t(
                      "My mission is nation building through education and beyond."
                    )}
                  </p>
                  <span>
                    {t(
                      "Each one of our students will be a success story. This is my dream; this is my commitment."
                    )}
                  </span>
                </div>
                <div className={classes.body_img}>
                  <Image
                    src={`/media/images/founder.jpg`}
                    layout="fill"
                    alt="img"
                  />
                </div>
              </div>

              <p>
                {t(
                  "Amity is not just a group of institutions which imparts world-class education, but an experience where everyone associated is part of a dream, a mission to see that we nurture truly great leaders."
                )}
              </p>
              <p>
                {t(
                  "In my over 30 years stay in West Germany I realised, through interacting with the over 6000 Europeans working for me, that we Indians have the intelligence, the talent and the potential to be the more successful people in the world. That is why we established the Ritnand Balved Education Foundation in 1986 to start institutions which will groom young future leaders to be complete, value-driven human beings and competent professionals with a deep passion for humanity. These will be the people who will lead the world."
                )}
              </p>
              <p>
                {t(
                  "Today, we are proud that Amity is synonymous with practical, industryfocussed education, and attracts the best students. The fact that our alumni are working in the best companies across the world is a testament to our extremely talented faculty who inculcate, by example, in each student the spirit of dedication, sincerity and loyalty, and to all the corporates who support our mission with so much enthusiasm."
                )}
              </p>
            </div>
            <MainTitle title={t("Chancellor")} />
            <div key={"2"} className={classes.body_cards}>
              <div
                className={
                  classes.card_vertical + " " + classes.card_vertical_order
                }
              >
                <div>
                  <h2>Dr. Atul Chauhan</h2>
                  <h4>
                    {t("Chancellor")}, {t("Amity University")}
                  </h4>
                  <h4>
                    {t("President")}, {t("Ritnand Balved Education Foundation")}
                  </h4>
                  <h4>
                    {t("CEO")}, {t("AKC Group of Companies")}
                  </h4>
                  <p>
                    {t(
                      "We are creating centres of thought leadership across the world, where faculty, scientists and brilliant students can explore and expand the frontiers of knowledge."
                    )}
                  </p>
                </div>

                <div className={classes.body_img_full}>
                  <Image
                    src={`/media/images/atul.jpg`}
                    layout="fill"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <MainTitle title={t("Group Vice Chancellor")} />
            <div key={"3"} className={classes.body_cards}>
              <div className={classes.card_vertical}>
                <div>
                  <h2>Prof. (Dr.) Gurinder Singh</h2>
                  <h4>
                    {t("Group Vice Chancellor")}, {t("Amity Universities")}
                  </h4>
                  <h4>
                    {t("Director General")},{" "}
                    {t("Amity Directorate of Management and Allied Areas")}
                  </h4>
                  <h4>
                    {t(
                      "Director General, Amity International Business School & Vice Chairman, Global Foundation for Learning & Excellence"
                    )}
                  </h4>
                </div>

                <div className={classes.body_img_full}>
                  <Image
                    src={`/media/images/gurinder.jpg`}
                    layout="fill"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <MainTitle title={t("Vice Chancellor")} />
            <div
              key={"4"}
              className={
                classes.card_vertical + " " + classes.card_vertical_order
              }
            >
              <div>
                <h2>Dr. B. Shukla</h2>
                <h4>
                  {t("Vice Chancellor")}, {t("Amity University")} Uttar Pradesh
                </h4>
                <h4>M.Tech. (IIT Kharagpur), Ph.D. Queens University, U.K.</h4>
                <h4>{t("Council member of AIMA")}</h4>
                <p>
                  {t(
                    " At Amity, we focus on each & every student, to bring out their full potential and empower them with a winning attitude."
                  )}
                </p>
              </div>

              <div className={classes.body_img_full}>
                <Image
                  src={`/media/images/shukla.jpg`}
                  layout="fill"
                  alt="img"
                />
              </div>
            </div>
          </div>,
          <>
            <div key={"1"} className={classes.body}>
              <MainTitle title={t("Director")} />

              <div className={classes.body_top}>
                <div>
                  <h2>Bobur Abdullaev</h2>
                  <h3>
                    {t(
                      "Amity University Tashkent Campus is established in accordance with the Resolution No.PP-4097 of the President of the Republic of Uzbekistan “On Establishment of Amity University in Tashkent” dated 07 January 2019."
                    )}
                  </h3>
                  <p>
                    {/* ( */}
                    {t(
                      "The university is driven by the vision and mission of Dr. Ashok K. Chauhan, Founder President, Ritnand Balved Education Foundation (RBEF). Amity aims at providing quality education by offering nothing less than best of everything to its students at par with the international standards and it subscribes to the philosophy of “modernity blends with tradition, while nurturing talent.”"
                    )}
                    {/* ) {t("Chairman")}, {t("AKC Group of Companies")} */}
                  </p>

                  <span>{t("Director Amity University in Tashkent")}</span>
                </div>
                <div className={classes.body_img}>
                  <Image
                    src={`/media/images/Bobur.jpg`}
                    layout="fill"
                    alt="img"
                  />
                </div>
              </div>

              <p>
                {t(
                  "Under the dynamic leadership of Dr. Atul Chauhan, President, RBEF, Amity strives to provide the best environment for its students to prosper and grow. His visionary perspective enables Amity in shaping the skills and minds of generation of young entrepreneurs/professionals and preparing them as tech-savvy and highly-informed citizens."
                )}
              </p>
              <p>
                {t(
                  "I extend my congratulations to all students for joining Amity University Tashkent campus and convey my Best Wishes for your quest for learning, professional development and for your stay in Amity."
                )}
              </p>
            </div>
            <MainTitle title={t("DEPUTY DIRECTOR")} />
            <div key={"2"} className={classes.body_cards}>
              <div
                className={
                  classes.card_vertical + " " + classes.card_vertical_order
                }
              >
                <div>
                  <h2>Dr. Naina Chaudhary</h2>
                  <h4>
                    {t(
                      "Deputy Director – Academics Amity University in Tashkent "
                    )}
                  </h4>
                  <p>
                    {t(
                      "The university offers foundation, undergraduate and postgraduate programs in the areas of Engineering and Technology, Management and Social Sciences. University offers outcome-based education with industry focused curriculum. The state of art infrastructure apt for teaching learning and research compliments well with the pool of well qualified faculty that ensures to deliver best to the students with the focus on holistic development."
                    )}
                  </p>
                  {/* <p>
                    {t(
                      "Although education is time bound, learning ought to be a lifelong endeavor. With the hope and conviction of making you world class citizens, I extend my heartiest congratulations to all the students for becoming proud Amitians, and convey my Best Wishes in your quest for personal, educational, and professional development as you start your Amity journey."
                    )}
                  </p> */}
                </div>

                <div className={classes.body_img_full}>
                  <Image
                    src={`/media/images/atul.jpg`}
                    layout="fill"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </>,
        ]}
        titles={["Founders", "Directors"]}
      ></MyTab>
      {/* <div className={classes.body}>
        <div key={"1"} className={classes.body}>
          <MainTitle title={t("Founder")} />

          <div className={classes.body_top}>
            <div>
              <h2>Dr. Ashok K. Chauhan</h2>
              <h3>
                {t("Founder President, Ritnand Balved Education Foundation")}
              </h3>
              <p>
                (
                {t(
                  "The Foundation of Amity Institutions and the sponsoring body of Amity Universities"
                )}
                ) {t("Chairman")}, {t("AKC Group of Companies")}
              </p>
              <p>
                {t(
                  "My mission is nation building through education and beyond."
                )}
              </p>
              <span>
                {t(
                  "Each one of our students will be a success story. This is my dream; this is my commitment."
                )}
              </span>
            </div>
            <div className={classes.body_img}>
              <Image
                src={`/media/images/founder.jpg`}
                layout="fill"
                alt="img"
              />
            </div>
          </div>

          <p>
            {t(
              "Amity is not just a group of institutions which imparts world-class education, but an experience where everyone associated is part of a dream, a mission to see that we nurture truly great leaders."
            )}
          </p>
          <p>
            {t(
              "In my over 30 years stay in West Germany I realised, through interacting with the over 6000 Europeans working for me, that we Indians have the intelligence, the talent and the potential to be the more successful people in the world. That is why we established the Ritnand Balved Education Foundation in 1986 to start institutions which will groom young future leaders to be complete, value-driven human beings and competent professionals with a deep passion for humanity. These will be the people who will lead the world."
            )}
          </p>
          <p>
            {t(
              "Today, we are proud that Amity is synonymous with practical, industryfocussed education, and attracts the best students. The fact that our alumni are working in the best companies across the world is a testament to our extremely talented faculty who inculcate, by example, in each student the spirit of dedication, sincerity and loyalty, and to all the corporates who support our mission with so much enthusiasm."
            )}
          </p>
        </div>
        <MainTitle title={t("Chancellor")} />
        <div key={"2"} className={classes.body_cards}>
          <div
            className={
              classes.card_vertical + " " + classes.card_vertical_order
            }
          >
            <div>
              <h2>Dr. Atul Chauhan</h2>
              <h4>
                {t("Chancellor")}, {t("Amity University")}
              </h4>
              <h4>
                {t("President")}, {t("Ritnand Balved Education Foundation")}
              </h4>
              <h4>
                {t("CEO")}, {t("AKC Group of Companies")}
              </h4>
              <p>
                {t(
                  "We are creating centres of thought leadership across the world, where faculty, scientists and brilliant students can explore and expand the frontiers of knowledge."
                )}
              </p>
            </div>

            <div className={classes.body_img_full}>
              <Image src={`/media/images/atul.jpg`} layout="fill" alt="img" />
            </div>
          </div>
        </div>
        <MainTitle title={t("Group Vice Chancellor")} />
        <div key={"3"} className={classes.body_cards}>
          <div className={classes.card_vertical}>
            <div>
              <h2>Prof. (Dr.) Gurinder Singh</h2>
              <h4>
                {t("Group Vice Chancellor")}, {t("Amity Universities")}
              </h4>
              <h4>
                {t("Director General")},{" "}
                {t("Amity Directorate of Management and Allied Areas")}
              </h4>
              <h4>
                {t(
                  "Director General, Amity International Business School & Vice Chairman, Global Foundation for Learning & Excellence"
                )}
              </h4>
            </div>

            <div className={classes.body_img_full}>
              <Image
                src={`/media/images/gurinder.jpg`}
                layout="fill"
                alt="img"
              />
            </div>
          </div>
        </div>
        <MainTitle title={t("Vice Chancellor")} />
        <div
          key={"4"}
          className={classes.card_vertical + " " + classes.card_vertical_order}
        >
          <div>
            <h2>Dr. B. Shukla</h2>
            <h4>
              {t("Vice Chancellor")}, {t("Amity University")} Uttar Pradesh
            </h4>
            <h4>M.Tech. (IIT Kharagpur), Ph.D. Queens University, U.K.</h4>
            <h4>{t("Council member of AIMA")}</h4>
            <p>
              {t(
                " At Amity, we focus on each & every student, to bring out their full potential and empower them with a winning attitude."
              )}
            </p>
          </div>

          <div className={classes.body_img_full}>
            <Image src={`/media/images/shukla.jpg`} layout="fill" alt="img" />
          </div>
        </div>
      </div> */}
    </MiniLayout>
  );
}
