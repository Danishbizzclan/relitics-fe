import React from 'react'
import blogData from './Data/BlogData'
import Link from 'next/link' 
const BlogCompnnent = ({ data }) => {
    return (
        <>
            <Link href={`/${data.category}/${data.id}`} >
                <div className="d-flex flex-column h-100">
                    <div className='p-2 shadow' style={{ flex: "1 1 auto" }}>
                        <img src={data.image} alt="photo" className='w-100 mt-3' />
                        <div>
                            <b className='my-auto p-2 text-black'>{data.heading}</b>
                            <div className='blog-line mt-1'></div>
                            <p className='text-black'>{data.description.length > 50
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