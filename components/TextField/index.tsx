import TextField, { TextFieldProps } from "@mui/material/TextField";

type InputProps = TextFieldProps & {
  radius?: string;
  error?: boolean;
  errorLabel?: string;
  // onChange?: (
  //   e?:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>
  // ) => void;
};
export default function TextInput({
  radius,
  errorLabel,
  ...props
}: InputProps) {
  return (
    <>
      <TextField
        helperText={errorLabel}
        variant="outlined"
        {...props}
        sx={{
          border: "none",
          borderRadius: radius ? "15px" : "0",
          backgroundColor: "#F4F4F8",
          "& fieldset": {
            borderColor: "#ffc600",
            borderRadius: radius ? "15px" : "0",
          },
        }}
      />
    </>
  );
}
