import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

const FinishModal = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <button className='btn button-color px-4 text-center' type="primary" onClick={showModal}>
                Finish and pay
            </button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className='p-5'>
                    <p className='text-white text-center fs-21'>
                        Your Purchase has been completed Enjoy your membership
                    </p>
                    <div class="d-grid gap-2">
                        <button class="btn button-color px-4 text-center" type="button">View Dashboard</button>
                    </div>

                </div>
            </Modal>
        </>
    );
};
export default FinishModal