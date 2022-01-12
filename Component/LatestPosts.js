import React from 'react'
import LatestPost from './Data/LatestPostData';

const LatestPosts = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}`;

    return (
        <div>
            {LatestPost.map(post =>{
                return(
                    <>
                <div className='d-flex '>
                <div className='Latest-color  p-2'>
                    <p className='text-white my-auto'>{date}</p>
                </div>
                <p className='ms-3 my-auto'>{post.title}</p>
                </div>
                <hr/>

                </>
              
                )
            })}
              
        </div>
    )
}

export default LatestPosts