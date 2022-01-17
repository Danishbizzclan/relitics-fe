import React from 'react'
import { useRouter } from "next/router";
import Navbar from '../../Component/Navbar';
import { getEventByCategory } from '../../Component/Data/BlogData'
import Pagination from '../../Component/BlogPagination';
import LatestPosts from '../../Component/LatestPosts';

function CategorisedBlogDetail() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    // const options = { month: "short", year: "numeric", day: "numeric" }
    // fullDate = date.toLocaleDateString(("en-US", options))
    const router = useRouter();
    // const eventCategory = router.query.id;
    console.log(router)

    const eventCategory = router.query.slug ? router.query.slug[0] : '';
    const event = getEventByCategory(eventCategory);
    console.log({ event })
    if (eventCategory && !event) {
        return <h1 className='text-center mt-5'>No Blog Found</h1>
    }
    else if (eventCategory && event) {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-8'>
                            <div className='row mt-5'>
                                <p className='fs-40 Gothic_3D text-center'>CATEGORY ARCHIVES: {eventCategory} </p>
                                <Pagination data={event} class='col-sm-6' perpage='6' />
                            </div>

                        </div>


                        <div className='col-md-4'>
                            <div className=' p-3 mt-4'>
                                <p className='fs-40 Gothic_3D my-auto pb-0'>ABOUT</p>
                                <div className='blog-line'></div>
                                <p className='mt-2 fs-16'>We keep you update with the latest news and information in  the Apple world. Everything you are looking for related to Mac, iMac and iPhone.</p>
                                <p className='fs-40 Gothic_3D my-auto'>LATEST POSTS</p>
                                <div className='blog-line mt-1 '></div>
                                <div className="mt-3">
                                    <LatestPosts />
                                </div>
                                <p className='fs-40 Gothic_3D'>Catagories</p>
                                <div className='blog-line mt-2 '></div>
                            </div>

                            <div className="accordion accordion-flush m-0 p-3" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            How to <span className='sec-color ms-2'>(73)</span>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            How to <span className='sec-color ms-2'>(73)</span>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How to <span className='sec-color ms-2'>(73)</span>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <p>Loading</p>
        </div>
    )
}


export default CategorisedBlogDetail
