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
        if (values.price == 0) {
            SignUp()
        }
    }, [values.price]);


    const SignUp = () => {
        // alert('1')
        // const res = Acount.Registeration(values, handleErrors)
        // res

        console.log({ values })
        alert('1')
        let formData = new FormData();

        formData.append("first name", values.firstName)
        formData.append("familyName", values.familyName)
        formData.append("userName", values.username)
        formData.append("city", values.city)
        formData.append("state", values.state)
        formData.append("dob", values.dob)
        formData.append("phone", values.phone)
        formData.append("image", values.image)
        formData.append("pkgId", values.pkgId)
        formData.append("email", values.email)
        formData.append("password", values.password)

        axios
            .post("/users", formData)
            .then(value => {
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
                        <p className="text-white fs-22">  {errorMessage} </p>
                    </CustomModal>
                </div> : <p>Loading....</p>}</>
    );

};

export default Payment;


