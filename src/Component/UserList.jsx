import { RadioButtonCheckedRounded } from "@mui/icons-material";
import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import ModalQuick from "./Modal";

const UserList = () => {
  // const [show, setShow] = useState(false);
  const [showFrm, setShowFrm] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [editIdData, setEditIdData] = useState('');
  const handleOpen = (fn) => {
    fn();
  };
  const handleClose = (fn) => {
    fn();
  };

  const [tableData, setTableData] = useState([]);


  const handleDelete = (id) => {
    console.log("id", id);
    const tempTableData = tableData.filter((td) => td.id !== id);
    console.log(tempTableData);
    setTableData(tempTableData);
  };

  const handleEdit = (data) => {
    console.log("data", data);
    setEditIdData(data?.id);
    console.log("editIdData", editIdData);
    console.log("table", tableData);
    handleOpen(() => setOpen(true));
    // setShowFrm(() => !showFrm);
  };

  // const handleSubmit = () => {
  //   setShowFrm(() => !showFrm);
  // };

  return (
    <Stack spacing={2} direction="column">
      {/* {!showFrm && (
        <Button variant="contained" color="success" onClick={handleSubmit}>
          ADD USER
        </Button>
      )} */}
      {/* {showFrm && <AddUser /> } */}
      {
        <ModalQuick
          setTableData={setTableData}
          tableData={tableData}
          editIdData={editIdData}
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      }
      {/* <ModalQuick tableData={tableData} handleDelete={handleDelete} handleEdit={handleEdit} handleSubmit={handleSubmit}/> */}
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
    </Stack>
  );
};

export default UserList;
