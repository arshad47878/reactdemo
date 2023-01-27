import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const style = {
  // position: 'absolute' as 'absolute',
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalQuick({ tableData, handleEdit, handleDelete }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Card sx={{ m: 20 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone No.</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  // tableData.length !== 0 &&

                  tableData?.map((data, index) => (
                    <TableRow key={index}>
                      <TableCell>{data.id}</TableCell>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>{data.email}</TableCell>
                      <TableCell>{data.phone}</TableCell>

                      {data.id !== "" && (
                        <TableCell>
                          <Button
                            sx={{ m: 1 }}
                            variant="outlined"
                            onClick={() => {
                              handleEdit(data);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outlined"
                            onClick={() => handleDelete(data.id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      )}
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Modal>
    </div>
  );
}
