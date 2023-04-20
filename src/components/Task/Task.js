import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { Footer } from '../DashBoard/Footer';
import { useNavigate } from 'react-router-dom';

export const Task = () => {
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
    const [users, setusers] = useState()
    var navigate = useNavigate()

    const Submit = (data) => {
        console.log(data);

        axios.post("http://localhost:5000/task/task", data).then((res) => {
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
    const getModule = () => {

        axios.get("http://localhost:5000/module/module").then((res) => {

            console.log(res.data.data)
            setusers(res.data.data)
            

        }).catch((err) => {

            console.log(err)
        })


    }

    const [status, setstatus] = useState()

    const getStatus = () => {
        axios.get("http://localhost:5000/status/status").then((res) => {
            //console.log(res.data.data)
            setstatus(res.data.data)
        }).catch((err) => {

        })

    }
    useEffect(() => {
        getProjects();
        getModule();
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


                <div class="container-xxl py-5 bg-primary hero-header mb-5">
                    <div class="container my-5 py-5 px-lg-5">
                        <div class="row g-5 py-5">
                            <div class="col-12 text-center">
                                <h1 class="text-white animated zoomIn">Add Project Team</h1>
                                <hr class="bg-white mx-auto mt-0" style={style} />
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                        <li class="breadcrumb-item text-white active" aria-current="page">Add Project Team</li>
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
                                <h2 class="mt-2">Make your app management easy and fun! </h2>
                                <h6 class="mt-2">Add Project Team</h6>
                            </div>
                            <div class="wow fadeInUp" data-wow-delay="0.3s" style={style8}>
                                <form onSubmit={handleSubmit(Submit)}>
                                    <div class="row g-3">

                                        <div class="col-md-12">
                                            <div class="form-floating">

                                                <select name="role" {...register("projects")} className="form-control">
                                                    {pros?.map((projects) => (
                                                        <option key={projects._id} value={projects._id}>
                                                            {projects.title}
                                                        </option>
                                                    ))}

                                                </select>
                                                <label for="projects">Your project title</label>
                                            </div>
                                        </div>

                                         

                                        <div class="col-md-12">
                                            <div class="form-floating">

                                                <select name="module" {...register("module")} className="form-control">
                                                    {users?.map((module) => (
                                                        <option key={module._id} value={module._id}>
                                                            {module.moduleName}
                                                        </option>
                                                    ))}

                                                </select>



                                                <label for="module">Your Module Name </label>
                                            </div>
                                        </div>


                                        <div class="col-md-12">
                                            <div class="form-floating">
                                                <input type="title" class="form-control" id="title" placeholder="Your title"  {...register("title")} />
                                                <label for="tital">Your title</label>
                                            </div>
                                        </div>  
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="description" class="form-control" id="description" placeholder="Your description" {...register("description")} />
                                                <label for="description"> Your description</label>
                                            </div>
                                        </div>  
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="totalMinutes" class="form-control" id="totalMinutes" placeholder="Your totalMinutes" {...register("totalMinutes")} />
                                                <label for="totalMinutes"> Your totalMinutes</label>
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
