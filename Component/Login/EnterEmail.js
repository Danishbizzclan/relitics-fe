import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import Otp from './Otp';

const LoginModal = (props) => {
    const [email, setEmail]= useState('')
 
const handleOk =(e)=>{
    e.preventDefault();
    props.resetPasword(email)
}

const handleChange =(e)=>{
    setEmail(e.target.value)
}
 

  return (
    <>
      <Modal visible={props.isModalVisible} onOk={handleOk} onCancel={()=>props.setResetModel(false)}>
       <p className='fs-25'>Enter your Email to get verifcation code</p>
       <form onSubmit={handleOk} >
       <input type="email" class="form-control" value={email} onChange={handleChange}/>
       <div className='text-center mt-3'>
       <button className='btn p-3 fs-22 btn-info' type='submit'>Send</button>
       </div>
       </form>


      </Modal>
    </>
  );
};
export default LoginModal