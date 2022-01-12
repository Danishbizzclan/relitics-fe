import React from 'react'
import Link from "next/link"
import classes from "./Navbar.module.css"


function Navbar() {
  return (
    <div className={classes.navcolor}>
      <div className="container ">
        <div className="row ms-0 ">
          <div className="col-12 ms-0 p-0 m-0">


            <nav className="navbar navbar-expand-lg p-0 navbar-light ">
              <div className="container-fluid p-0">
                  <Link href="/">
                <a href="/"><img className='w-100 ' src={"/Group 244.png"} alt="reilitics"/></a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto  mb-lg-0">
                    <Link href="/" className="nav-item">
                        
                      <a className="nav-link navbar-text nav-set fs-15 text-white" aria-current="page" ><p className="my-5">Home</p></a>
                    </Link>
                    <Link href="/BecomeProfessional" className="nav-item">
                      <a className="nav-link navbar-text fs-15 nav-set text-white" aria-current="page" ><p className="my-5">Pricing</p></a>
                    </Link>
                    <Link href="/About" className="nav-item">
                      <a className="nav-link  navbar-text fs-15 nav-set my-0 text-white" aria-current="page" ><p className="my-5 ">About</p></a>
                    </Link>
                  
                    <Link href="/Blog" className="nav-item">
                      <a className="nav-link navbar-text fs-15 nav-set text-white" aria-current="page" ><p className=" my-5">Articles</p></a>
                    </Link>
                    <Link href="/Contact" className="nav-item">
                      <a className="nav-link navbar-text fs-15 nav-set nav-right text-white" aria-current="page" ><p className="my-5">Contact</p></a>
                    </Link>
                    <Link href="/Login">
                    <button type="button" class={`${classes.login} my-auto btn-primary py-0 btn ms-3`}>Log in</button></Link>
                    <Link href="/SignUp">
                    <button type="button" className={`${classes.sign} py-0 btn-primary my-auto btn ms-2`}>Sign up</button></Link>


                  </ul>
                  <img className="p-2 rounded-pill" src="Path 188.png" alt="" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar