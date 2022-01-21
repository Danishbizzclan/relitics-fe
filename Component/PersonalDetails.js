import React, { useEffect, useState } from 'react'

import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import Price from './Price'
import Navbar from "../Component/Navbar"
import PersonalInfo from './PersonalInfo';
import Acount from '../Api/Acount'
import FreeModal from './FreeModal';
import Link from "next/link"

import CustomModal from './Modal';
import GetData from "../Api/GetData";
import { Spin } from 'antd';
import { each } from 'jquery';


const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
      localStorage.setItem('user', JSON.stringify(value.data.user))
      localStorage.setItem('token', JSON.stringify(value.data.token))

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

  useEffect(() => {
    const response = GetData.AllPackeges();
    console.log(response)
    response.then(value => {
      setData(value.data.packages);
      console.log(value.data.packages)
      setLoading(false);
    })
  }, [])

  return (

    <div>
      <Navbar />

      {loading ? (<Spin />) : (

        <div className="container-fluid theme_bg p-5">
          <div className="py-5">
            <div className='mb-5'>
              <PersonalInfo
                values={values.step}
                prevStep={prevStep}
                nextStep={nextStep}
              />
            </div>
            <div className="container">
              <div className="col-sm-11 mt-3 mx-auto">
                <div className="row bg-pric brdr_div">
                  <div className="uper-color p-4 mb-4">
                    <p className="text-white fs-40 Gothic_3D mb-0 p-4 ms-5">Select Package</p>

                  </div>
                  <div className="row bg-pric p-3 ">

                    {console.log('per', data)}
                    {data.map(x => {
                      return (
                        <div className='col-sm-4'>
                          <Price
                            Continue={x.price === 0 ? Success : Continue}
                            Price={x.name}
                            Amount={x.price}
                            Tags={x.options} />
                        </div>
                      )
                    })}

                  </div>
                </div>

             
               
              </div>
            </div>

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
      )}
    </div>

  )
}

export default PersonalDetails