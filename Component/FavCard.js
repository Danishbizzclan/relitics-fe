import React from 'react';

function FavCard(props) {
    return (<>
            <div className='bg-dash brdr p-4'>
            <div className='d-flex'>
                <img src='./filledHeart.svg' className='ms-auto icon-w' />
            </div>
            <div className='text-center my-5'>
                <img src='./bx-stats.svg' className='my-2' />
                        <p className=''>{props.city}</p>
            </div>
        </div>
    </>);
}

export default FavCard;
