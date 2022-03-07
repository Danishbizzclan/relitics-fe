import React, { useState, useEffect } from 'react'
import Link from 'next/link'


const TableRegionComponent = (props) => {

    const [isFavourite, setIsFavourite] = useState(false)


    useEffect(() => {
        if (props.favourites.some(el => el.regionID === props.record._id)) {
            setIsFavourite(true)
        }
    }, [props.favourites])

    const DeleteFavrt = (id) => {
        setIsFavourite(false)
        props.DeleteFavrt(id)
    }

    const AddFavourite = (id) => {
        setIsFavourite(true)
        props.AddFavourite(id)
    }
    return (
        <>
            <div className='d-flex my-auto'>
                <Link href={`/MarketStats/${props.record._id}`} >
                    <p className='my-auto mx-2'>
                        {props.record.region}
                    </p>
                </Link>
                {isFavourite ?
                    <img src='./filledHeart.svg' onClick={() => DeleteFavrt(props.record._id)} className='ms-auto my-auto' />
                    : <img src='./unfilledHeart.svg' onClick={() => AddFavourite(props.record)} className='ms-auto' />
                }
            </div>
        </>
    );
}

export default TableRegionComponent;
