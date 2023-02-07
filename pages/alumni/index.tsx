import classes from "./style.module.scss";
import MiniLayout from "../../components/MiniLayout";
import MyTab from "../../components/MyTab";
import Image from "next/image";
import { GetAlumniYears, GetAlumni } from "@/api";
export default function Alumni() {
  const { data: years } = GetAlumniYears();
  const { data: alu } = GetAlumni({ year: 2020 });

  // console.log(years);

  const alumnis = years?.data?.map((a: any) => {
    return (
      <div key={"1"} className={classes.body}>
        <div className={classes.body_img}>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_IMG}`}
            layout="fill"
            alt="campus"
          />
        </div>
        <h2>{a?.title?.uz}</h2>
        <p>
          The complex project includes interconnecting free-flowing spaces that
          promote collaboration, creativity, research and innovation. The
          University programmes include – schools for business, engineering,
          arts, humanities, applied sciences, arts, law, architecture, interior
          design, media and hospitality. The University provides an environment
          complete with an academic building, hostel (residential) facilities
          and state-of-the-art amenities including an Olympic size athletic
          track and sports field. Concept designer Canon Design’s iconic design
          is responsive to local culture, context and ecology, and provides an
          environment for students to learn and grow. Incorporating intelligent
          control systems, green building regulations and energy cost and
          time-saving techniques, the Amity University campus is a campus unlike
          any other.
        </p>
      </div>
    );
  });
  return (
    <MiniLayout title={"Alumni"}>
      <MyTab titles={years?.data} components={alumnis} />
    </MiniLayout>
  );
}
