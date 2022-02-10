import React, { activeClassName } from 'react'
import { useRouter } from "next/router"
import classes from "../Component/Navbar.module.css"
import Link from "next/link"

function Dashnav() {
  const router = useRouter();
  return (
    <div className={classes.dashNavColor}>
      <div className="container mx-auto">
        <div className="row ms-0">
          <div className="col-12 ms-0 p-0 m-0">
            <nav className="navbar navbar-expand-lg navbar-light p-0 bordr">
              <div className="container-fluid p-0">
                <button className="navbar-toggler py-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto  mb-lg-0">
                    <Link href="/" ><div className={`nav-link fs-15  ${classes.NavBtnPadding + ' ' + classes.navbarText} ${router.pathname == "/" ? "active" : null}`}>
                      Home</div>
                    </Link>
                    <Link href="/Pricing" ><div className={`nav-link fs-15 ${classes.NavBtnPadding + ' ' + classes.navbarText} ${router.pathname == "/BecomeProfessional" ? "active" : null}`}>
                      Pricing</div></Link>
                    <Link href="/About" ><div className={`nav-link  fs-15 ${classes.NavBtnPadding + ' ' + classes.navbarText} ${router.pathname == "/About" ? "active" : null}`}>
                      About us</div></Link>
                    <Link href="/Blog" ><div className={`nav-link fs-15 ${classes.NavBtnPadding + ' ' + classes.navbarText} ${router.pathname == "/Blog" ? "active" : null}`}>
                      Articles</div></Link>
                    <Link href="/Contact" ><div className={`nav-link fs-15 ${classes.NavBtnPadding + ' ' + classes.navbarText} ${router.pathname == "/Contact" ? "active" : null}`}>
                      Contact</div></Link>
                    <Link href="/Notifications">
                      <img src={'/NotificationNav.svg'} className={`mx-3 text-lg-start noti-w ${classes.notiBtn}`} style={{ objectFit: 'contain' }} /></Link>
                    <Link href="/Dashboard">
                      <div className={`d-flex rounded-pill name-bg my-sm-2 my-md-auto ${classes.profileBtn}`}>
                        <img src={'/Mask Group 23.png'} style={{ width: '4.6rem' }} />
                        <p className="text-white my-auto px-sm-0 px-md-4 fs-15">Tabish</p>
                      </div>
                    </Link>
                  </ul>
                  <img className="p-2 rounded-pill" src="Path 188.png" alt="" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div >
    </div >
  )
}
export default Dashnav

    // <>
    //   {/* <div className='dash-nav '>
    //     <div className="container py-4">
    //           <nav className="navbar navbar-expand-lg p-0 navbar-light ">
    //             <div className="container-fluid p-0">
    //               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //               </button>
    //               <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                 <ul className="navbar-nav ms-auto mb-lg-0">
    //                   <Link href="/" className="nav-item">
    //                     <div className={`nav-link navbar-text text-lg-start nav-bor fs-15 p-0 my-auto mx-3 dash-text`} aria-current="page">Home</div>
    //                   </Link>
    //                   <Link href="/BecomeProfessional" className="nav-item">
    //                     <div className={`nav-link navbar-text nav-bor text-lg-start fs-15 p-0 my-auto mx-3 dash-text`} aria-current="page">Pricing</div>
    //                   </Link>
    //                   <Link href="/About" className="nav-item">
    //                     <div className={`nav-link navbar-text nav-bor text-lg-start fs-15 p-0 my-auto mx-3  dash-text ${router.pathname == "/About" ? "active" : null}`} aria-current="page">About</div>
    //                   </Link>
    //                   <Link href="/Blog" className="nav-item">
    //                     <div className={`nav-link navbar-text fs-15 p-0 my-auto text-lg-start mx-3 nav-bor nav-bordash-text dash-text`} aria-current="page">Article</div>
    //                   </Link>
    //                   <Link href="/Contact" className="nav-item">
    //                     <div className={`nav-link navbar-text fs-15 p-0 my-auto mx-3 text-lg-start nav-bor  dash-text`} aria-current="page">contact</div>
    //                   </Link>
    //                   <img src={'/NotificationNav.svg'} className="mx-3 text-lg-start noti-w" style={{ objectFit: 'contain' }} />
    //                   <div className={`d-flex rounded-pill name-bg my-sm-2 my-md-auto`}>
    //                     <img src={'/Mask Group 23.png'} style={{ width: '4.6rem' }} />
    //                     <p className="text-white my-auto px-sm-0 px-md-4 fs-15">Tabish</p>
    //                   </div>
    //                 </ul>
    //               </div>
    //             </div>
    //           </nav>
    //         </div>
    //   </div> */}
    // </>