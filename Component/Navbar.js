import React, { useEffect, useState, activeClassName } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import classes from "./Navbar.module.css"
import { colors } from '@material-ui/core';


function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState('')
  useEffect(() => {

    if (typeof window !== 'undefined') {

      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [typeof window])
  return (
    <div className={classes.navcolor}>
      {console.log('sahfsegf', user)}
      <div className="container ">
        <div className="row ms-0 ">
          <div className="col-12 ms-0 p-0 m-0">
            <nav className="navbar navbar-expand-lg p-0 navbar-dark bordr">
              <div className="container-fluid p-0">
                <Link href="/">
                  <a href="/"><img className={classes.ImgSize} src={"/Group 244.png"} alt="reilitics" /></a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto  mb-lg-0">
                    <Link href="/" ><div className={`nav-link nav-set navbar-text text-white fs-15  ${classes.NavBtnPadding} ${router.pathname == "/" ? "active" : null}`}>
                      Home</div>
                    </Link>
                    <Link href="/#Prices" ><div className={`nav-link nav-set navbar-text text-white fs-15 ${classes.NavBtnPadding} ${router.pathname == "/Pricing" ? "active" : null} ${classes.NavBtnPadding}`}>
                      Pricing</div></Link>
                    <Link href="/About" ><div className={`nav-link nav-set navbar-text text-white fs-15 ${classes.NavBtnPadding} ${router.pathname == "/About" ? "active" : null}`}>
                      About us</div></Link>
                    <Link href="/Blog" ><div className={`nav-link nav-set navbar-text text-white fs-15 ${classes.NavBtnPadding} ${router.pathname == "/Blog" ? "active" : null}`}>
                      Articles</div></Link>
                    <Link href="/Contact" ><div className={`nav-link nav-set navbar-text text-white fs-15 ${classes.NavBtnPadding} ${router.pathname == "/Contact" ? "active" : null}`}>
                      Contact</div></Link>
                    {
                      user ?
                        (<>
                          <Link href="/Notifications">
                            <img src={'/NotificationNav.svg'} className={`mx-3 text-lg-start noti-w ${classes.notiBtn}`} style={{ objectFit: 'contain' }} /></Link>
                          <Link href="/Dashboard">
                            <div className={`d-flex rounded-pill name-bg my-sm-2 my-md-auto ${classes.profileBtn}`}>
                              <img src={user?.image} className='rounded_img' style={{ width: '4.6rem' , height: '4.6rem' }} />
                              <p className="text-white my-auto px-sm-0 px-md-4 fs-15">{user?.username}</p>
                            </div>
                          </Link>
                        </>)
                        :
                        <>
                          <Link href="/Login">
                            <button type="button" className={`${classes.login} py-0 mx-0 btn-primary btn ms-3`}>Log in</button></Link>
                          <Link href="/SignUp">
                            <button type="button" className={`${classes.sign} py-0 mx-0 btn ms-3 hover`}>Sign up</button></Link>
                        </>
                    }
                  </ul>
                  {/* <img className="p-2 rounded-pill" src="Path 188.png" alt="" /> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Navbar