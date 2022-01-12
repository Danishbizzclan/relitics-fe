import React from 'react'
import BlogCompnnent from '../../Component/BlogComponent'
import Pagination from '../../Component/BlogPagination'
import blogData from '../../Component/Data/BlogData'
import Navbar from '../../Component/Navbar'
import Foter from '../../Component/Footer'

const Blog = () => {
    return (
        <>
        <Navbar />
        <div className="container-fluid privacy">



<div className="container">
    <h2 className="text-white h2-bold py-5 ">Blog</h2>
</div>
</div>
                <div className='container'>
                    <div className='row mt-3'>
                        
                    <Pagination data={blogData} /></div>
                    

                </div>
                <Foter />
            
        </>
    )
}

export default Blog