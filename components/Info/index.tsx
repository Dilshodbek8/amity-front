import classes from './Programs.module.scss';
import Image from 'next/image';
import MainTitle from '../Maintitle';
export type ProgramsProps = {
  title: string;
  titles: Array<string>;
};
export default function Programs({ title, titles }: ProgramsProps) {
  return (
    <div className={classes.card}>
      <MainTitle textposition="left" style="ordinary" title={title} />
      <ul>
        {titles?.map((t: string, i: number) => (
          <li key={i}>
            <span>
              <Image
                src={`/media/icons/checked.svg`}
                layout="fill"
                alt="checked"
              />
            </span>
            <p>{t}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
