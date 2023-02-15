import MiniLayout from "../../components/MiniLayout";
import CampusCard from "../../components/campusCard";
import cn from "./style.module.scss";
export default function internationalCampus() {
  const campuses = [
    {
      img: "iCampus.jpg",
      title: "Amity Singapore",
      link: "https://www.amitysingapore.sg/",
    },
    {
      img: "icampus-1.jpg",
      title: "Nairobi",
      link: "https://www.amity.edu/nairobi/",
    },
    {
      img: "icampus-2.jpg",
      title: "Amsterdam",
      link: "https://www.amityschool.nl/",
    },
    {
      img: "icampus-3.jpg",
      title: "Amity South Africa",
      link: "http://www.amity.za.com/",
    },
    {
      img: "icampus-4.jpg",
      title: "Sharjah",
      link: "https://www.amitysharjah.com/",
    },
    {
      img: "icampus-5.jpg",
      title: "San Francisco",
      link: "https://amity.uz/amity-education-group/#",
    },
    {
      img: "icampus-6.jpg",
      title: "Amity New York",
      link: "https://amity.uz/amity-education-group/#",
    },
    {
      img: "icampus-7.jpg",
      title: "Amity Mauritius",
      link: "https://www.amity.edu/mauritius/",
    },
    {
      img: "icampus-8.jpg",
      title: "Amity London",
      link: "https://www.amity.ac.uk/",
    },
    {
      img: "icampus-9.jpg",
      title: "Amity Dubai",
      link: "https://amityuniversity.ae/",
    },
    {
      img: "icampus-10.jpg",
      title: "Abu Dhabi",
      link: "https://amityabudhabi.com/",
    },
  ];

  return (
    <MiniLayout title={"International Campus page"}>
      <div className={cn.body}>
        {campuses?.map((c, i: number) => (
          <CampusCard key={i} title={c.title} link={c.link} img={c.img} />
        ))}
      </div>
    </MiniLayout>
  );
}
