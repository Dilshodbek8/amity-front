import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Newscardsingle from "./../../components/Newscard/Newcardsingle";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { GetNews, GetNewsByCateg, GetNewsCategories } from "./../../api";
import Loader from "@/components/Loader";
import i18next from "i18next";
export default function News() {
  const { t } = useTranslation();
  const { data: categories } = GetNewsCategories();
  const curLang = i18next.language;
  const links = categories?.data?.map((e: any) => {
    return {
      href: `/news?category=${e._id}`,
      rel: e.title?.[curLang],
    };
  });
  let { query: loc } = useRouter();
  let { data: news } = GetNewsByCateg(loc?.category);
  let { data: allNnews } = GetNews();
  // if (!allNnews?.data?.data.length) {
  //   return <Loader />;
  // }
  return (
    <>
      <Header title={t("News")} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            {news?.data?.data.length
              ? news?.data?.data?.map((n: any, i: number) => (
                  <Link href={`/news/${n._id}`} key={i}>
                    <Newscardsingle
                      date={n?.createdAt}
                      text={n?.title?.[curLang]}
                      categ={n?.category?.title?.[curLang]}
                      img={n?.imagePath?.src}
                    />
                  </Link>
                ))
              : allNnews?.data?.data?.map((n: any, i: number) => (
                  <Link href={`/news/${n._id}`} key={i}>
                    <Newscardsingle
                      date={n?.createdAt}
                      text={n?.title?.[curLang]}
                      categ={n?.category?.title?.[curLang]}
                      img={n?.imagePath?.src}
                    />
                  </Link>
                ))}
          </div>
          <div className={classes.body_links}>
            <Navigation links={links} />
          </div>
        </div>
      </div>
    </>
  );
}
