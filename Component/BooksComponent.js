import React from 'react';

export default function BooksComponent(props) {
  return <div className='brdr-2 bg-white col-lg-2 col-md-4 col-6 hover'>
    <img src={props.Imgsrc} />
    <div className='p-2'>
      <p className='mb-0 fs-13'>{props.title}</p>
      <p className='mb-0 fs-13'>{props.authur}</p>
      <p className='mb-0 fs-15 Bold'>{props.cost}</p>
      <div className='p-2'>
        <button className='btn btn-Yelow brdr w-100'>View on Amazon</button>
      </div>
    </div>
  </div>;
}

