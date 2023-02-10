import Header from "../../components/Header";
import MainTitle from "@/components/Maintitle";
import { useRouter } from "next/router";
import ProgramBody from "../../components/Programs/ProgramBody";
import { GetPrograms } from "@/api";
import { useTranslation } from "next-i18next";
import i18next from "i18next";
export default function Programs() {
  const router = useRouter();
  const curLang = i18next.language;
  const { t } = useTranslation();

  const { data: programs } = GetPrograms({ limit: 100, offset: 0 });

  const mybtn = programs?.data?.data?.map((e: any) => {
    return {
      id: e?._id,
      title: e?.title?.[curLang],
    };
  });

  return (
    <>
      <Header title={t("Programs")} btns={mybtn} />
      <div className="container">
        {router?.query?.id ? (
          <ProgramBody />
        ) : (
          <MainTitle title="Please select program " />
        )}
      </div>
    </>
  );
}
