import React from 'react';

function FavCard(props) {
    return (<>
        <div className='col-lg-3 col-md-4 col-6'>
            <div className='bg-dash brdr p-4 hover'>
                <div className='d-flex'>
                    <img src='./filledHeart.svg' className='ms-auto icon-w' />
                </div>
                <div className='text-center my-3'>
                    <img src='./bx-stats.svg' className='my-2' />
                    <p className='fs-18'>{props.city}</p>
                </div>
            </div>
        </div>
    </>);
}

export default FavCard;
