
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'

export const UserTaskUpdatePage = () => {
    var style = {
        width: "90px"
    }
    var style1 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeInUp;"
    }
    var style2 = {
        visibility: "visible; animation-delay: 0.5s; animation-name: zoomIn;"
    }
    var style2A = {
        visibility: "visible; animation-delay: 0.1s; animation-name: zoomIn;"
    }
    var style2B = {
        visibility: "visible; animation-delay: 0.3s; animation-name: zoomIn;"
    }
    var style2c = {
        visibility: "visible; animation-delay: 0.6s; animation-name: zoomIn;"
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
    // const [users, setusers] = useState()
    const [values, setValues] = useState({
        task: "",
       users:""
    })
    const navigate = useNavigate();
    const [status, setstatus] = useState()
    const [users, setusers] = useState();
    const [pros, setpros] = useState()
    const { id } = useParams();
    const getTask = () => {

        axios.get("http://localhost:5000/task/task").then((res) => {
            //console.log(res.data.data)
            setpros(res.data.data)
        }).catch((err) => {

        })

    }

    const getuser = () => {
        axios.get("http://localhost:5000/user/user").then((res)=>{
            setusers(res.data.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    
    useEffect(() => {

     getuser();
     getTask();

    }, [])



    
    const handleupdate = (event) => {
        event.preventDefault();
        axios.put("http://localhost:5000/usertask/usertask/" + id, values).then((res) => {
            console.log(res.data.data)
            // setValues(res.data.project)
            const id = localStorage.getItem("_id");
            navigate(`/userdashboard/${id}`)
            toast.success('🦄 update successfully', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }).catch((err) => {

            console.log(err)
        })
    }


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
            <div>

                <div class="container-xxl py-5 bg-primary hero-header mb-5">
                    <div class="container my-5 py-5 px-lg-5">
                        <div class="row g-5 py-5">
                            <div class="col-12 text-center">
                                <h1 class="text-white animated zoomIn">update Team</h1>
                                <hr class="bg-white mx-auto mt-0" style={style} />
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                        <li class="breadcrumb-item text-white active" aria-current="page">Update Team</li>
                                    </ol>
                                </nav>
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
                                    <form onSubmit={handleupdate}>
                                        <div class="row g-3">
                                        <div class="col-md-12">
                                            <div class="form-floating">

                                                <select name="role"  onChange={e => setValues({ ...values, task: e.target.value })} className="form-control">
                                                    {pros?.map((task) => (
                                                        <option key={task._id} value={task._id}>
                                                            {task.title}
                                                        </option>
                                                    ))}

                                                </select>



                                                <label for="projects">Your Task</label>
                                            </div>
                                        </div>

                                            
                                         
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <select name="status" className="form-control" onChange={e => setValues({ ...values, users: e.target.value })}>
                                                        {users?.map(users => (
                                                            <option key={users._id} value={users._id}>
                                                                {users.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <label for="users">users</label>
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





                <div class="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s" style={style7}>
                    <div class="container py-5 px-lg-5">
                        <div class="row g-5">
                            <div class="col-md-6 col-lg-3">
                                <h5 class="text-white mb-4">Get In Touch</h5>
                                <p><i class="fa fa-map-marker-alt me-3"></i>E-34 partik tenament</p>
                                <p><i class="fa fa-phone-alt me-3"></i>7284961583</p>
                                <p><i class="fa fa-envelope me-3"></i>jaymin@gmail.com</p>
                                <div class="d-flex pt-2">
                                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <h5 class="text-white mb-4">Popular Link</h5>
                                <a class="btn btn-link" href="">About Us</a>
                                <a class="btn btn-link" href="">Contact Us</a>
                                <a class="btn btn-link" href="">Privacy Policy</a>
                                <a class="btn btn-link" href="">Terms &amp; Condition</a>
                                <a class="btn btn-link" href="">Career</a>
                            </div>
                            {/* <div class="col-md-6 col-lg-3">
          <h5 class="text-white mb-4">Project Gallery</h5>
          <div class="row g-2">
              <div class="col-4">
                  <img class="img-fluid" src="img/portfolio-1.jpg" alt="Image"/>
              </div>
              <div class="col-4">
                  <img class="img-fluid" src="img/portfolio-2.jpg" alt="Image"/>
              </div>
              <div class="col-4">
                  <img class="img-fluid" src="img/portfolio-3.jpg" alt="Image"/>
              </div>
              <div class="col-4">
                  <img class="img-fluid" src="img/portfolio-4.jpg" alt="Image"/>
              </div>
              <div class="col-4">
                  <img class="img-fluid" src="img/portfolio-5.jpg" alt="Image"/>
              </div>
              <div class="col-4">
                  <img class="img-fluid" src="img/portfolio-6.jpg" alt="Image"/>
              </div>
          </div>
      </div> */}
                            <div class="col-md-6 col-lg-6">
                                <h5 class="text-white mb-4">Newsletter</h5>
                                <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                                <div class="position-relative w-100 mt-3">
                                    <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={style6} />
                                    <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container px-lg-5">
                        <div class="copyright">
                            <div class="row">
                                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    © <a class="border-bottom" href="#">Bug tracking</a>, All Right Reserved.

                                    <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                                </div>
                                <div class="col-md-6 text-center text-md-end">
                                    <div class="footer-menu">
                                        <a href="">Home</a>
                                        <a href="">Cookies</a>
                                        <a href="">Help</a>
                                        <a href="">FQAs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
