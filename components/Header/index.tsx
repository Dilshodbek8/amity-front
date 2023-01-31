import Button from '@mui/material/Button';
import classes from './Header.module.scss';
import MyButton from '../MyButton';
import { useRouter } from 'next/router';
import MainTitle from '../Maintitle';
import Breadcrumb from '../Breadcrumb';
export type HeaderProps = {
  title: string;
  white?: boolean;
  btns?: { title: string; id: string }[];
};
export default function Header({ title, white, btns }: HeaderProps) {
  const router = useRouter();
  const setTab = (newValue: any) => {
    router.push({
      query: { id: newValue },
    });
  };

  return (
    <div className={`${classes.header} ${white ? '' : classes.header_bg}`}>
      <Breadcrumb className={''} />
      <MainTitle title={title} style="card" />
      {btns ? (
        <div className="container">
          <div className={classes.header_btn}>
            {btns?.map((b: { title: string; id: string }, i: number) => (
              <MyButton
                key={i}
                primary={router.query.id != b?.id}
                title={b?.title}
                onClick={() => setTab(b?.id)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
