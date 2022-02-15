import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

const CustomModal = (props) => {
  return (
    <>
        <Modal visible={props.isModalVisible} className='modal-bg' onOk={props.handleOk} footer={false} onCancel={() => props.setErrorModal(false)} closable={props.closable}>

          {props.children}

        </Modal>
    </>
  );
};
export default CustomModal