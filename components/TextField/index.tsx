import TextField from '@mui/material/TextField';

type InputProps = {
  radius?: string;
  label?: string;
  fullWidth?: boolean;
  error?: boolean;
  errorLabel?: string;
  multiline?: boolean;
  rows?: number;
  onChange?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};
export default function TextInput({
  radius,
  label,
  errorLabel,
  fullWidth,
  multiline,
  rows,
  ...props
}: InputProps) {
  return (
    <>
      <TextField
        multiline={multiline}
        helperText={errorLabel}
        variant="outlined"
        label={label}
        fullWidth={fullWidth}
        rows={rows}
        // {...props}
        sx={{
          border: 'none',
          borderRadius: radius ? '15px' : '0',
          backgroundColor: '#F4F4F8',
          '& fieldset': {
            borderColor: '#ffc600',
            borderRadius: radius ? '15px' : '0',
          },
        }}
      />
    </>
  );
}
