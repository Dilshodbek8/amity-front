import Image from 'next/image';
import classes from './InfoCard.module.scss';

export type InfoCardProps = {
  img: string;
  name: string;
  title?: string;
  text?: string;
};
export default function InfoCard({ img, name, title, text }: InfoCardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.card_img}>
        <Image
          src={`/media/icons/${img}`}
          width={'50'}
          height={'50'}
          alt={'icon'}
        />
      </div>
      <div className={classes.card_text}>
        <span>{name}</span>
        {title ? <h2>{title}</h2> : null}
        {text ? <p>{text}</p> : null}
      </div>
    </div>
  );
}
