import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Invoices from '../components/Invoices';
import NewInvoiceForm from "../components/NewInvoiceForm"

function Users() {
 


  return (
    <>
      <Navbar/>
      <Header/>
      <NewInvoiceForm/>
      <Invoices/>
    </>
  )
}

export default Users