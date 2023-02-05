import classes from "./style.module.scss";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import ProgramBody from "../../components/Programs/ProgramBody";
import { GetPrograms } from "@/api";
export default function Programs() {
  const { query } = useRouter();
  console.log(query.id);

  const { data: programs } = GetPrograms({ limit: 100, offset: 0 });

  const mybtn = programs?.data?.data?.map((e: any) => {
    return {
      id: e?._id,
      title: e?.basicInformations[0]?.title?.uz,
    };
  });
  console.log(mybtn, "btn");

  return (
    <>
      <Header title={"Programs"} btns={mybtn} />
      <div className="container">
        <ProgramBody />
      </div>
    </>
  );
}
