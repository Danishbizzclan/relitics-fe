import React, { useState } from 'react'
import Navbar from './Navbar'
import { DatePicker, Space } from 'antd';
import PaymentData from './Data/PaymentData';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';
import Cokies from './Cokies';
import loginSlide from './loginSlide';
import PersonalInfo from './PersonalInfo';
import FinishModal from './FinishModal';


const Payment = ({ nextStep, handleChange, values }) => {
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
  
    return (
        <div>
             <Navbar/>
           
            <div className="maj-bg">
            <PersonalInfo 
              values={values.step}/>
              <loginSlide />
                <div className="col-md-9 mt-3 mb-0 mx-auto ">
                    <div className="uper-color m-0">
                        <h3 className="text-white mb-0 p-4">Checkout</h3>

                    </div>

                    <div className='bg-pay p-4'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='bg-white p-3 '>
                                    <p className='font-17'>Card Details</p>
                                    <div className='card-border'>
                                        <div className='d-flex p-2'>
                                            <img src={'/card.png'} style={{ objectFit: "contain" }} />
                                            <p className='ms-3 font-13 my-auto'>Card Details</p>

                                        </div>

                                    </div>
                                </div>
                                <div className='bg-white mt-3  p-3'>
                                    <p className='my-auto'>Card Number</p>
                                    <small>The digits on the front of your card</small>
                                    <input
                                        className="w-100 form-bg mt-3 form-control"
                                        placeholder="enter your card number"

                                        onChange={handleChange('cardNumber')}
                                        defaultValue={values.cardNumber}
                                        // variant="outlined"
                                        required
                                        fullWidth

                                    />

                                    <p className='my-auto mt-3'>Card Holder Name</p>
                                    <small>The Name on the front of your card</small>
                                    <input
                                        className="w-100 form-bg mt-3 form-control"
                                        placeholder="enter your name"

                                        onChange={handleChange('cardName')}
                                        defaultValue={values.cardName}
                                        // variant="outlined"
                                        required
                                        fullWidth
                                    />
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <p className='my-auto mt-3'>Expiry Date</p>
                                            <small>The date on your card Expire</small>
                                            <div>
                                                <select class="form-select" className='m-1 p-2 form-bg' style={{ width: "45%" }} aria-label="Default select example">
                                                    <option selected>dec</option>
                                                    <option value="1">jan</option>
                                                    <option value="2">feb</option>
                                                    <option value="3">march</option>
                                                </select>


                                                <select class="form-select"

                                                    onChange={handleChange('year')}
                                                    defaultValue={values.year}
                                                    className='w-50 p-2 form-bg' aria-label="Default select example">
                                                    <option selected>2021</option>
                                                    <option value="1">2022</option>
                                                    <option value="2">2023</option>
                                                    <option value="3">2024</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <p className='my-auto mt-3'>Expiry CVV</p>
                                            <small>Find the Name back of your card</small>
                                            <div>
                                                <input

                                                    className="w-100 form-bg img-plac form-control"
                                                    placeholder="123"

                                                    onChange={handleChange('cvv')}
                                                    defaultValue={values.cvv}
                                                    // variant="outlined"
                                                    required
                                                    fullWidth
                                                />


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='bg-white p-3'>
                                    <p className='font-17'>Summary</p>
                                    {PaymentData.map(x => {
                                        return (
                                            <>
                                                <div className='d-flex'>
                                                    <p>{x.membership}</p>
                                                    <p className='font-bold ms-auto'>{x.membershipprice}</p>
                                                </div>
                                                <div className='d-flex'>
                                                    <p>tax</p>
                                                    <p className='font-bold ms-auto'>{x.tax}</p>
                                                </div>
                                                <hr />
                                                <div className='d-flex'>
                                                    <p>Total</p>
                                                    <p className='maj-color ms-auto'>{x.total}</p>
                                                </div>

                                            </>
                                        )
                                    })}


                                </div>
                                <div className='bg-white p-3 mt-3'>
                                    <div class="form-check ms-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <span class="form-check-label ms-2" for="flexCheckChecked">
                                            i am agree to the <TermsModal />, <PrivacyModal /> and <Cokies />
                                        </span>
                                    </div>
                                </div>
                                <div className='w-100 text-end mt-3'>
                                    <FinishModal / ></div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
       

        </div>
    )
}

export default Payment
