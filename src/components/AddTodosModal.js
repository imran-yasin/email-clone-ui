import * as React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Slide,
  styled,
  Stack,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { rows, createData } from "../Services/ApiData";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            // color: (theme) => theme.palette.grey[500],
            backgroundColor: (theme) => theme.palette.grey[400],
            color: "white",
            "&:hover": {
              color: (theme) => theme.palette.grey[700],
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const AddTodosModal = ({ showModal, handleCloseModal }) => {
  const [country, setCountry] = React.useState("");
  const [countrySymbol, setCountrySymbol] = React.useState("");
  const [popluation, setPopluation] = React.useState("");
  const [countrSize, setCountrSize] = React.useState("");
  // const [loading, setLoading] = React.useState("Loading...");
  const handleClose = () => {
    handleCloseModal();
  };

  const handlePushData = () => {
    if (
      country !== "" &&
      countrySymbol !== "" &&
      popluation !== "" &&
      countrSize !== ""
    ) {
      rows.push(createData(country, countrySymbol, popluation, countrSize));
      console.log(rows);
    } else alert("Please fill all the fields");
    // rows.push(createData("ABC", "abc", 4234, 12));

    // console.log(country, countrySymbol, popluation, countrSize);
    // console.log("pushed ", rows);
  };

  return (
    <div>
      <BootstrapDialog
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={showModal}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          New Todos
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Stack>
            {/* <Box>
              <Typography variant="subtitle1" sx={{ mr: 10 }}>
                Country Name
              </Typography>
              <Typography variant="subtitle1">Country Name</Typography>
              <Typography variant="subtitle1">Country Name</Typography>
            </Box> */}
            <Box>
              <TextField
                // country
                onChange={(e) => setCountry(e.target.value)}
                sx={{
                  width: "200px",
                  mr: 10,
                  mb: 2,
                }}
              />
              <TextField
                // countrySymbol
                onChange={(e) => setCountrySymbol(e.target.value)}
                sx={{
                  width: "200px",
                }}
              />
              <TextField
                // popluation
                onChange={(e) => setPopluation(e.target.value)}
                sx={{
                  width: "200px",
                }}
              />

              <TextField
                // country size
                onChange={(e) => setCountrSize(e.target.value)}
                sx={{
                  width: "200px",
                  ml: 10,
                  mb: 2,
                }}
              />
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePushData} color="primary" variant="contained">
            Add Todos
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default AddTodosModal;
