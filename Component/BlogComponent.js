import React from 'react'
import Link from 'next/link' 
const BlogCompnnent = ({ data }) => {

    
    return (
        <>
        {console.log(data)}
            <Link href={`/Blog/${data._id}`} >
                <div className="d-flex flex-column h-100 graph_hover">
                    <div className='shadow' style={{ flex: "1 1 auto" }}>
                        <img src={'/Mask Group 138.png'} alt="photo" className='w-100 mt-3' />
                        <div className='p-4'>
                            <b className='my-auto fs-17 Bolder'>{data.title}</b>
                            <div className='blog-line mt-1 mb-3'></div>
                            <p className='fs-16'>{data.metaDescription.length > 50
                                ? data.metaDescription.substring(0, 60) + ' [...]'
                                : data.metaDescription}</p>
                        </div>
                    </div>
                </div>
    
            </Link>
        </>
    )
}

export default BlogCompnnent