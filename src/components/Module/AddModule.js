import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { Footer } from '../DashBoard/Footer';
import { useNavigate } from 'react-router-dom';

export const AddModule = () => {
    var style = {
        width: "90px"
    }
    var style1 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeInUp;"
    }
    var style2 = {
        visibility: "visible; animation-delay: 0.5s; animation-name: zoomIn;"
    }

    var style3 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeInUp;"
    }

    var style4 = {
        height: "250px"
    }

    var style5 = {
        height: "250px"
    }

    var style6 = {
        height: "48px"
    }

    var style7 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeIn"
    }
    var style8 = {
        visibility: "visible; animation-delay: 0.3s; animation-name: fadeInUp"
    }
    const { register, handleSubmit } = useForm();
    const [pros, setpros] = useState()
    const [status, setstatus] = useState()
    var navigate = useNavigate()

    const Submit = (data) => {
        console.log(data);

        axios.post("http://localhost:5000/module/module", data).then((res) => {
            if (res.status === 201) {
                navigate("/admindashboard")
                toast.success('🦄 Sing-Up successfully', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    
                });
            } else {
                alert("User Creation filed")
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProjects = () => {

        axios.get("http://localhost:5000/project/project").then((res) => {
            //console.log(res.data.data)
            setpros(res.data.project)
        }).catch((err) => {

        })

    }
    const getStatus=  ()=>{
        axios.get("http://localhost:5000/status/status").then((res) => {
            //console.log(res.data.data)
            setstatus(res.data.data)
        }).catch((err) => {

        })

    }
    useEffect(() => {
        getProjects();
        getStatus();
       
    }, [])
    return (
        <div class="container-xxl bg-white p-0">
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div class="container-xxl position-relative p-0">
                {/* <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" class="navbar-brand p-0">
                        <h1 class="m-0"><i class="fa fa-search me-2"></i>SEO<span class="fs-5">Master</span></h1>

                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a href="index.html" class="nav-item nav-link">Home</a>
                            <a href="about.html" class="nav-item nav-link active">About</a>
                            <a href="service.html" class="nav-item nav-link">Service</a>
                            <a href="project.html" class="nav-item nav-link">Project</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0">
                                    <a href="team.html" class="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                    <a href="404.html" class="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" class="nav-item nav-link">Contact</a>
                        </div>
                        <butaton type="button" class="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
                        <a href="https://htmlcodex.com/startup-company-website-template" class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Pro Version</a>
                    </div>
                </nav> */}

                <div class="container-xxl py-5 bg-primary hero-header mb-5">
                    <div class="container my-5 py-5 px-lg-5">
                        <div class="row g-5 py-5">
                            <div class="col-12 text-center">
                                <h1 class="text-white animated zoomIn">Add Module</h1>
                                <hr class="bg-white mx-auto mt-0" style={style} />
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                        <li class="breadcrumb-item text-white active" aria-current="page">Add Module</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-xxl py-5">
                <div class="container px-lg-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s" style={style1}>
                                <h6 class="position-relative d-inline text-primary ps-4">Adventure starts here 🚀</h6>
                                <h2 class="mt-2">Make your app management easy and fun!</h2>
                            </div>
                            <div class="wow fadeInUp" data-wow-delay="0.3s" style={style8}>
                                <form onSubmit={handleSubmit(Submit)}>
                                    <div class="row g-3">
                                        {/* <div class="col-md-12">
                                            <div class="form-floating">
                                                <input type="projects" class="form-control" id="projects" placeholder="Your projects"  {...register("projects")} />
                                                <label for="projects">projects</label>
                                            </div>
                                        </div> */}
                                        <div class="col-md-12">
                                            <div class="form-floating">
                                             
                                                <select name="role" {...register("projects")} className="form-control">
                                                    {pros?.map((projects) => (
                                                        <option key={projects._id} value={projects._id}>
                                                            {projects.title}
                                                        </option>
                                                    ))}
                                                   
                                                </select>

                                               
                   
                                                <label for="role">Your project title</label>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-floating">
                                                <input type="moduleName" class="form-control" id="moduleName" placeholder="Your moduleName"  {...register("moduleName")} />
                                                <label for="moduleName">Your moduleName</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="description" class="form-control" id="description" placeholder="Your description" {...register("description")} />
                                                <label for="description">description</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="estimatedHours" class="form-control" id="estimatedHours" placeholder="Your estimatedHours" {...register("estimatedHours")} />
                                                <label for="estimatedHours">estimatedHours</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                            <select name="status" {...register("status")} className="form-control">
                                                    {status?.map((status) => (
                                                        <option key={status._id} value={status._id}>
                                                            {status.statusName}
                                                        </option>
                                                    ))}
                                                   
                                                </select>
                                                {/* <input type="status" class="form-control" id="status" placeholder="Your status" {...register("status")} /> */}
                                                <label for="status">status</label>
                                            </div>
                                        </div>
                                   
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <Footer />
        </div>
    )
}
