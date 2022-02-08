// import React, { useState } from 'react'
// import Navbar from './Navbar'
// import { DatePicker, Space } from 'antd';
// import PaymentData from './Data/PaymentData';
// import TermsModal from './TermsModal';
// import PrivacyModal from './PrivacyModal';
// import Cokies from './Cokies';
// import loginSlide from './loginSlide';
// import PersonalInfo from './PersonalInfo';
// import FinishModal from './FinishModal';


// const Payment = ({ nextStep, handleChange, values }) => {
//     function onChange(date, dateString) {
//         console.log(date, dateString);
//     }

//     return (
//         <div>
//             <Navbar />

//             <div className="container-fluid theme_bg p-5">
//                 <div className="py-5">
//                     <div className='mb-5'><PersonalInfo
//                         values={values.step} />
//                         <loginSlide />
//                     </div>
//                     <div className="container">
//                         <div className="col-md-11 mt-3 brdr_div mb-0 mx-auto ">
//                             <div className="uper-color p-3">
//                                 <p className="text-white fs-40 Gothic_3D mb-0 p-4">Checkout</p>
//                             </div>
//                             <div className='bg-pay p-4'>
//                                 <div className='row'>
//                                     <div className='col-lg-6'>
//                                         <div className='bg-white card'>
//                                             <p className='fs-22'>Card Details</p>
//                                             <div className='d-flex card-border py-4 px-5'>
//                                                 <img src={'/card.png'} style={{ objectFit: "contain" }} />
//                                                 <p className='ms-3 fs-15 my-auto'>Credit card</p>
//                                             </div>
//                                         </div>
//                                         <div className='bg-white card'>
//                                             <p className='my-auto fs-15'>Card Number</p>
//                                             <p className='fs-12'>The digits on the front of your card</p>
//                                             <input
//                                                 className="w-100 form-bg mt-3 form-control"
//                                                 placeholder="enter your card number"
//                                                 onChange={handleChange('cardNumber')}
//                                                 defaultValue={values.cardNumber}
//                                                 // variant="outlined"
//                                                 required
//                                             />
//                                             <p className='my-auto mt-3 fs-15'>Card Holder Name</p>
//                                             <p className='fs-12'>The Name on the front of your card</p>
//                                             <input
//                                                 className="w-100 form-bg mt-3 form-control"
//                                                 placeholder="enter your name"
//                                                 onChange={handleChange('cardName')}
//                                                 defaultValue={values.cardName}
//                                                 // variant="outlined"
//                                                 required
//                                             />
//                                             <div className='row'>
//                                                 <div className='col-sm-6'>
//                                                     <p className='my-auto mt-3 fs-15'>Expiry Date</p>
//                                                     <p className='fs-12'>The date on your card Expire</p>
//                                                     <div>
//                                                         <select className="form-select" className='m-1 p-2 form-bg' style={{ width: "45%" }} aria-label="Default select example">
//                                                             <option selected>dec</option>
//                                                             <option value="1">jan</option>
//                                                             <option value="2">feb</option>
//                                                             <option value="3">march</option>
//                                                         </select>
//                                                         <select className="form-select"
//                                                             onChange={handleChange('year')}
//                                                             defaultValue={values.year}
//                                                             className='w-50 p-2 form-bg' aria-label="Default select example">
//                                                             <option selected>2021</option>
//                                                             <option value="1">2022</option>
//                                                             <option value="2">2023</option>
//                                                             <option value="3">2024</option>
//                                                         </select>
//                                                     </div>
//                                                 </div>
//                                                 <div className='col-sm-6'>
//                                                     <p className='my-auto fs-15 mt-3'>Expiry CVV</p>
//                                                     <p className='fs-12'>Find the Name back of your card</p>
//                                                     <div>
//                                                         <input
//                                                             className="w-100 form-bg img-plac form-control"
//                                                             placeholder="123"

//                                                             onChange={handleChange('cvv')}
//                                                             defaultValue={values.cvv}
//                                                             // variant="outlined"
//                                                             required
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className='col-md-6'>
//                                         <div className='bg-white card'>
//                                             <p className='fs-22 Bold'>Summary</p>
//                                             {PaymentData.map(x => {
//                                                 return (
//                                                     <>
//                                                         <div className='d-flex fs-18'>
//                                                             <p>{x.membership}</p>
//                                                             <p className='Bold ms-auto'>{x.membershipprice}</p>
//                                                         </div>
//                                                         <div className='d-flex fs-18'>
//                                                             <p>tax</p>
//                                                             <p className='Bold ms-auto'>{x.tax}</p>
//                                                         </div>
//                                                         <hr />
//                                                         <div className='d-flex fs-18'>
//                                                             <p>Total</p>
//                                                             <p className='Bold bluetxt ms-auto'>{x.total}</p>
//                                                         </div>
//                                                     </>
//                                                 )
//                                             })}
//                                         </div>
//                                         <div className='bg-white card'>
//                                             <div className="form-check ms-3">
//                                                 <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                                                 <p className="form-check-label fs-15 ms-2" htmlFor="flexCheckChecked">
//                                                     i am agree to the <TermsModal />, <PrivacyModal /> and <Cokies />
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className='w-100 text-end mt-3'>
//                                             <FinishModal /></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Payment
import { PayPalButton } from "react-paypal-button-v2";
import React, { useState, useEffect } from "react";
import GetData from "../Api/GetData";
import Link from "next/link"
import Acount from "../Api/Acount";
import CustomModal from "./Modal";
import axios from "axios";


const Payment = ({ prevStep, nextStep, handleChange, values }) => {
    const [clientId, setClientId] = useState('')
    const [succesModel, setSuccesModel] = useState(false)
    const [success, setSuccess] = useState('')
    const [errorModal, setErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")







    useEffect(() => {
        const response = GetData.GetMerchantId();
        console.log(response)
        response.then(value => {
            console.log(value)
            setClientId(value.data.clientID);
            console.log(value.data.clientID)
        })
    }, [])

    useEffect(() => {
      if(values.price == 0){
          SignUp()
      }
    }, [values.price]);
    

    const SignUp = () => {
// alert('1')
        // const res = Acount.Registeration(values, handleErrors)
        // res
        axios
        .post("/users", {
          firstName: values.firstName,
          lastName: values.familyName,
          username: values.username,
          city: values.city,
          state: values.state,
          dob: values.dob,
          phone: values.phone,
          image: values.image,
          packageID: '61e516f81a5bd094548e998e',
          email: values.email,
          password: values.password
        }).then(value => {
            setSuccess(value.data.message)
            localStorage.setItem('user', JSON.stringify(value.data.user))
            localStorage.setItem('token', value.data.token)

            console.log('Sign Up res', value)
            // if (value.data.success) {
                setSuccesModel(true)
            // }
            // else {
            //     alert('4')
            //     setErrorModel(true)
            // }

        })
            .catch(error => {
                alert('5')
                console.log('error', error.response)
                setErrorModal(true)
                setErrorMessage(error.response.data.message)


            })
    }

    return (
        <>
            {clientId ?
                <div className="App">
                    <PayPalButton
                        shippingPreference="NO_SHIPPING"
                        amount={values.price}
                        options={{
                            clientId: clientId
                        }}
                        onSuccess={(details, data) => {
                            console.log("Details---------->", details);
                            console.log("Data------------->", data);
                            SignUp()
                        }
                        }


                    />
                    <CustomModal
                        title="Succefull"
                        isModalVisible={succesModel}
                        handleOk={nextStep}
                        closable={false}
                    >
                        <div className='p-5'>
                            <p className='fs-22 text-white text-center p-5'>{success}</p>
                            <div className='text-center'>
                                <Link href="/Dashboard">
                                    <button className='btn login-button fs-14 px-5 mx-auto'>View your dashboard</button></Link>
                            </div>
                        </div>
                    </CustomModal>
                    <CustomModal
                        title="Succefull"
                        isModalVisible={errorModal}
                        handleOk={nextStep}
                        closable={false}
                    >
                        {errorMessage}
                    </CustomModal>
                </div> : <p>Loading....</p>}</>
    );

};

export default Payment;


