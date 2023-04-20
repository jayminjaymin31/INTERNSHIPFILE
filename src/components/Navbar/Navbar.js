import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    var style = {
        width: " 3rem; height: 3rem"
    }
    var style1 = {
        background: "rgba(29, 29, 39, 0.7)"
    }
    var style2 = {
        max: "width: 600px"
    }
    var style3 = {
        height: "250px"
    }
    var style4 = {
        height: "48px"
    }
    var style5 = {
        height: "250px"
    }
    var style6 = {
        width: "50px; height: 50px"
    }
    var style7 = {
        width: "50px; height: 50px"
    }
    var style8 = {
        width: "50px; height: 50px"
    }
    var style9 = {
        width: "50px; height: 50px"
    }
    var style10 = {
        width: "75px"
    }
    var style11 ={ 
        width: "75px"
    }
    var style12 = {
        width: "75px"
    }
    var style13 = {
        height: "48px"
    }

    return (
        <div class="container-xxl bg-white p-0">
            <Helmet>
    <link href="img/favicon.ico" rel="icon"/>

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/> 

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>
    <link href="lib/animate/animate.min.css" rel="stylesheet"/>
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet"/>

    <link href="css/bootstrap.min.css" rel="stylesheet"/>

    <link href="css/style.css" rel="stylesheet"/>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

    <script src="js/main.js"></script>
            </Helmet>
            <div class="container-xxl position-relative p-0">
            {/* <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="m-0"><i class="fa fa-search me-2"></i>Bug<span class="fs-5">Master</span></h1>
                  
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <Link to="/home" class="nav-item nav-link active">Home</Link>
                        <Link to="/aboutus" class="nav-item nav-link">About</Link>
                        <Link to="/service" class="nav-item nav-link ">Service</Link>
                        <Link to="/" class="nav-item nav-link">Project</Link>
                        <Link to="/contact" class="nav-item nav-link">Contact</Link>
                        <Link to="/login" class="nav-item nav-link">Login</Link>
                    </div>
                    <butaton type="button" class="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
                    <Link to="/singup" class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Sing_Up</Link>
                </div>
            </nav> */}
{/*  */}
            {/* <div class="container-xxl py-5 bg-primary hero-header mb-5">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="text-white mb-4 animated zoomIn">All in one Bug tool need to impove your project</h1>
                            <p class="text-white pb-3 animated zoomIn">By providing this information, you can help others to understand the bug and work towards resolving it. It's also important to communicate with others involved in the project, such as developers, testers, or project managers, to ensure that everyone is aware of the issue and working towards a solution.</p>
                            <a href="" class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Free Quote</a>
                            <a href="" class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                        </div>
                        <div class="col-lg-6 text-center text-lg-start">
                            <img class="img-fluid" src="img/hero.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div> */} 




           <div class="container-xxl position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm">
                <a href="" class="navbar-brand p-0">
                    <h1 class="m-0"><i class="fa fa-search me-2"></i>BUG<span class="fs-5">Master</span></h1>
              
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                    <Link to="/" class="nav-item nav-link active">Home</Link>
                        <Link to="/aboutus" class="nav-item nav-link">About</Link>
                        <Link to="/service" class="nav-item nav-link ">Service</Link>
                        {/* <Link to="/project" class="nav-item nav-link">Project</Link> */}
                        <Link to="/contact" class="nav-item nav-link">Contact</Link>
                        
                        <Link to="/login" class="nav-item nav-link">Login</Link>
                    </div>
                    <butaton type="button" class="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
                    <Link to="/singup" class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Sign_up</Link>
                </div>
            </nav>
            </div>

            </div>
        
        </div>
    )
}

 
        