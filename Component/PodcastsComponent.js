import React from 'react';

export default function PodcastsComponent(props) {
  return <div className='brdr-2 col-lg-2 col-md-3 col-6'>
    <img src={props.Imgsrc} />
    <div className='p-2'>
      <p className='mb-0 fs-14 Bold'>{props.title}</p>
      <p className='mb-0 txt-yellow'>{props.showBy}</p>
    </div>
  </div>;
}

