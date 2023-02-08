import classes from "./nav.module.scss";
import routes, { Links } from "../Routes";
import Image from "next/image";
import { logo, uz, en, ru, menu } from "./../../../public/media/icons";
import Link from "next/link";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import navModal from "./../NavModal/";
import { useTranslation } from "next-i18next";
import i18next from "i18next";
type Anchor = "top" | "left" | "bottom" | "right";

export default function Nav() {
  const links = routes();
  const { t } = useTranslation();

  const handleChange = (lang: string) => {
    i18next.changeLanguage(lang);
  };
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <nav className={classes.nav}>
      <Link href="/">
        <Image src={logo} width="160" height="60" alt="logo" />
      </Link>
      <div className={classes.nav__links}>
        <ul>
          {links.nav?.map((l: Links, i: number) => (
            <li key={i}>
              <Link href={l.href}>{l.rel}</Link>
            </li>
          ))}
        </ul>
        <div className={classes.nav__langs}>
          <Image
            onClick={() => handleChange("uz")}
            src={uz}
            width="25"
            height="25"
            alt="uz"
          />
          <Image
            onClick={() => handleChange("ru")}
            src={ru}
            width="25"
            height="25"
            alt="ru"
          />
          <Image
            onClick={() => handleChange("en")}
            src={en}
            width="25"
            height="25"
            alt="en"
          />
        </div>
        <Image
          onClick={toggleDrawer("left", true)}
          src={menu}
          width="25"
          height="25"
          alt="en"
        />
      </div>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {navModal(toggleDrawer)}
      </Drawer>
    </nav>
  );
}
