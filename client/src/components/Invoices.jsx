import React, { useEffect, useState } from 'react'
import jsonData from './data.json';
import { useStateContext } from '../contexts/ContextProvider';
import Header from '../components/Header';

function Invoices() {
  const { token, refresh, editPage, setEditPage} = useStateContext()
  const [editPagePosition, setEditPagePosition] = useState(window.innerWidth)

  const [data, setData] = useState([])
  useEffect(() => {
    

    const fetchInvoices = async () => {
      try {
        const response = await fetch('http://192.168.1.96:8000/api/invoices', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setData(data.invoices)
        console.log('Invoices:', data.invoices);
      } catch (error) {
        console.error('Error fetching invoices:', error.message);
      }
    };

    fetchInvoices();
  }, [refresh]);

  useEffect(() => {

    if (editPage) {
      setEditPagePosition(0)
    } else{
      setEditPagePosition(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    function handleResize() {
      if (editPage) {
        setEditPagePosition(0)
        } else{
          setEditPagePosition(window.innerWidth)
        }
    }
  
    return () => {
      window.removeEventListener('resize', handleResize)
    };

  }, [editPage])

  function viewInvoice(id) {
    console.log(id)
    setEditPage(true)
  }

  function viewInvoiceBack() {
    setEditPage(false)
  }
  
  return (
    <div className='home'>
      <div className="invoicePage">

      <main id='invoices'> 
      <Header/>
      {
        (data.length > 0) ?
        
        data.map((d, index)=>{
          return(
                <div key={index} className='container invoices' onClick={()=>viewInvoice(d.id)}>
                    <section className='invoices__row'>
                      <div className="invoices_left">
                        <h3 className='invoices__id'><h3 className='invoices__idH'>#</h3>{d.invoiceID}</h3> 
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
                </div>

                )
        })
        :
        <main className='container empty'>
            <img className='empty__image' src="./assets/illustration-empty.svg" alt="" />
            <h2 className='empty__heading'>There is nothing here</h2>
            <p className='empty__paragraph'>  Create an invoice by clicking the <br></br><strong>New Invoice</strong> button and get started</p> 
        </main>
      }
      </main>
      </div>

      <div className="editPage" style={{transform: `translateX(-${editPagePosition}px)`}}>
        <div className="container">
          <button onClick={viewInvoiceBack} className='nForm__backButton'><svg className='nForm__backButtonSVG'  width="6" height="11" viewBox="0 0 6 11" fill="none">  <path d="M4.3418 0.88623L0.113895 5.11413L4.3418 9.34203" stroke="#9277FF" stroke-width="2"/></svg>Go back</button>
        
          <header className='editPage__header'>
            <p className='editPage__status'>Status</p>
            <div className={`invoices__status pending`}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"> <circle className={`invoices__status-circle pending`} cx="4" cy="4" r="4" /></svg> Pending</div>
          </header>
          <div className="editPage__body" >

          </div>
        </div>
      </div>
  </div>
  )
}

export default Invoices