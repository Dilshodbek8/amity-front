import { useTranslation } from "next-i18next";

export type Links = {
  rel: string;
  href: any;
};
const Routes = () => {
  const { t } = useTranslation();

  const links = {
    nav: [
      {
        rel: t("Programs"),
        href: "/programs",
      },
      {
        rel: t("News"),
        href: "/news",
      },
      {
        rel: t("F.A.Q"),
        href: "/faq",
      },
      {
        rel: t("About"),
        href: "/about",
      },
      {
        rel: t("Apply"),
        href: "https://amity.uz/admissionmicrosite/login.php",
      },
      {
        rel: t("Students Life"),
        href: "/studentsLife",
      },
    ],
    about: [
      {
        rel: t("Amity’s Welcome"),
        href: "/amityWelcome",
      },
      {
        rel: t("Leadership"),
        href: "/founders",
      },
      {
        rel: t("Our Campus"),
        href: "/ourCampus",
      },
      // {
      //   rel: "Alumni",
      //   href: "/alumni",
      // },
      {
        rel: t("International Campus"),
        href: "/internationalCampus",
      },
      // {
      //   rel: t("Policies"),
      //   href: "/policies",
      // },
    ],
    admission: [
      {
        rel: t("Application Process"),
        href: "/applicationProcess",
      },
      {
        rel: t("Scholarship"),
        href: "/scholarship",
      },
      {
        rel: t("International Students"),
        href: "/interStudents",
      },
      // {
      //   rel: 'Transfer to Amity',
      //   href: '/about',
      // },
    ],
    information: [
      {
        rel: t("News & Events"),
        href: "/news",
      },
      // {
      //   rel: t("Amity Global"),
      //   href: "/amityGlobal",
      // },
      {
        rel: t("Students Life"),
        href: "/studentsLife",
      },
      {
        rel: t("Career Centre"),
        href: "/careerCentre",
      },
      // {
      //   rel: 'Incubation Centre',
      //   href: '/incubation',
      // },
      // {
      //   rel: 'Students Abroad Program',
      //   href: '/abroad',
      // },
      // {
      //   rel: 'Student Affairs',
      //   href: '/affairs',
      // },
      {
        rel: t("Career with Amity"),
        href: "/career",
      },
    ],
  };
  return links;
};

export default Routes;
