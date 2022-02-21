import React, { useState } from 'react'
import Dashnav from '../../Component/Dashnav';
import { getEventByFav } from '../../Component/Data/RentalGrowthData';
import Sidebar from '../../Component/SideNavbar';
import FavCard from '../../Component/FavCard';

function MyFavourite() {
    const [visible, setVisible] = useState(12);
    const loadMore = () => {
        setVisible(old => old + 4)
    }
    const loadLess = () => {
        setVisible(old => old - 4)
    }
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
                        <div className='container mx-auto mt-3 px-md-5 Table' >
                            <p className='fs-40 Gothic_3D'>My Favourites</p>
                            <div className='row my-4 g-4'>
                                {event.slice(0, visible).map((fav, index) => {
                                    return (
                                        < FavCard key={index}
                                            city={fav.Region} />
                                    )
                                })}
                            </div>
                            <div className="text-center my-3">
                                {event.length > 12 && (
                                    visible < event.length ? (
                                        <button className="bg_theme brdr text-white no_brdr" onClick={loadMore} style={{ cursor: "pointer" }}>
                                            load More
                                        </button>
                                    ) : (
                                        <button className="bg_theme brdr text-white no_brdr" onClick={loadLess} style={{ cursor: "pointer" }}>
                                            Show Less
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>)
    }
}
export default MyFavourite;
 // <div className="text-center my-4">
                                //     <button className="bg_theme brdr text-white no_brdr " onClick={loadMore} style={{ cursor: "pointer" }}>
                                //         load More
                                //     </button>
                                // </div>