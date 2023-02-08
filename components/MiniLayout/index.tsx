import classes from "./MiniLayout.module.scss";
import Navigation from "../Navigation";
import routes from "../Layout/Routes";
import MainTitle from "../Maintitle";
import Breadcrumb from "../Breadcrumb";
export default function MiniLayout({ title, children }: any) {
  const links = routes();
  return (
    <div className={classes.body}>
      <div className={classes.body_top}></div>
      <div className="container2">
        <div className={classes.body_bottom}>
          <div className={classes.body_bottom_c}>
            <Breadcrumb className={""} />
            <MainTitle title={title} style="card" textposition="center" />
          </div>

          <div className={classes.body_bottom_l}>
            <Navigation links={links?.about} />
          </div>
          <div className={classes.body_bottom_r}>{children}</div>
        </div>
      </div>
    </div>
  );
}
