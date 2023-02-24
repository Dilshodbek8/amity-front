import classes from "./single.module.scss";
import Header from "../../components/Header";
import parse from "html-react-parser";
import Navigation from "../../components/Navigation";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { useTranslation } from "next-i18next";
import { GetSingleNews, GetNewsCategories } from "./../../api";
import i18next from "i18next";
export default function News() {
  const curLang = i18next.language;
  const { t } = useTranslation();
  const { data: categories } = GetNewsCategories();
  const links = categories?.data?.map((e: any) => {
    return {
      href: `/news?category=${e._id}`,
      rel: e.title?.[curLang],
    };
  });
  let { query } = useRouter();
  const { data: news } = GetSingleNews(query?.id);
  const newDate = new Date(news?.data?.createdAt);
  const day = newDate.getDate();
  const month = newDate.toLocaleString("en-US", { month: "short" });
  const year = newDate.getFullYear();
  if (!news?.data) {
    return <Loader />;
  }
  return (
    <>
      <Header title={t("News")} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            <div className={classes.body_news_text}>
              <h2>{news?.data?.title?.[curLang]}</h2>
              <div>
                <span className={classes.my}>{`${day}  ${month} ${year}`}</span>
                <p>{news?.data?.category?.title?.[curLang]}</p>
              </div>
            </div>
            <div className={classes.body_news_img}>
              <img
                src={`${process.env.NEXT_PUBLIC_API_IMG}${news?.data?.imagePath?.src}`}
                alt="news"
              />
            </div>
            <div className={classes.body_news_text}>
              <p>{parse(`${news?.data?.description?.[curLang]}`)}</p>
            </div>
          </div>

          <div className={classes.body_links}>
            <Navigation links={links} />
          </div>
        </div>
      </div>
    </>
  );
}
