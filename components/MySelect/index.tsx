import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type SelectProps = {
  radius?: string;
  label?: string;
  options: { label: string; value: string }[];
};
export default function MySelect({ radius, label, options }: SelectProps) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={label}
          onChange={handleChange}
          sx={{
            border: "none",
            borderRadius: radius ? "15px" : "0",
            backgroundColor: "#F4F4F8",
            "& fieldset": {
              borderColor: "#ffc600",
              borderRadius: radius ? "15px" : "0",
            },
          }}
        >
          {options?.map((o: any, i: number) => (
            <MenuItem key={i} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
