import cn from "./style.module.scss";
export default function Loader() {
  return (
    <div className={cn.body}>
      <div className={cn.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
