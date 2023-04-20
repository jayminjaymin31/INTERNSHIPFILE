import axios from 'axios'
import React, { useState } from 'react'

import { useForm } from 'react-hook-form';

export const AdminDashBoard = () => {
  const { register, handleSubmit } = useForm();
 
  const [users, setusers] = useState()
   
  const submit = (data) => {
 
    console.log(data)
    axios.post("http://localhost:5000/project/project", data).then((res) => {
      console.log(res)
      getApi()
    }).catch((err) => {
      console.log(err)
    })


  };

  const getApi = () => {

    axios.get("http://localhost:5000/project/project").then((res) => {

      console.log(res.data.project)
      setusers(res.data.project)
    
    }).catch((err) => {

      console.log(err)
    })


  }

  const updateProject = (id) => {
    axios.put("http://localhost:5000/project/project/" + id).then((res) => {
      getApi()
    }).catch((err) => {
      console.log(err);
    })
  }
  const deleteProject = (id) => {

    axios.delete("http://localhost:5000/project/project/" + id).then((res) => {


      getApi()



    }).catch((err) => {

      console.log(err)
    })
  }
  return (
    <div>

      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>title</label>
          <input type="text" {...register("title")} />
        </div>
        <div>
          <label>description</label>
          <input type="text" {...register("description")} />
        </div>
        <div>
          <label>technology</label>
          <input type="text" {...register("technology")} />
        </div>
        <div>
          <label>estimatedHours</label>
          <input type="number" {...register("estimatedHours")} />
        </div>
        <div>
          <label>createdAt_Date</label>
          <input type="date" {...register("createdAt_Date")} />
        </div>
        <div>
          <label>updatedAt_Date</label>
          <input type="date" {...register("updatedAt_Date")} />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form> 
       <button onClick={getApi}>Get Api</button>

      <table>
        <tr>
          <th>Id</th>
          <th>title</th>
          <th>description</th>
          <th>technology</th>
          <th>estimatedHours</th>
          <th>createdAt_Date</th>
          <th>updatedAt_Date</th>
        </tr>
      
        {
          users?.map((u) => {
            return (<tr>
              <td>{u._id}</td>
              <td>{u.title}</td>
              <td>{u.description}</td>
              <td>{u.technology}</td>
              <td>{u.estimatedHours}</td>
              <td>{u.createdAt_Date}</td>
              <td>{u.updatedAt_Date}</td>

              <td>
                <button onClick={() => { updateProject(u._id) }}>UPDATE</button>
                <button onClick={() => { deleteProject(u._id) }}>DELETE</button>
              </td>
            </tr>)
          })
        }

      </table>
    </div>
  )
}
