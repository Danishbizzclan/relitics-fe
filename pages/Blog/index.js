import React, { useEffect, useState } from 'react'
import GetData from '../../Api/GetData'
import BlogCompnnent from '../../Component/BlogComponent'
import Pagination from '../../Component/BlogPagination'
import blogData from '../../Component/Data/BlogData'
import Navbar from '../../Component/Navbar'
import HeadImage from '../../styles/UI/HeadImage';
import Foter from '../../Component/Footer'

const Blog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const response = GetData.BlogComponent();
        console.log(response)
        response.then(value => {
          setData(value.data.articles);
          console.log(value.data.articles)
        //   setLoading(false);
        })
      }, [])
    return (
        <>
            <Navbar />
            <HeadImage header='ARTICLES' />
            <div className='container'>
                <div className='row my-3 gx-4 gy-3'>
                    <Pagination id={data._id} data={data} class='col-sm-4' perpage='9' />
                </div>
            </div>
            <Foter />

        </>
    )
}

export default Blog