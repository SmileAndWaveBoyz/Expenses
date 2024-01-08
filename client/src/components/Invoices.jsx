import React from 'react'

function Invoices() {
  return (
    <main className='container invoices'>
        <section className='invoices__row'>
            <h3 className='invoices__id'><h3 className='invoices__idH'>#</h3>RT3080</h3> 
            <div className="">
                <p className='invoices__date due'>Due</p> <p className='invoices__date'> 19 Aug 2021</p> 
            </div>
            <p className='invoices__name'>Jensen Huang</p>
            <h3 className='invoices__id'>£ 1,800.90</h3>
            <div className="invoices__status paid"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"> <circle className='invoices__status-circle green' cx="4" cy="4" r="4" /></svg> Paid</div>
            <svg className='mobileNoDisplay' xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none"> <path d="M1 1L5 5L1 9" stroke="#7C5DFA" stroke-width="2"/></svg>
        </section>
    </main>
  )
}

export default Invoices