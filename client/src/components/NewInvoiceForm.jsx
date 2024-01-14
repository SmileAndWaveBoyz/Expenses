import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider';

function NewInvoiceForm(props) {

    const [errors, setErrors] = useState(null)
    const senderAddressStreetRef = useRef(null)
    const senderAddressCityRef = useRef(null)
    const { newForm, setNewForm} = useStateContext()
    const [newFormPosition, setNewFormPosition] = useState(window.innerWidth)  
    
    useEffect(() => {

      if (newForm) {
        setNewFormPosition(0)
      } else{
        setNewFormPosition(window.innerWidth)
      }

      window.addEventListener('resize', handleResize)
      function handleResize() {
        if (newForm) {
            setNewFormPosition(0)
          } else{
            setNewFormPosition(window.innerWidth)
          }
      }
    
      return () => {
        window.removeEventListener('resize', handleResize)
      };

    }, [newForm])

    function goBack() {
        setNewForm(false)
    }
    

    function onSubmit() {
        
    }

  return (
    <>
        <div className='nForm' style={{transform: `translateX(-${newFormPosition}px)`}}>
            <div className="nForm__Padding container">
                <button onClick={goBack} className='nForm__backButton'> <svg className='nForm__backButtonSVG'  width="6" height="11" viewBox="0 0 6 11" fill="none">  <path d="M4.3418 0.885742L0.113895 5.11364L4.3418 9.34155" stroke="#7C5DFA" stroke-width="2"/></svg>Go back</button>
                <h1 className='nForm__header'>New Invoice</h1>

                <form className='nForm_form' onSubmit={onSubmit}>

                <h2 className='nForm__header2'>Bill From</h2>
                <div className="form-group">
                    <label>Street address</label>
                    <input type="email" className="form-control" ref={senderAddressStreetRef} autoFocus/>
                    {
                    (errors && errors.email) ?
                    <p class="errorMessage">{errors.email}</p>
                    :
                    null
                    }
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label>City</label>
                        <input type="text" className="form-control" ref={senderAddressCityRef}/>
                        {
                        (errors && errors.password) ?
                        <p class="errorMessage">{errors.password}</p>
                        :
                        null
                    }
                    </div>
                    <div className="form-group col">
                        <label>Post Code</label>
                        <input type="text" className="form-control" />
                        {
                            (errors && errors.password) ?
                            <p class="errorMessage">{errors.password}</p>
                            :
                            null
                        }
                    </div>
                    <div className="form-group col-md">
                        <label>Country</label>
                        <input type="text" className="form-control"/>
                        {
                            (errors && errors.email) ?
                            <p class="errorMessage">{errors.email}</p>
                        :
                        null
                        }
                    </div>
                </div>


                <h2 className='nForm__header3'>Bill To</h2>

                <div className="form-group">
                    <label>Client's name</label>
                    <input type="text" className="form-control"/>
                    {
                        (errors && errors.email) ?
                        <p class="errorMessage">{errors.email}</p>
                        :
                        null
                    }
                </div>

                <div className="form-group">
                    <label>Client's Email</label>
                    <input type="email" className="form-control"/>
                    {
                    (errors && errors.email) ?
                    <p class="errorMessage">{errors.email}</p>
                    :
                    null
                    }
                </div>

                <div className="form-group">
                    <label>Street Address</label>
                    <input type="text" className="form-control"/>
                    {
                    (errors && errors.email) ?
                    <p class="errorMessage">{errors.email}</p>
                    :
                    null
                    }
                </div>

                <div className="row">
                    <div className="form-group col">
                        <label>City</label>
                        <input type="text" className="form-control" ref={senderAddressCityRef}/>
                        {
                        (errors && errors.password) ?
                        <p class="errorMessage">{errors.password}</p>
                        :
                        null
                    }
                    </div>
                    <div className="form-group col">
                        <label>Post Code</label>
                        <input type="text" className="form-control" />
                        {
                            (errors && errors.password) ?
                            <p class="errorMessage">{errors.password}</p>
                            :
                            null
                        }
                    </div>
                <div className="form-group col-md">
                    <label>Country</label>
                    <input type="text" className="form-control"/>
                    {
                    (errors && errors.email) ?
                    <p class="errorMessage">{errors.email}</p>
                    :
                    null
                    }
                </div>
                </div>


                <div className="form-group">
                    <label>Invoice Date</label>
                    <input type="date" className="form-control"/>
                    {
                        (errors && errors.email) ?
                        <p class="errorMessage">{errors.email}</p>
                        :
                        null
                    }
                </div>

                <div className="form-group">
                    <label>Payment Terms</label>
                    <select className="form-control" name="cars" id="cars">
                        <option value="1">Net 1 Day</option>
                        <option value="7">Net 7 Day</option>
                        <option value="14">Net 14 Day</option>
                        <option value="30">Net 30 Day</option>
                    </select>
                    {
                    (errors && errors.email) ?
                    <p class="errorMessage">{errors.email}</p>
                    :
                    null
                    }
                </div>

                <div className="form-group">
                    <label>Project Description</label>
                    <input type="text" className="form-control"/>
                    {
                        (errors && errors.email) ?
                        <p class="errorMessage">{errors.email}</p>
                        :
                        null
                    }
                </div>

                <h2 className='nForm__ItemHeader'>Item List</h2>

                <div className="form-group">
                    <label>Item Name</label>
                    <input type="text" className="form-control"/>
                    {
                    (errors && errors.email) ?
                    <p class="errorMessage">{errors.email}</p>
                    :
                    null
                    }
                </div>

                <div className="row">
                    <div className="form-group col">
                        <label>Qty.</label>
                        <input type="text" className="form-control" ref={senderAddressCityRef}/>
                        {
                            (errors && errors.password) ?
                            <p class="errorMessage">{errors.password}</p>
                            :
                            null
                        }
                    </div>
                    <div className="form-group col">
                        <label>Price</label>
                        <input type="text" className="form-control" />
                        {
                            (errors && errors.password) ?
                        <p class="errorMessage">{errors.password}</p>
                        :
                        null
                    }
                    </div>
                    <div className="form-group col">
                        <label>Total</label>
                        <div className="nForm__totalContainer">
                            <p className='nForm__total'>400.00</p>
                        </div>
                    </div>
                    <div className="form-group col">
                    <div className="nForm__space"></div>
                        <div className="nForm__deleteContainer">
                            <button className='nForm__deleteButton'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.44442 0L9.33333 0.888875H12.4444V2.66667H0V0.888875H3.11108L4 0H8.44442ZM2.66667 16C1.68442 16 0.888875 15.2045 0.888875 14.2222V3.55554H11.5555V14.2222C11.5555 15.2045 10.76 16 9.77779 16H2.66667Z" fill="#888EB0"/></svg></button>
                        </div>
                    </div>
                </div>

                <button className='btn btn-transparent nForm__addButton'>+ Add New Item</button>
                </form>
            </div>
            <div className="nForm__rectangle"> </div>
            <div className="nForm__Padding nForm_row container">
                <button className='btn btn-transparent nForm__discardButton '>Discard</button>
                <button className='btn btn-dark nForm__saveButton '>Save as Draft</button>
                <button className='btn btn-primary nForm__sendButton'>Save & Send</button>
            </div>
        </div>
    </>
  )
}

export default NewInvoiceForm