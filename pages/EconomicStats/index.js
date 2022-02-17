import React from 'react';
import Sidebar from '../../Component/SideNavbar';
import Dashnav from '../../Component/Dashnav';
import SecondNavbar from '../../Component/secondNavbar';
import Economic from '../../Component/Economic';


export default function EconomicStats() {
    return <div>
        <div className="d-inline-flex w-100">
            <Sidebar />
            <div style={{ width: "inherit" }}>
                <Dashnav />
                <SecondNavbar />
                <div className='container mx-auto p-4'>
                    <Economic />
                </div>
            </div>
        </div>
    </div>;
}
