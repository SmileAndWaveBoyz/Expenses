import React from 'react'

function Users() {
  return (
    <header className='container d-flex justify-content-between'>
      <div className="header">
        <h1>Invoices</h1>
        <h3>There are 7 total invoices</h3>
      </div>
      <select name="filter" class="form-select">
        <option selected value="amount">Filter by amount</option>
        <option value="date">Filter by date</option>
        <option value="status">Filter by status</option>
        <option value="name">Filter by name</option>
      </select>
      <button className='btn btn-primary'>New invoice</button>
    </header>
  )
}

export default Users