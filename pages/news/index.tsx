import classes from "./style.module.scss";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Newscardsingle from "./../../components/Newscard/Newcardsingle";
import { useRouter } from "next/router";
import { GetNewsByCateg, GetNewsCategories } from "./../../api";
export default function News() {
  const { data: categories } = GetNewsCategories();
  const links = categories?.data?.map((e: any, i: number) => {
    return {
      href: `/news?category=${e._id}`,
      rel: e.title.uz,
    };
  });
  let { query: loc } = useRouter();
  console.log(loc);
  let { data: news } = GetNewsByCateg(loc?.category);
  console.log(news);
  console.log(news?.data?.data, "news");

  const newsdata = [
    {
      date: "Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)",
      img: "/media/images/card.png",
      categ: "Category",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      date: "Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)",
      img: "/media/images/card.png",
      categ: "Category",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      date: "Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)",
      img: "/media/images/card.png",
      categ: "Category",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      date: "Mon Nov 14 2022 12:11:05 GMT+0500 (Uzbekistan Standard Time)",
      img: "/media/images/card.png",
      categ: "Category",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <>
      <Header title={"News"} />
      <div className="container">
        <div className={classes.body}>
          <div className={classes.body_news}>
            {news?.data?.data?.map((n: any, i: number) => (
              <Newscardsingle
                key={i}
                date={n.createdAt}
                text={n.description.uz}
                categ={n.category}
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
