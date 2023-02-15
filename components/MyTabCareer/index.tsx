import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./MyTab.module.scss";
import { GetSingleCateg } from "@/api";
import i18next from "i18next";
import MyTable from "../MyTable";

export type TabProps = {
  titles: Array<string>;
};
export default function MyTabCareer({ titles }: any) {
  const curLang = i18next.language;

  const chLang = (n: any): any => {
    const router = useRouter();
    if (curLang == "uz") return `${n}Uz`;
    if (curLang == "ru") return `${n}Ru`;
    if (curLang == "en") return `${n}En`;
    return `${n}Uz`;
  };
  const router = useRouter();
  const [tabIndex, setTab] = useState(0);
  const { data: alu } = GetSingleCateg("63cf434f470c24a22fa70d79");
  // const { data: alu } = GetSingleCateg(titles?.[tabIndex]?._id);
  const setTabIndex = (newValue: any) => {
    setTab(newValue);
    router.push({
      query: { tab: newValue },
    });
  };
  const col = alu?.data?.map((a: any) => {
    return {
      name: a?.[chLang("position")],
      count: a?.deadline,
      price: a?.contractType,
      year: { text: "view", link: a?.jobDescription },
    };
  });

  return (
    <div>
      <Tabs
        selectedIndex={Number(router.query.tab ? router.query.tab : tabIndex)}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className={classes.tab}>
          {titles?.map((t: any, i: number) => (
            <Tab key={i}>{t?.[chLang("title")]}</Tab>
          ))}
        </TabList>
      </Tabs>
      <div className={classes.body}>
        <MyTable
          rows={["Position", "Deadline", "Contract type", "Job description"]}
          cols={col}
          fields={["name", "count", "price", "year"]}
        />
      </div>
    </div>
  );
}
