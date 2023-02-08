import MiniLayout from "../../components/MiniLayout";
import CampusCard from "../../components/campusCard";
import cn from "./style.module.scss";
export default function internationalCampus() {
  const campuses = [
    {
      img: "iCampus.jpg",
      title: "Abu Dabi",
      link: "https://amityabudhabi.com/",
    },
    {
      img: "iCampus.jpg",
      title: "Abu Dabi",
      link: "https://amityabudhabi.com/",
    },
    {
      img: "iCampus.jpg",
      title: "Abu Dabi",
      link: "https://amityabudhabi.com/",
    },
    {
      img: "iCampus.jpg",
      title: "Abu Dabi",
      link: "https://amityabudhabi.com/",
    },
    {
      img: "iCampus.jpg",
      title: "Abu Dabi",
      link: "https://amityabudhabi.com/",
    },
    {
      img: "iCampus.jpg",
      title: "Abu Dabi",
      link: "https://amityabudhabi.com/",
    },
    {
      img: "iCampus.jpg",
      title: "Abu Dabi",
      link: "https://amityabudhabi.com/",
    },
    {
      img: "iCampus.jpg",
      title: "Abu Dabi",
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
