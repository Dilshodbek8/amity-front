import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Newscardsingle from "./../../components/Newscard/Newcardsingle";
import { useRouter } from "next/router";
import { GetNews, GetNewsByCateg, GetNewsCategories } from "./../../api";
export default function News() {
  const { data: categories } = GetNewsCategories();
  const links = categories?.data?.map((e: any) => {
    return {
      href: `/news?category=${e._id}`,
      rel: e.title.uz,
    };
  });
  let { query: loc } = useRouter();
  let { data: news } = GetNewsByCateg(loc?.category);
  let { data: allNnews } = GetNews();

  return (
    <>
      <Header title={"News"} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            {news?.data?.data.length
              ? news?.data?.data?.map((n: any, i: number) => (
                  <Newscardsingle
                    key={i}
                    date={n.createdAt}
                    text={n.description.uz}
                    categ={n.category.title.uz}
                    img={n.imagePath.src}
                  />
                ))
              : allNnews?.data?.data?.map((n: any, i: number) => (
                  <Newscardsingle
                    key={i}
                    date={n.createdAt}
                    text={n.description.uz}
                    categ={n.category.title.uz}
                    img={n.imagePath.src}
                  />
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
