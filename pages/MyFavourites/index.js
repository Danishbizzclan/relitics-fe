import React from 'react';
import { useRouter } from "next/router";
import Dashnav from '../../Component/Dashnav';
import RentalGrowthData from '../../Component/Data/RentalGrowthData';
import { getEventByFav } from '../../Component/Data/RentalGrowthData';
import Sidebar from '../../Component/SideNavbar';
import FavCard from '../../Component/FavCard';

function index() {
    const event = getEventByFav();
    console.log({ event })
    if (!event) {
        return <h1 className='text-center mt-5'>No Favourites Found</h1>
    }
    else if (event) {
        return (
            <>
                <div className="d-inline-flex w-100">
                    <Sidebar />

                    <div style={{ width: "inherit" }}>
                        <Dashnav />
                        <div className='container mx-auto mt-3 p-4 Table' >
                            <p className='fs-40 Gothic_3D'>My Favourites</p>
                            <div className='row my-4 g-4'>
                                {event.map(fav => {
                                    return (
                                        < FavCard
                                            city={fav.Region} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </>)
    }
}
export default index;
