import React from 'react';
import ReactDOM from 'react-dom';
import Dashnav from '../../Component/Dashnav';
import RentalGrowthData from '../RentalGrowth'
import Sidebar from '../../Component/SideNavbar';
import FavCard from '../../Component/FavCard';

function index() {
    return (
        <>
            <div className="d-inline-flex w-100">
                <Sidebar />

                <div style={{ width: "inherit" }}>
                    <Dashnav />
                    {/* <div className='container'> */}
                    <div className='container ms-3 mt-3 Table' >
                        <p className='fs-40 Gothic_3D'>My Favourites</p>
                        <div className='row my-4 g-3'>
                            <div className='col-lg-3 col-md-4 col-6'>
                                {/* {RentalGrowthData.map(value => {
                                    return ( */}
                                        <FavCard />
                                    {/* )
                                })} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
export default index;
