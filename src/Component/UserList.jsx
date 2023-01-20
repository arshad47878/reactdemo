import { Button, Table, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const UserList = () => {
  const [show, setShow] = useState(false);

  function AddUser(){

  }
  return (
    <>
    <Button variant="contained" color="success" onClick={()=>AddUser()}>ADD USER</Button>
    
<Table>
<TableHead>
<TableRow>
  <TableCell>id</TableCell>
  <TableCell>FirstName</TableCell>
  <TableCell>LastName</TableCell>
  <TableCell>Gender</TableCell>
  <TableCell>Email</TableCell>
</TableRow>
</TableHead>
</Table>
</>
    )
}

export default UserList