import Image from "next/image";
import classes from "./Entry.module.scss";

export type EntryProps = {
  title?: string;
  text?: Array<string>;
};
export default function Entry({ title, text }: EntryProps) {
  return (
    <div className={classes.card}>
      <h4>{title}</h4>
      <ul>
        {text?.map((t: string, i: number) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
