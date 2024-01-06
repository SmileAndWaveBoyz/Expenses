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
      <button className='btn btn-primary header__newButton'><svg className='plusSVG' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="white"/><path d="M17.3131 21.0234V17.3136H21.0229V14.7333H17.3131V11.0234H14.7328V14.7333H11.0229V17.3136H14.7328V21.0234H17.3131Z" fill="#7C5DFA"/></svg>New</button></header>
  )
}

export default Users