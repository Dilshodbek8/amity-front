export type Links = {
  rel: string;
  href: any;
};
const routes = () => {
  const links = {
    nav: [
      {
        rel: 'Programs',
        href: '/programs',
      },
      {
        rel: 'F.A.Q',
        href: '/faq',
      },
      {
        rel: 'About',
        href: '/about',
      },
      {
        rel: 'Apply',
        href: '/apply',
      },
      {
        rel: 'Students Life',
        href: '/studentsLife',
      },
    ],
    about: [
      {
        rel: 'Amity’s Welcome',
        href: '/amityWelcome',
      },
      {
        rel: 'Leadership',
        href: '/founders',
      },
      {
        rel: 'Our Campus',
        href: '/ourCampus',
      },
      {
        rel: 'Alumni',
        href: '/alumni',
      },
      {
        rel: 'International Campus',
        href: '/internationalCampus',
      },
      {
        rel: 'Policies',
        href: '/policies',
      },
    ],
    admission: [
      {
        rel: 'Application Process',
        href: '/applicationProcess',
      },
      {
        rel: 'Scholarship',
        href: '/scholarship',
      },
      {
        rel: 'International Students',
        href: '/interStudents',
      },
      // {
      //   rel: 'Transfer to Amity',
      //   href: '/about',
      // },
    ],
    information: [
      {
        rel: 'News & Events',
        href: '/news',
      },
      {
        rel: 'Amity Global',
        href: '/amityGlobal',
      },
      {
        rel: 'Students Life',
        href: '/studentsLife',
      },
      {
        rel: 'Career Centre',
        href: '/careerCentre',
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
        rel: 'Career with Amity',
        href: '/career',
      },
    ],
  };
  return links;
};

export default routes;
