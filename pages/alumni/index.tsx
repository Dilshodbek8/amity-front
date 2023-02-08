import classes from "./style.module.scss";
import MiniLayout from "../../components/MiniLayout";
import MyTabAlumni from "../../components/MyTabAlumni";
import { GetAlumniYears, GetAlumni } from "@/api";
export default function Alumni() {
  const { data: years } = GetAlumniYears();

  return (
    <MiniLayout title={"Alumni"}>
      <MyTabAlumni titles={years?.data} />
    </MiniLayout>
  );
}
