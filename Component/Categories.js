import React from 'react'
import Link from "next/link"
import blogData from './Data/BlogData'

function Categories() {
    
    const uniqueCategories = [...new Set( blogData.map(obj => obj.category)) ];
    return (
        <div>
            {uniqueCategories.map((x) => {
                return (
                    <>
                        <Link href={`/BlogCategory/${x}`}>
                            <p className='Gothic_3D Bolder fs-17 pointer-cursor'>{x}</p>
                        </Link>
                    </>
                )
            })}
        </div>
    )
}

export default Categories
