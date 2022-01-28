import React from 'react';
import BooksComponent from '../../Component/BooksComponent';
import PodcastsComponent from '../../Component/PodcastsComponent';
import Dashnav from '../../Component/Dashnav';
import Sidebar from '../../Component/SideNavbar';
import BooksData from '../../Component/Data/BooksData'
import PodcastsData from '../../Component/Data/PodcastsData';

function index() {
    return <>
        <div className="d-inline-flex w-100">
            <Sidebar />
            <div style={{ width: "inherit" }}>
                <Dashnav />
                <div className='container mx-auto mt-3 Table' >
                    <p className='fs-40 Gothic_3D'>Resources</p>
                    <div className='bg-dash brdr p-4'>
                        <p className='fs-20'>Resources</p>
                        <div className='row my-4 g-4'>
                            {BooksData.map(books => {
                                return (
                                    <BooksComponent
                                        Imgsrc={books.imgSrc}
                                        title={books.title}
                                        authur={books.authur}
                                        cost={books.cost}

                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className='bg-dash brdr p-4'>
                        <p className='fs-20'>Resources</p>
                        <div className='row my-4 g-4'>
                            {PodcastsData.map(podcasts => {
                                return (
                                    <PodcastsComponent
                                        Imgsrc={podcasts.imgSrc}
                                        title={podcasts.title}
                                        showBy={podcasts.showBy}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default index;
