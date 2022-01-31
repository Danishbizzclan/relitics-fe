
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import OtpInput from 'react-otp-input';

import { Modal, Button } from 'antd';
import Otp from './Otp';

const LoginModal = (props) => {
  console.log(props)
  const [otp, setOtp] = useState('')


  const handleOk = (e) => {
    e.preventDefault();
    props.verifyOtp(otp)
  }

  const handleChange = (e) => {
    console.log(e)
    setOtp(e)
  }


  return (
    <>
      <Modal visible={props.isModalVisible} className='modal-bg' onOk={handleOk} footer={false} onCancel={props.handleCancel} closable={props.closable}>
        <div className='otpcenter'>
          <p className='fs-40 text-white text-center'>Reset Password</p>
          <p className='text-white fs-13 text-center my-5'>We've sent you a verifcation code on your registerd email. Please check your email and enter the code to reset your password</p>
          <form onSubmit={handleOk}>
            <OtpInput
              value={otp}
              className='otp-size'
              onChange={handleChange}
              numInputs={6}
            />
            <div className='text-center mt-5'>
              <button className='btn btn-warning px-5 btnYelow mx-auto py-3' type='submit'>Verify</button>
            </div>
          </form>
        </div>



      </Modal>
    </>
  );
};
export default LoginModal