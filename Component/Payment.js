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
        
            <div className="container-fluid theme_bg p-5">
            <PersonalInfo 
              values={values.step}/>
              <loginSlide />
                <div className="col-md-9 mt-3 brdr_div mb-0 mx-auto ">
                    <div className="uper-color p-3">
                        <p className="text-white fs-40 Gothic_3D mb-0 p-4">Checkout</p>
                    </div>
                    <div className='bg-pay p-4'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='bg-white card'>
                                    <p className='fs-22'>Card Details</p>
                                        <div className='d-flex card-border py-4 px-5'>
                                            <img src={'/card.png'} style={{ objectFit: "contain" }} />
                                            <p className='ms-3 fs-15 my-auto'>Credit card</p>
                                        </div>
                                </div>
                                <div className='bg-white card'>
                                    <p className='my-auto fs-15'>Card Number</p>
                                    <p className='fs-12'>The digits on the front of your card</p>
                                    <input
                                        className="w-100 form-bg mt-3 form-control"
                                        placeholder="enter your card number"
                                        onChange={handleChange('cardNumber')}
                                        defaultValue={values.cardNumber}
                                        // variant="outlined"
                                        required
                                    />
                                    <p className='my-auto mt-3 fs-15'>Card Holder Name</p>
                                    <p className='fs-12'>The Name on the front of your card</p>
                                    <input
                                        className="w-100 form-bg mt-3 form-control"
                                        placeholder="enter your name"
                                        onChange={handleChange('cardName')}
                                        defaultValue={values.cardName}
                                        // variant="outlined"
                                        required
                                    />
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <p className='my-auto mt-3 fs-15'>Expiry Date</p>
                                            <p className='fs-12'>The date on your card Expire</p>
                                            <div>
                                                <select className="form-select" className='m-1 p-2 form-bg' style={{ width: "45%" }} aria-label="Default select example">
                                                    <option selected>dec</option>
                                                    <option value="1">jan</option>
                                                    <option value="2">feb</option>
                                                    <option value="3">march</option>
                                                </select>
                                                <select className="form-select"
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
                                            <p className='my-auto fs-15 mt-3'>Expiry CVV</p>
                                            <p className='fs-12'>Find the Name back of your card</p>
                                            <div>
                                                <input
                                                    className="w-100 form-bg img-plac form-control"
                                                    placeholder="123"

                                                    onChange={handleChange('cvv')}
                                                    defaultValue={values.cvv}
                                                    // variant="outlined"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='bg-white card'>
                                    <p className='fs-22 Bold'>Summary</p>
                                    {PaymentData.map(x => {
                                        return (
                                            <>
                                                <div className='d-flex fs-18'>
                                                    <p>{x.membership}</p>
                                                    <p className='Bold ms-auto'>{x.membershipprice}</p>
                                                </div>
                                                <div className='d-flex fs-18'>
                                                    <p>tax</p>
                                                    <p className='Bold ms-auto'>{x.tax}</p>
                                                </div>
                                                <hr />
                                                <div className='d-flex fs-18'>
                                                    <p>Total</p>
                                                    <p className='Bold blueColor ms-auto'>{x.total}</p>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className='bg-white card'>
                                    <div className="form-check ms-3">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <p className="form-check-label fs-15 ms-2" htmlFor="flexCheckChecked">
                                            i am agree to the <TermsModal />, <PrivacyModal /> and <Cokies />
                                        </p>
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
