import classes from './Showcase.module.scss';
export type ShowcaseProps = {
  img: string;
  title: string;
  text: string;
  link?: string;
  href?: string;
};
export default function ShowcaseCard({
  img,
  title,
  text,
  link,
  href,
}: ShowcaseProps) {
  return (
    <div
      className={classes.card}
      style={{
        backgroundImage: `linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url(/media/images/${img})`,
      }}
    >
      <div className={classes.card_text}>
        <h2>{title}</h2>
        <p>{text}</p>
        <a href={href}>{link}</a>
      </div>
    </div>
  );
}
