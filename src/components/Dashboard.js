import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TodayIcon from "@mui/icons-material/Today";
import SubjectIcon from "@mui/icons-material/Subject";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";

import {
  Box,
  Checkbox,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import {
  StyledAvatar,
  StyledChip,
  customTheme,
} from "./muiTableStyledComponents";
import { createData, rows } from "../Services/ApiData";

rows.push(createData("UMA", "PK", 1324171354, 3));

console.log("rows", rows);

export default function Dashboard() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [search, setSearch] = React.useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleSearch = (e) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 1000);
  };

  return (
    <Paper
      sx={{ width: "100%", overflow: "hidden", marginLeft: "300px" }}
      elevation={5}
    >
      <TableContainer sx={{ maxHeight: 695 }} checkboxselection="true">
        <Table stickyHeader aria-label="sticky table">
          <TableHead aria-label="sticky table head">
            <TableRow>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    aligItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Checkbox />
                  <InputBase
                    onChange={handleSearch}
                    placeholder="Search here..."
                    sx={{
                      borderRadius: "50px",
                      width: "300px",
                      padding: "0px 20px",
                      backgroundColor: "#f4f7fe",
                    }}
                  />
                  <FormControl>
                    <Select
                      sx={{
                        width: "150px",
                        borderRadius: "50px",
                        backgroundColor: "#f4f7fe",
                      }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={search || "Select Country"}
                      onChange={handleSearch}
                    >
                      {rows.map((row) => {
                        return (
                          <MenuItem key={row.name} value={row.name}>
                            {row.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row-reverse",
                  }}
                >
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    // rowsPerPageOptions={[100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                  <ThemeProvider theme={customTheme}>
                    <StyledAvatar
                      sx={{
                        marginLeft: "10px",
                      }}
                    >
                      <TodayIcon />
                    </StyledAvatar>
                  </ThemeProvider>
                  <ThemeProvider theme={customTheme}>
                    <StyledAvatar onClick={() => setSearch("")}>
                      {/* reset button */}

                      <SubjectIcon />
                    </StyledAvatar>
                  </ThemeProvider>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter((row) =>
                row.name.toLowerCase().includes(search.toLowerCase())
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#f4f7fe" : "white",
                      position: "sticky",
                      left: 0,
                      // backgroundColor: "white",
                    }}
                  >
                    <TableCell
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox />
                      <StarOutlineIcon />
                      <StyledAvatar
                        sx={{
                          margin: "0px 15px",
                        }}
                      >
                        {row.name.slice(0, 1)}
                      </StyledAvatar>
                      <Typography variant="body1">{row.name}</Typography>

                      <StyledChip
                        onClick={() => {
                          alert(row.code);
                        }}
                        label="Clickable"
                        sx={{
                          marginLeft: "30px",
                          backgroundColor:
                            Math.random() > 0.5 ? "#b3e5fc" : "#007bb2",
                          color: "white",
                        }}
                      />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <LabelOutlinedIcon
                        sx={{
                          color: index % 2 === 0 ? "red" : "blue",
                        }}
                      />
                    </TableCell>
                    <TableCell>{}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
