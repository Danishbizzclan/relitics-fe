import React from 'react'
import BlogCompnnent from '../../Component/BlogComponent'
import Pagination from '../../Component/BlogPagination'
import blogData from '../../Component/Data/BlogData'
import Navbar from '../../Component/Navbar'
import HeadImage from '../../styles/UI/HeadImage';
import Foter from '../../Component/Footer'

const Blog = () => {
    return (
        <>
            <Navbar />
            <HeadImage header='ARTICLES' />
            <div className='container'>
                <div className='row my-3 gx-4 gy-3'>
                    <Pagination data={blogData} class='col-sm-4' perpage='9' />
                </div>
            </div>
            <Foter />

        </>
    )
}

export default Blog