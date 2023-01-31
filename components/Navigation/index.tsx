import classes from './Navigation.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
export type NavProps = {
  links: Array<{ href: string; rel: string }>;
};
export default function Navigation({ links }: NavProps) {
  const router = useRouter();
  console.log(router?.pathname);

  return (
    <div className={classes.nav}>
      <ul>
        {links?.map((l: { rel: string; href: string }, i: number) => (
          <li
            className={router?.pathname == l?.href ? classes.active : ''}
            key={i}
          >
            <Link href={l?.href}>{l?.rel}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
