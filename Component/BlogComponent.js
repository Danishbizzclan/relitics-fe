import React from 'react'
import Link from 'next/link' 
const BlogCompnnent = ({ data }) => {
    return (
        <>
            <Link href={`/Blog/${data.category}/${data.id}`} >
                <div className="d-flex flex-column h-100 hover">
                    <div className='shadow' style={{ flex: "1 1 auto" }}>
                        <img src={data.image} alt="photo" className='w-100 mt-3' />
                        <div className='p-4'>
                            <b className='my-auto fs-17 Bold'>{data.heading}</b>
                            <div className='blog-line mt-1 mb-3'></div>
                            <p className='fs-16'>{data.description.length > 50
                                ? data.description.substring(0, 60) + ' [...]'
                                : data.description}</p>
                        </div>
                    </div>
                </div>
    
            </Link>
        </>
    )
}

export default BlogCompnnent