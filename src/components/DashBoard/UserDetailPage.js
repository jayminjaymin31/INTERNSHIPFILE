import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Footer } from "../DashBoard/Footer.js"
import { Helmet } from 'react-helmet'

export const UserDetailPage = () => {
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

  var navigate = useNavigate()

  const [users, setusers] = useState();

  const id = localStorage.getItem("_id");

  const getApi = () => {

    axios.get("http://localhost:5000/usertask/usertask2/" + id).then((res) => {

      console.log(res.data.module)
      setusers(res.data.module)

    }).catch((err) => {

      console.log(err)
    })


  }



  useEffect(() => {

    getApi()

    // navigate("/admindashboard")


  }, [])
  return (
    <div class="container-xxl bg-white p-0">
      <Helmet>
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        <link rel="stylesheet" href="../assets/vendor/fonts/jaymin.css" />
      </Helmet>



      <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
          <div class="row g-5 py-5">
            <div class="col-12 text-center">
              <h1 class="text-white animated zoomIn">UserDetail</h1>
              <hr class="bg-white mx-auto mt-0" style={style} />
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                  <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">Detail Page</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>





      <div class="container-xxl py-5">
        <div class="container px-lg-5">
          <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s" style={style1}>
            <h6 class="position-relative d-inline text-primary ps-4">Details</h6>
            <h2 class="mt-2">What are details given below</h2>
          </div>


<div class="jp">
          <div class="data">
            <div class="content-data">
              <div class="head">
                <h3>Project List</h3>
                <form action="#">
                  <div class="form-group">
                  </div>
                </form>
                <div class="refresh">

                </div>
              </div>

              <table class="ann" >
                <tr>
                  <th>Id</th>
                  <th>Developer</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>TotalMinutes</th>
                  <th>Module</th>
                  <th>Projects</th>




                </tr>
                {
                  users?.map((u) => {
                    return (<tr>
                      <td>{u._id}</td>
                      <td>
                        {[u?.user?.map((d) => d.name).join(", ")]}</td>
                      <td> {[u?.task?.map((d) => d.title).join(", ")]}</td>
                      <td> {[u?.task?.map((d) => d.description).join(", ")]}</td>
                      <td> {[u?.task?.map((d) => d.status)]}</td>
                      <td> {[u?.task?.map((d) => d.totalMinutes).join(", ")]}</td>
                      <td>{[u?.task?.map((d) => d.module).join(", ")]}</td>
                      <td>{[u?.task?.map((d) => d.projects).join(", ")]}</td>




                    </tr>)
                  })
                }

              </table>

            </div>
          </div>
          </div>






        </div>
      </div>






      <Footer />
    </div>
  )
}
