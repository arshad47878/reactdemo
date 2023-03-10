import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Container } from "@mui/system";
import { useEffect } from "react";

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

export default function ModalQuick({
  tableData,
  // handleEdit,
  handleDelete,
  setTableData,
  editIdData,
  setShowFrm,
  showFrm,
  handleOpen,
  handleClose,
  setOpen,
  open,
}) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    Adress1: "",
    Adress2: "",
  });

  console.log("editIdDataForm", editIdData);

  useEffect(() => {
    if (editIdData) {
      const tempEditData = tableData.find(
        (editData) => editData.id === editIdData
      );
      console.log("tempEditData", tempEditData);
      setFormData(() => tempEditData);
    }
  }, [editIdData]);

  // const handleEdit = (data) => {};
  const handleChange = (e) => {
    // if (editIdData) {
    //   const tempEditData = tableData.find(
    //     (editData) => editData.id === editIdData
    //   );
    //   console.log("tempEditData", tempEditData);
    //   setFormData(() => tempEditData);
    // }
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleformSubmit(e) {
    if (formData.id) {
      const tempEditData = tableData.filter((ed) => ed.id !== formData.id);
      setTableData([...tempEditData, formData]);
    } else {
      setTableData([
        ...tableData,
        { ...formData, id: Math.floor(Math.random() * 100) },
      ]);
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "",
      Adress1: "",
      Adress2: "",
    });
  }
  return (
    <Container>
      <Button variant="contained" onClick={() => setOpen(true)}>
        ADD User
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Container sx={{ m: 50 }}>
          <Card sx={{ m: 20 }}>
            <Stack spacing={2} sx={{ m: 5 }}>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
              <TextField
                label="Name"
                name="name"
                // value={editIdData?.id ? editIdData.name : formData.name}
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                label="Email"
                name="email"
                // value={editIdData?.id ? editIdData.email : formData.email}
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                label="Phone"
                name="phone"
                // value={editIdData?.id ? editIdData.phone : formData.phone}
                value={formData.phone}
                onChange={handleChange}
              />

              <TextField
                label="Adress1"
                name="Adress1"
                // value={editIdData?.id ? editIdData.phone : formData.phone}
                value={formData.Adress1}
                onChange={handleChange}
              />
              <TextField
                label="Adress2"
                name="Adress2"
                // value={editIdData?.id ? editIdData.phone : formData.phone}
                value={formData.Adress2}
                onChange={handleChange}
              />
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              {/* <FormLabel id="demo-controlled-radio-buttons-group">
                  City 1
                </FormLabel>
              <Checkbox
                checked={formData.checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              /> */}
              {editIdData?.id ? (
                <Button
                  variant="contained"
                  onClick={() => {
                    // handleformSubmit();
                    handleformSubmit();
                    // setShowFrm(() => !showFrm);
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
                    // setShowFrm(() => !showFrm);
                    handleClose(() => setOpen(false));
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              )}
            </Stack>
          </Card>
        </Container>
      </Modal>
    </Container>
  );
}
