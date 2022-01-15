import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

const  CustomModal = (props) => {
  return (
    <>
      <Modal title={props.title} visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel} closable={props.closable}>
        {props.children}
      </Modal>
    </>
  );
};
export default CustomModal