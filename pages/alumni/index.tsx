import MiniLayout from "../../components/MiniLayout";
import MyTabAlumni from "../../components/MyTabAlumni";
import { GetAlumniYears, GetAlumni } from "@/api";
import { useTranslation } from "next-i18next";
export default function Alumni() {
  const { t } = useTranslation();
  const { data: years } = GetAlumniYears();

  return (
    <MiniLayout title={t("Alumni")}>
      <MyTabAlumni titles={years?.data} />
    </MiniLayout>
  );
}
