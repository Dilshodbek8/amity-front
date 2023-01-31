import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ReactElement } from 'react';
import classes from './MyTab.module.scss';
export type TabProps = {
  titles: Array<string>;
  components: Array<ReactElement>;
};
export default function MyTab({ titles, components }: TabProps) {
  const router = useRouter();
  const [tabIndex, setTab] = useState(0);
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
        {components?.map((c: any, i: number) => (
          <TabPanel key={i}>{c}</TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
