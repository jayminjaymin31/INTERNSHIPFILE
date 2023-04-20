import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { Footer } from '../DashBoard/Footer';
import { useNavigate } from 'react-router-dom';

export const UserTaskAddPage = () => {
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
        const id = localStorage.getItem("_id");
        navigate(`/userdashboard/${id}`)
        axios.post("http://localhost:5000/usertask/usertask", data).then((res) => {
            if (res.status === 201) {
                navigate("/login")
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

    const getTask = () => {

        axios.get("http://localhost:5000/task/task").then((res) => {
            //console.log(res.data.data)
            setpros(res.data.data)
        }).catch((err) => {

        })

    }
    const getUser = () => {
        axios.get("http://localhost:5000/user/user").then((res) => {
            //console.log(res.data.data)
            setusers(res.data.data)
        }).catch((err) => {

        })

    }
    useEffect(() => {
        getTask();
        getUser();

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
                                <h1 class="text-white animated zoomIn">Add UserTask Team</h1>
                                <hr class="bg-white mx-auto mt-0" style={style} />
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                        <li class="breadcrumb-item text-white active" aria-current="page">Add UserTask Team</li>
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
                                <h6 class="mt-2">Add UserTask Team</h6>
                            </div>
                            <div class="wow fadeInUp" data-wow-delay="0.3s" style={style8}>
                                <form onSubmit={handleSubmit(Submit)}>
                                    <div class="row g-3">

                                        <div class="col-md-12">
                                            <div class="form-floating">

                                                <select name="role" {...register("task")} className="form-control">
                                                    {pros?.map((task) => (
                                                        <option key={task._id} value={task._id}>
                                                            {task.title}
                                                        </option>
                                                    ))}

                                                </select>



                                                <label for="projects">Your Task</label>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-floating">
                                                <select name="users" {...register("user")} className="form-control" multiple >
                                                    {users?.map((users) => (
                                                        <option key={users._id} value={users._id}>
                                                            {users.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <label for="user">user</label>
                                            </div>
                                        </div>



                                        {/* <div class="col-12">
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
                                        </div> */}

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
