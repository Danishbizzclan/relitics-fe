import Link from "next/link"
import GetData from '../Api/GetData';
import React, { useEffect, useState } from 'react'


export default function NotesComponent() {
    const [visible, setVisible] = useState(1);
    const [article, setArticle] = useState([]);
    const loadMore = () => {
        setVisible(old => old + 1)
    }
    const loadLess = () => {
        setVisible(old => old - 1)
    }

    useEffect(() => {
        const response = GetData.AllNotes();
        console.log(response)
        response.then(value => {
          setArticle(value.data.articles);
          console.log(value.data.articles)
        //   setLoading(false);
        })
      }, [])
    return (
        <>
          {article.slice(0, visible).map((x) =>
            <div className='col-lg-3 col-md-4 col-6'>
                <div className='bg-dash brdr d-flex flex-column h-100 overflow-hidden'>
                    <div className='d-inline-flex w-100 mt-2 p-3' style={{ flex: "1 1 auto" }}>
                        <p className='fs-18 Bold greyBlack w-75'>{x.title}</p>
                        <img src='./deleteIcon.svg' className='mb-auto ms-auto' />
                    </div>
                    <p className='fs-16 p-3'>{
                        x.detail?.length > 25
                            ? x.detail.substring(0, 60) + '.....'
                            : x.detail
                    }</p>
                    <div className='d-inline-flex bg-lightBlue bottom_radius w-100'>
                        <button className='btn btn-lg py-3 w-50'>
                            <Link href={`/ShowNotes/${x._id}`} className='pointer-cursor'><img src='./eyeIcon.svg' /></Link>
                        </button>
                        <button className='btn btn-lg py-3 w-50'>
                            <Link href={`/EditNotes/${x._id}`} className='pointer-cursor'><img src='./edit_Icon.svg' /></Link>
                        </button>
                    </div>
                </div>
            </div>
            
             )}
             <div className="text-center mt-5">
                      
               {article.length > 1 && (
                                visible < article.length ? (
                                        <button className="bg_theme brdr text-white no_brdr" onClick={loadMore} style={{ cursor: "pointer" }}>
                                            load More
                                        </button>
                                ) : (
                                        <button className="bg_theme brdr text-white no_brdr" onClick={loadLess} style={{ cursor: "pointer" }}>
                                            Show Less
                                        </button>
                                )
                            )}
                      
                      </div>
        </>
    )
}
