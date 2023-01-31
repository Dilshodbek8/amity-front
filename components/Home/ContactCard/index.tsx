import classes from './ContactCard.module.scss';
import Image from 'next/image';

export type CardProps = {
  icon: string;
  title: string;
  text: string;
  link?: string;
};
export default function ContactCard({ icon, title, text, link }: CardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.card__icon}>
        <Image src={`/media/icons/${icon}`} layout="fill" alt="icon" />
      </div>
      <div className={classes.card__text}>
        <h2>{title}</h2>
        <a href={link}>{text}</a>
      </div>
    </div>
  );
}
