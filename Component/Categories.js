import Link from "next/link"
import blogData from './Data/BlogData'
import GetData from '../Api/GetData'
import React, { useEffect, useState } from 'react'


function Categories() {
    const [data, setData] = useState([]);

    
  useEffect(() => {
    const response = GetData.BlogComponent();
    console.log(response)
    response.then(value => {
        console.log(value)
      setData(value.data.articles);
      console.log(value.data.articles)
   })
  }, [])
    
    // const uniqueCategories = [...new Set( blogData.map(obj => obj.category)) ];
    return (
        <div>
            {data.map((x) => {
                console.log(x)
                return (
                    <>
                       <Link href={`/BlogCategory/${x.name}`}>
                                            <p className='fs-17 catagory'>{x.title}</p>
                                            </Link>
                    </>
                )
            })}
        </div>
    )
}

export default Categories
