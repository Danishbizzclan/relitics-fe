import React from 'react';

export default function DownloadsComponent(props) {
    return <div className='brdr-2 bg-white col-lg-2 col-md-4 col-6 hover text-center'>
        <div className='d-inline-flex'>
            <img src={props.Imgsrc} />
            <img src='./Download_Icon.svg' className='mb-auto ms-3' />
        </div>
        <div className='p-2'>
            <p className='mb-0 fs-13'>{props.fileName}</p>
        </div>
    </div>;
}

