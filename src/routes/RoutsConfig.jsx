
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Component/Home'
import Cloth from '../Component/Cloth'
import Jewellery from '../Component/Jewellery'
import UserList from '../Component/UserList'



const RoutesConfig = () => {
  return (
   
        
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/users" element={<UserList />} />
          
        
      </Routes>
   
  )
}

export default RoutesConfig