import React from 'react'
import { useRouter } from "next/router";
import { getEventById } from '../../Component/Data/BlogData'
import Navbar from '../../Component/Navbar';
import Foter from '../../Component/Footer';
import LatestPosts from '../../Component/LatestPosts';
import { useState } from 'react';



const BlogDetail = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


  const router = useRouter();


  const eventId = router.query.id;
  const event = getEventById(eventId);
  console.log({ event })
  if (eventId && !event) {
    return <h1 className='text-center mt-5'>No Blog Found</h1>
  }
  else if (eventId && event) {
    return (
      <div>
        <Navbar />
        <div className='container mt-2'>

          <div className='row'>
            <div className='col-md-8'>
              <div className='shadow p-5'>
                <a className='text-link pointer-cursor fs-12 Bold'>{event.category}</a>
                <h2 className='mb-0 fs-40'>{event.title}</h2>
                <div className='blog-line mt-0 mb-3'></div>
                <p className='fs-13'>Posted on {date} by Admin</p>
                <div className='text-center mb-3'>
                  <img className='m-2 hover' src={"/facebook_.png"} />
                  <img className='m-2 hover' src={"/linkedin_.png"} />
                  <img className='m-2 hover' src={"/twitter-square.png"} />
                  <img className='m-2 hover' src={"/pinterest-square.png"} />
                  <img className='m-2 hover' src={"/gmail.png"} />
                  <img className='m-2 hover' src={"/copylink_.png"} />
                </div>
                <img src={event.image} className='w-100 mt-2' />
                <p className='mt-3'>{event.data}</p>
                <div className='text-center'>
                  <img className='m-2 hover' src={"/facebook_.png"} />
                  <img className='m-2 hover' src={"/linkedin_.png"} />
                  <img className='m-2 hover' src={"/twitter-square.png"} />
                  <img className='m-2 hover' src={"/pinterest-square.png"} />
                  <img className='m-2 hover' src={"/gmail.png"} />
                  <img className='m-2 hover' src={"/copylink_.png"} />
                </div>
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
        <Foter />
      </div>
    )
  }
  return (
    <div>
      <p>Loading</p>
    </div>
  )
}

export default BlogDetail