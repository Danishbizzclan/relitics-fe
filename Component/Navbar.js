import React, { activeClassName } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import classes from "./Navbar.module.css"
import { colors } from '@material-ui/core';


function Navbar() {
  const router = useRouter();
  return (
    <div className={classes.navcolor}>
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
                    <Link href="/BecomeProfessional" ><div className={`nav-link nav-set navbar-text text-white fs-15 ${classes.NavBtnPadding} ${router.pathname == "/BecomeProfessional" ? "active" : null}`}>
                      Pricing</div></Link>
                    <Link href="/About" ><div className={`nav-link nav-set navbar-text text-white fs-15 ${classes.NavBtnPadding} ${router.pathname == "/About" ? "active" : null}`}>
                      About</div></Link>
                    <Link href="/Blog" ><div className={`nav-link nav-set navbar-text text-white fs-15 ${classes.NavBtnPadding} ${router.pathname == "/Blog" ? "active" : null}`}>
                      Articles</div></Link>
                    <Link href="/Contact" ><div className={`nav-link nav-set navbar-text text-white fs-15 ${classes.NavBtnPadding} ${router.pathname == "/Contact" ? "active" : null}`}>
                      Contact</div></Link>
                    <Link href="/Login">
                      <button type="button" class={`${classes.login} py-0 mx-0 btn-primary btn ms-3`}>Log in</button></Link>
                    <Link href="/SignUp">
                      <button type="button" className={`${classes.sign} py-0 mx-0 btn-primary btn ms-3`}>Sign up</button></Link>
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

export default Navbar