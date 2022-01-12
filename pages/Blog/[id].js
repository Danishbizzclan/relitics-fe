import React from 'react'
import { useRouter } from "next/router";
import { getEventById } from '../../Component/Data/BlogData'
import Navbar from '../../Component/Navbar';
import Foter from '../../Component/Footer';
import LatestPosts from '../../Component/LatestPosts';
import { useState } from 'react';



const BlogDetail = () => {
  const [website, setWebsite] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
              <div className='shadow p-3'>
                <small className='sec-color' style={{ fontWeight: "600" }}>{event.cata}</small>
                <h2 className='mb-0'>{event.title}</h2>
                <div className='blog-line mt-1'></div>
                <small>Posted on {date} by Admin</small>
                <div className='text-center'>
                  <img className='m-1' src={"/linkedin.png"} />
                  <img className='m-1' src={"/pinterest-square.png"} />
                  <img className='m-1' src={"/twitter-square.png"} />
                  <img className='m-1' src={"/gmail.png"} />
                  <img className='m-1' src={"/instagram.png"} />

                </div>
                <img src={event.image} className='w-100 mt-2' />
                <p className='mt-3'>{event.data}</p>
                <div className='text-center'>
                  <img className='m-1' src={"/linkedin.png"} />
                  <img className='m-1' src={"/pinterest-square.png"} />
                  <img className='m-1' src={"/twitter-square.png"} />
                  <img className='m-1' src={"/gmail.png"} />
                  <img className='m-1' src={"/instagram.png"} />

                </div>

              </div>
              {/* <div className='ant-modal-body p-3 mt-3'>
                <p className='font-bold my-auto'>Leave a reply</p>
                <p>your email will not be pubished. required fields are marked *</p>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
                  <textarea class="form-control" value={comment} id="exampleFormControlTextarea1"
                  onChange={(e) => setComment(e.target.value)}
                  required rows="3"></textarea>
                </div>
                <div className='d-flex'>
                  <div class="mb-3 m-1">
                    <label for="exampleFormControlInput1" class="form-label">Name*</label>
                    <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} id="exampleFormControlInput1" required />
                  </div>
                  <div class="mb-3 m-1">
                    <label for="exampleFormControlInput1" class="form-label">Email*</label>
                    <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleFormControlInput1" required />
                  </div>
                  <div class="mb-3 m-1">
                    <label for="exampleFormControlInput1" class="form-label">Website</label>
                    <input type="text" class="form-control" value={website} onChange={(e) => setWebsite(e.target.value)} id="exampleFormControlInput1" />
                  </div>
                </div>
                <button className='btn btn-info'>Post Comment</button>
              </div> */}

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