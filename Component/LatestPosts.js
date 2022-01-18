import React from 'react'
import blogData from './Data/BlogData';

const LatestPosts = () => {

    return (
        <div>
            {blogData.map(posts => {
                const date = new Date(posts.date)
                const month = date.toLocaleDateString("en-US", { month: "short" });
                const day = date.toLocaleDateString("en-US", { day: "numeric" });
                return (
                    <div>
                        <div className='d-flex '>
                            <div className="date">
                                <div>{day}</div>
                                <div>{month}</div>
                            </div>
                            <p className='ms-3 fs-16 my-auto'>{posts.title}</p>
                        </div>
                        <hr />
                    </div>
                )
            })}

        </div>
    )
}

export default LatestPosts