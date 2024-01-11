import React, { useEffect, useState } from 'react'
import jsonData from './data.json';

function Invoices() {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(jsonData)
  }, []);
  
  return (
      <>
      {
        (data.length > 0) ?

        data.map((d, index)=>{
          return(
                <main key={index} className='container invoices'>
                    <section className='invoices__row'>
                      <div className="invoices_left">
                        <h3 className='invoices__id'><h3 className='invoices__idH'>#</h3>{d.id}</h3> 
                        <div className="invoices_dateContainer">
                            <p className='invoices__date due'>Due</p> <p className='invoices__date'> {d.paymentDue}</p> 
                        </div>
                        <h3 className='invoices__id'>£ {d.total.toFixed(2)}</h3>
                      </div>

                      <div className="invoices_right">
                        <p className='invoices__name'>{d.clientName}</p>
                        <div className={`invoices__status ${d.status}`}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"> <circle className={`invoices__status-circle ${d.status}`} cx="4" cy="4" r="4" /></svg> {d.status}</div>
                        <svg className='mobileNoDisplay invoices__arrow' xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none"> <path d="M1 1L5 5L1 9" stroke="#7C5DFA" stroke-width="2"/></svg>
                      </div>
                    </section>
                </main>

                )
        })
        :
        <main className='container empty'>
            <img className='empty__image' src="./assets/illustration-empty.svg" alt="" />
            <h2 className='empty__heading'>There is nothing here</h2>
            <p className='empty__paragraph'>  Create an invoice by clicking the <br></br><strong>New Invoice</strong> button and get started</p> 
        </main>
      }
      </>
  )
}

export default Invoices