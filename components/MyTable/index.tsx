import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classname from "./style.module.scss";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 500,
    fontSize: "20px",
    backgroundColor: "#002B49",
    color: "#FFC600",
    // textAlign: 'left',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    color: "#002B49",
    fontWeight: 700,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  color: "#002B49",

  "&:nth-of-type(odd)": {
    backgroundColor: "#F4F4F8",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export type TableProps = {
  rows: Array<string>;
  cols: any;
  fields: Array<string>;
};

export default function MyTable({ rows, cols, fields }: TableProps) {
  return (
    <div className={classname.body}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 850 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {rows?.map((r: any, i: number) => (
                <StyledTableCell key={i} align="center">
                  {r}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cols?.map((r: any, i: number) => (
              <StyledTableRow key={i}>
                {fields.map((f: any, i: number) => (
                  <StyledTableCell
                    key={i}
                    align="center"
                    component="th"
                    scope="row"
                  >
                    {typeof r[fields[i]] == "object" ? (
                      <a
                        // style={{
                        //   color: "#002b49",
                        //   padding: "10px 20px",
                        //   borderRadius: "50px",
                        //   backgroundColor: "#ffc600",
                        // }}
                        href={r[fields[i]]?.link}
                      >
                        {r[fields[i]]?.text}
                      </a>
                    ) : (
                      r[fields[i]]
                    )}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
