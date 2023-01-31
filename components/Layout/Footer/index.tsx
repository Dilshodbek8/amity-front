import classes from './footer.module.scss';
import {
  logo,
  fLocation,
  fMessage,
  fTel,
  YouTube,
  Facebook,
  LinkedIn,
  Instagram,
  Telegram,
} from './../../../public/media/icons';
import Image from 'next/image';
import routes, { Links } from '../routes';
import Link from 'next/link';
export default function Footer() {
  const links = routes();
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className={classes.footer_container}>
          <div className={classes.footer_top}>
            <div className={classes.footer_left}>
              <Image src={logo} width="160" height="60" alt="logo" />
              <div className={classes.footer_info}>
                <Image src={fLocation} width="15" height="15" alt="location" />
                <p>
                  Tashkent City, Street Labzak, Building-70, 100028, Uzbekistan
                </p>
              </div>
              <div className={classes.footer_info}>
                <Image src={fMessage} width="15" height="15" alt="location" />
                <p>
                  <a href="mailto: admission@amity.uz">admission@amity.uz</a>
                </p>
              </div>
              <div className={classes.footer_info}>
                <Image src={fMessage} width="15" height="15" alt="location" />
                <p>
                  <a href="mailto: info@amity.uz">info@amity.uz</a>
                </p>
              </div>
              <div className={classes.footer_info}>
                <Image src={fTel} width="15" height="15" alt="location" />
                <p>
                  <a href="tel: +9998712079003">
                    +9998712079003, +99871 2079008 (Marketing Department)
                  </a>
                </p>
              </div>
              <div className={classes.footer_info}>
                <Image src={fTel} width="15" height="15" alt="location" />
                <p>
                  <a href="tel: +998712079006">
                    +998712079006 +998712079007 (Admission Department)
                  </a>
                </p>
              </div>
            </div>
            <div className={classes.footer_right}>
              <div>
                <h2>About Us</h2>
                <ul>
                  {links.about?.map((l: Links, i: number) => (
                    <li key={i}>
                      <Link href={l.href}>{l.rel}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Admission</h2>
                <ul>
                  {links.admission?.map((l: Links, i: number) => (
                    <li key={i}>
                      <Link href={l.href}>{l.rel}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Information</h2>
                <ul>
                  {links.information?.map((l: Links, i: number) => (
                    <li key={i}>
                      <Link href={l.href}>{l.rel}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.footer_bottom}>
            <div className={classes.footer_icon}>
              <a href="https://www.facebook.com/amityuniversityuz">
                <Image src={Facebook} layout="fill" alt="icon" />
              </a>
            </div>

            <div className={classes.footer_icon}>
              <a href="https://www.linkedin.com/school/amity-university-tashkent">
                <Image src={LinkedIn} layout="fill" alt="icon" />
              </a>
            </div>
            <div className={classes.footer_icon}>
              <a href="https://www.instagram.com/amity_university_uz/">
                <Image src={Instagram} layout="fill" alt="icon" />
              </a>
            </div>
            <div className={classes.footer_icon}>
              <a href="https://www.youtube.com/c/AmityUniversityTashkent">
                <Image src={YouTube} layout="fill" alt="icon" />
              </a>
            </div>
            <div className={classes.footer_icon}>
              <a href="https://t.me/AmityUniversityTashkent">
                <Image src={Telegram} layout="fill" alt="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
