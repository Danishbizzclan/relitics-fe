
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import OtpInput from 'react-otp-input';

import { Modal, Button } from 'antd';
import Otp from './Otp';

const NewPassword = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

 
const handleOk =(e)=>{
    e.preventDefault();
    props.resetPasword(otp)
}

const handleChange =(e)=>{
    console.log(e)
    setOtp(e)
}
 

  return (
    <>
      <Modal visible={isModalVisible} className='modal-bg' onOk={handleOk} footer={false} onCancel={()=>props.isModalVisible(false)}>
          
      <p className='text-white fs-21'>Enter New Password</p>
      <input  class="form-control w-100"  />
      <p className='text-white fs-21 mt-3'>Confirm New Password</p>
      <input  class="form-control w-100"  />
      <div class="d-grid gap-2">
  <button class="btn btn-primary mt-5 py-4" type="button">Verify</button>



      </div>
      


      </Modal>
    </>
  );
};
export default NewPassword