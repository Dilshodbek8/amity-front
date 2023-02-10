import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./MyTab.module.scss";
import { GetAlumni } from "@/api";
import MainTitle from "../Maintitle";
import i18next from "i18next";
export type TabProps = {
  titles: Array<string>;
};
export default function MyTabAlumni({ titles }: TabProps) {
  const router = useRouter();
  const curLang = i18next.language;
  const [tabIndex, setTab] = useState(0);
  const { data: alu } = GetAlumni({ year: titles && titles[tabIndex] });
  const setTabIndex = (newValue: any) => {
    setTab(newValue);
    router.push({
      query: { tab: newValue },
    });
  };
  return (
    <div>
      <Tabs
        selectedIndex={Number(router.query.tab ? router.query.tab : tabIndex)}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className={classes.tab}>
          {titles?.map((t: string, i: number) => (
            <Tab key={i}>{t}</Tab>
          ))}
        </TabList>
      </Tabs>
      {/* <div>{JSON.stringify(alu?.data)}</div> */}
      <div className={classes.body}>
        <div className={classes.body_img}>
          <img
            src={`${process.env.NEXT_PUBLIC_API_IMG}${alu?.data?.[0]?.imagePath?.src}`}
          />
        </div>
        <div className={classes.body_text}>
          <MainTitle title={alu?.data?.[0]?.title?.[curLang]} />
          <p>{alu?.data?.[0]?.description?.[curLang]}</p>
        </div>
      </div>
    </div>
  );
}
