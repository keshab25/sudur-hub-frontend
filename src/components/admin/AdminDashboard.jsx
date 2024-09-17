import React from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AllAdminProducts from './allAdminProducts/AllAdminProducts'

const AdminDashboard = () => {

  return (
    <>
    <div className='my-12'>
      <AllAdminProducts/>
    </div>
    </>

  )
}

export default AdminDashboard
