import { Modal, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
  },
}));

export default function ConfirmationModal({ open, onClose, onConfirm }) {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="confirmation-modal"
      aria-describedby="confirmation-modal-description"
    >
      <div className={classes.paper}>
        <Typography variant="h6" id="confirmation-modal">
          Are you sure you want to delete this concert?
        </Typography>
        <Button
          onClick={onConfirm}
          color="secondary"
          variant="contained"
          style={{ margin: "10px" }}
        >
          Yes
        </Button>
        <Button
          onClick={onClose}
          color="primary"
          variant="contained"
          style={{ margin: "10px" }}
        >
          No
        </Button>
      </div>
    </Modal>
  );
}
