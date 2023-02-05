import classes from "./single.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { useRouter } from "next/router";
import { GetSingleNews, GetNewsCategories } from "./../../api";
export default function News() {
  const { data: categories } = GetNewsCategories();
  const links = categories?.data?.map((e: any) => {
    return {
      href: `/news?category=${e._id}`,
      rel: e.title.uz,
    };
  });
  let { query } = useRouter();
  const { data: news } = GetSingleNews(query?.id);
  const newDate = new Date(news?.data?.createdAt);
  const day = newDate.getDate();
  const month = newDate.toLocaleString("en-US", { month: "short" });
  const year = newDate.getFullYear();

  return (
    <>
      <Header title={"News"} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            <div className={classes.body_news_img}>
              <img
                src={`https://amity.albison.software${news?.data?.imagePath?.src}`}
                alt="news"
              />
            </div>
            <div className={classes.body_news_text}>
              <h2>{news?.data?.title?.uz}</h2>
              <div>
                <span>{`${day}  ${month} ${year}`}</span>
                <p>{news?.data?.category}</p>
              </div>
              <p>{news?.data?.description?.uz}</p>
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
