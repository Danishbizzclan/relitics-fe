import React from 'react';

export default function BooksComponent(props) {
  return <div className='brdr-2 bg-white col-lg-2 col-md-4 col-6 hover d-flex flex-column h-100'>
    <div style={{ flex: "1 1 auto" }}>
      <div className='text-center overflow-hidden'>
        <img src={props.Imgsrc} />
      </div>
      <div className='p-2'>
        <p className='mb-0 fs-13'>{props.title}</p>
        <p className='mb-0 fs-13'>{props.authur}</p>
        <p className='mb-0 fs-15 Bold'>{props.cost}</p>
        <div className='p-2'>
          <button className='btn btn-Yelow brdr w-100'>View on Amazon</button>
        </div>
      </div>
    </div>
  </div>;
}

