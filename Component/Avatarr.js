import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';

import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 122;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Avatarr extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div className="antbefore">
        {loading ? <LoadingOutlined />
          :
          <div className='d-lg-inline-flex gx-5'>
            <div className='col-sm-6 w-100'>
              <img src={"user.png"} className="img-fluid avatar-radius" alt="..." ></img>
            </div>
            <div className='col-sm-6 w-100 my-auto'>
              <button className='btn UploadBtn px-5 py-2 txt-grey fs-15 text-nowrap'>upload Photo</button>
            </div>
          </div>
        }
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader p-0 m-0"
        required

        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" className="avatar-radius overflow-hidden" style={{ objectFit: "contain" }} /> : uploadButton}

      </Upload>
    );
  }
}

export default Avatarr