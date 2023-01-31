import Footer from './Footer';
import Nav from './Nav';
import classes from './layout.module.scss';
type Props = {
  children: JSX.Element;
};
export default function Layout({ children }: Props) {
  return (
    <div className={classes.content}>
      <div>
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
}
