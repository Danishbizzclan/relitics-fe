import React from 'react'
import Navbar from '../Component/Navbar';
import Foter from '../Component/Footer';
import LatestPosts from '../Component/LatestPosts';
import Pagination from '../Component/BlogPagination';
import blogData from '../Component/Data/BlogData';



const BlogDetail = () => {





    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <div className='row'>
                    
                        <Pagination data={blogData} />
                        </div>
                        
                    </div>


                    <div className='col-md-4'>
                        <div className=' p-3'>
                            <p className='font-bold my-auto'>ABOUT</p>
                            <div className='blog-line mt-1 '></div>
                            <p className='mt-2'>We keep you update with the latest news and information in  the Apple world. Everything you are looking for related to Mac, iMac and iPhone.</p>
                            <p className='font-bold my-auto'>LATEST POSTS</p>
                            <div className='blog-line mt-1 '></div>
                            <div className="mt-3">
                                <LatestPosts />
                            </div>
                            <h3>Catagories</h3>
                            <div className='blog-line mt-2 '></div>



                        </div>

                        <div class="accordion accordion-flush m-0 p-3" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        How to <span className='sec-color ms-2'>(73)</span>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        How to <span className='sec-color ms-2'>(73)</span>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        How to <span className='sec-color ms-2'>(73)</span>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail