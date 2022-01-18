import React, { useState } from 'react'

import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import Price from './Price'
import Navbar from "../Component/Navbar"
import PersonalInfo from './PersonalInfo';
import Acount from '../Api/Acount'
import FreeModal from './FreeModal';
import CustomModal from './Modal';


const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [errorModel, setErrorModel] = useState(false)
  const [succesModel, setSuccesModel] = useState(false)


  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const handleErrors = (error) => {
    setError(error)
    setErrorModel(true)
  }

  const Success = e => {
    e.preventDefault();
    const res = Acount.Registeration(values, handleErrors)
    res.then(value => {
      setSuccess(value.data.message)
      console.log('Sign Up res', value)
      if (value.data.success) {
        setSuccesModel(true)
      }
      else {
        setErrorModel(true)
      }

    })
      .catch(error => {
        console.log('error', error)

      })
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid theme_bg p-5">
        <PersonalInfo
          values={values.step}
          prevStep={prevStep}
          nextStep={nextStep}
        />
        <div className="col-sm-9 mt-3 mb-0 mx-auto ">
          <div className="row bg-pric brdr_div">
            <div className="uper-color p-4 mb-4">
              <p className="text-white fs-40 Gothic_3D mb-0 p-4 ms-5">Select Package</p>
            </div>
            <div className="col-sm-4">

              <Price
                Continue={Success}
                Price="Free"
                Amount="0 US$"
                Package="Free trail"
              />
            </div>
            <div className="col-sm-4">
              <Price
                Continue={Continue}

                Price="Paid"
                Amount="50 US$"
                Package="Monthly Package"
              />
            </div>
            <div className="col-sm-4">
              <Price
                Continue={Continue}

                Price="Paid"
                Amount="10 US$"
                Package="24 Hours Package"
              />
            </div>

          </div>
        </div>

        <CustomModal
          title="Succefull"
          isModalVisible={succesModel}
          handleOk={nextStep}
          closable={false}
        >
          <p className='text-white'>{success}</p>
        </CustomModal>
        <CustomModal
          title="Error"
          isModalVisible={errorModel}
          handleOk={prevStep}
          handleCancel={() => setErrorModel(false)}
          closable={true}
        >
          {error}
        </CustomModal>
      </div>
    </div>

  )
}

export default PersonalDetails