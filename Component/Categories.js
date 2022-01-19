import React from 'react'
import Link from "next/link"
import blogData from './Data/BlogData'

function Categories() {
    return (
        <div>
            {blogData.slice(0, 4).map((x) => {
                return (
                    <>
                        <Link href={`/BlogCategory/${x.category}`}>
                            <p className='Gothic_3D Bold'>{x.category}</p>
                        </Link>
                    </>
                )
            })}
        </div>
    )
}

export default Categories
