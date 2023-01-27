import { RadioButtonCheckedRounded } from "@mui/icons-material";
import {
  Button,
  Table,
  TableBody,
  TableCell,
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
  const [editIdData, setEditIdData] = useState({});

  const [tableData, setTableData] = useState([]);

  function AddUser() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
    });

    function handleNameChange(e) {
      setFormData({ ...formData, name: e.target.value });
      // console.log(e.target.value);
    }

    function handleEmailChange(e) {
      setFormData({ ...formData, email: e.target.value });
      // console.log(e.target.value);
    }

    function handlePhoneChange(e) {
      setFormData({ ...formData, phone: e.target.value });
      // console.log(e.target.value);
    }

    function handleformSubmit(e) {
      // e.preventDefault();
      // setFormData({...formData, phone:e.target.value})
      // setFormData((prev) => [...prev, formData])
      setFormData(formData);
      console.log("formData", formData);
      setTableData([
        ...tableData,
        { ...formData, id: Math.floor(Math.random() * 100) },
      ]);
      console.log("tableData", tableData);
    }
    return (
      <Stack spacing={2}>
        <TextField
          label="Name"
          onChange={handleNameChange}
          value={editIdData.id ? editIdData.name : formData.name}
        />
        <TextField
          label="Email"
          onChange={handleEmailChange}
          value={editIdData.id ? editIdData.email : formData.email}
        />
        <TextField
          label="Phone"
          onChange={handlePhoneChange}
          value={editIdData.id ? editIdData.phone : formData.phone}
        />
        {editIdData.id ? (
          <Button
            variant="contained"
            onClick={() => {
              // handleformSubmit();
              setShowFrm(() => !showFrm);
            }}
            type="submit"
          >
            Update
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              handleformSubmit();
              setShowFrm(() => !showFrm);
            }}
            type="submit"
          >
            Submit
          </Button>
        )}
      </Stack>
    );
  }

  const handleDelete = (id) => {
    console.log("id", id);
    const tempTableData = tableData.filter((td) => td.id !== id);
    console.log(tempTableData);
    setTableData(tempTableData);
  };

  const handleEdit = (data) => {
    setEditIdData(data);
    setShowFrm(() => !showFrm);
  };

  const handleSubmit = ()=>{
    setShowFrm(() => !showFrm)
  }
  
  return (
    <Stack spacing={2} direction="column">
      {!showFrm && (
        <Button
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          ADD USER
        </Button>
      )}
      {showFrm && <AddUser /> }
        <ModalQuick tableData={tableData} handleDelete={handleDelete} handleEdit={handleEdit} handleSubmit={handleSubmit}/>
    </Stack>
  );
};

export default UserList;
