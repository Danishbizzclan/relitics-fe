import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { getEventById } from '../../Component/Data/BlogData'
import Navbar from '../../Component/Navbar';
import Foter from '../../Component/Footer';
import Categories from '../../Component/Categories';
import LatestPosts from '../../Component/LatestPosts';
import GetData from '../../Api/GetData';



const BlogDetail = () => {
  const router = useRouter();
  const [event, setEvent] = useState('');
  const [loading, setLoading] = useState(true);

  const eventId = router.query.id
  const date = new Date()
  var options = { month: "short", year: "numeric", day: "numeric" };
  const fullDate = date.toLocaleDateString("en-US", options);

  useEffect(() => {
    setLoading(true)
    const response = GetData.BlogDetail(eventId);
    response.then(value => {
      console.log({ value })
      setEvent(value?.data?.article);
      setLoading(false)
      console.log(value?.data?.article)
      //   setLoading(false);
    })
  }, [eventId]);


  if (loading) {
    return(
    <h1>Loading</h1>
    )
  }

  else if (!loading && !event) {
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
                {/* <a className='text-link pointer-cursor fs-13 Bold'>{event.category}</a> */}
                <h2 className='mb-0 fs-40'>{event.title}</h2>
                <div className='blog-line mt-0 mb-3'></div>
                <p className='fs-13'>Posted on {fullDate} by Admin</p>
                <div className='text-center mb-3'>
                  <img className='m-2 hover' src={"/facebook-rect.svg"} />
                  <img className='m-2 hover' src={"/linkedin-square.svg"} />
                  <img className='m-2 hover' src={"/twitter-square.svg"} />
                  <img className='m-2 hover' src={"/pinterest-square.svg"} />
                  <img className='m-2 hover' src={"/gmail.svg"} />
                  <img className='m-2 hover' src={"/copylink_.png"} />
                </div>
                <img src={event.image} className='w-100 mt-2' />
                <p className='mt-3 fs-17'>{event.data}</p>
                {/* <div className='text-center'>
                  <img className='m-2 hover' src={"/facebook_.png"} />
                  <img className='m-2 hover' src={"/linkedin_.png"} />
                  <img className='m-2 hover' src={"/twitter-square.png"} />
                  <img className='m-2 hover' src={"/pinterest-square.png"} />
                  <img className='m-2 hover' src={"/gmail.png"} />
                  <img className='m-2 hover' src={"/copylink_.png"} />
                </div> */}
              </div>
            </div>
            <div className='col-md-4 mt-5'>
              <div className=' px-3'>
                <p className='fs-40 Gothic_3D my-auto pb-0'>ABOUT</p>
                <div className='blog-line my-3'></div>
                <p className='mt-2 fs-16'>We keep you update with the latest news and information in  the Apple world. Everything you are looking for related to Mac, iMac and iPhone.</p>
                <p className='fs-40 Gothic_3D my-auto'>LATEST POSTS</p>
                <div className='blog-line mt-1 '></div>
                <div className="my-3">
                  <LatestPosts />
                </div>
                <div className="mt-3">
                  <p className='fs-40 Gothic_3D'>Catagories</p>
                  <div className='blog-line my-3 '></div>
                  <Categories />
                </div>
              </div>

              {/* <div className="accordion accordion-flush m-0 p-3" id="accordionFlushExample">
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
              </div> */}
            </div>
          </div>
        </div>
        <Foter />
      </div>
    )
  }
}

export default BlogDetail