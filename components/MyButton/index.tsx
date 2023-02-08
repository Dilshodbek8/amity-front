import Button from "@mui/material/Button";
export type BtnProps = {
  primary?: boolean;
  title: string;
  onClick?: any;
  href?: string;
  fullWidth?: boolean;
};
export default function MyButton({
  primary,
  title,
  onClick,
  href,
  ...props
}: BtnProps) {
  return (
    <>
      <div className={primary ? "btn_primary" : "btn_main"}>
        <Button onClick={onClick} href={href} variant="contained" {...props}>
          {title}
        </Button>
      </div>
    </>
  );
}
