import classes from "./GlobalCard.module.scss";
import Image from "next/image";
export type CardProps = {
  img: string;
  title: string;
  text: string;
};
export default function GlobalCard({ img, title, text }: CardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.card_img}>
        <Image src={`/media/images/${img}`} layout="fill" alt="card_img" />
      </div>
      <div className={classes.card_text}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
