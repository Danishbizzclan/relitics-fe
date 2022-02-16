
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import OtpInput from 'react-otp-input';
import Acount from '../../Api/Acount';

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
          {console.log('PropsOTPP',props.OtpError)}
          <p className='fs-40 text-white text-center'>Reset Password</p>
          <p className='text-white fs-13 text-center my-5'>We've sent you a verifcation code on your registerd email. Please check your email and enter the code to reset your password</p>
          <form onSubmit={handleOk}>
            <OtpInput
              value={otp}
              className='otp-size'
              onChange={handleChange}
              numInputs={6}
            />
            <p className='text-danger'>{props.OtpError}</p>
            <div className='text-center mt-5'>
              <button className='btn btn-warning px-5 btnYelow mx-auto py-3' type='submit'>Verify</button>
              <button onClick={props.Resend} className='btn btn-warning px-5 ms-3 btnYelow mx-auto py-3' type='button'>Resend otp</button>

            </div>
          </form>
        </div>



      </Modal>
    </>
  );
};
export default LoginModal