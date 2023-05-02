import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { SingUp } from './components/SingUp/SingUp';
import { Service } from './components/Service/Service';
import { Contact } from './components/Contact/Contact';
import { AdminDashBoard2 } from './components/DashBoard/AdminDashBoard2'
import { UserDashBoard } from './components/DashBoard/UserDashBoard'
import { DevDashBoard } from './components/DashBoard/DevDashBoard'
import { Detail } from './components/DashBoard/Detail'
import { ViewTeam } from './components/DashBoard/ViewTeam'
import { UpdateApi } from './components/UpdateApi/UpdateApi';
import { UpdateApi2 } from './components/UpdateApi/UpdateApi2';
import { AddModule } from './components/Module/AddModule';
import { DetailPage } from './components/DashBoard/DetailPage';
import { ProjectTeamAdd } from './components/ProjectTeam/ProjectTeamAdd';
import { ProjectTeam } from './components/ProjectTeam/ProjectTeam';
import { UpdateApi3 } from './components/ProjectTeam/UpdateApi3';
import { Task } from './components/Task/Task';
import { TaskPage } from './components/Task/TaskPage';
import { UpdateTask } from './components/Task/UpdateTask';
import { UserTaskAddPage } from './components/DashBoard/UserTaskAddPage';
import { UserTaskUpdatePage } from './components/DashBoard/UserTaskUpdatePage';
import { DetailUserTaskPage2 } from './components/DashBoard/detailUserTaskpage2';
import { DetailTeam } from './components/ProjectTeam/DetailTeam';
import { DetailTask } from './components/Task/DetailTask';
import { TesterDashBoard } from './components/DashBoard/TesterDashBoard';
import { UserDetailPage } from './components/DashBoard/UserDetailPage';
import { ProjectManagerDashBoard } from './components/DashBoard/ProjectManagerDashBoard';
import { TeamLeaderDashBoard } from './components/DashBoard/TeamLeaderDashBoard';




function App() {
  return (
      <div >

        <Navbar/>
        {/* <Addpro/> */}

         <Routes>
         <Route path="/teamleaderdashboard/:id" element={<TeamLeaderDashBoard/>}/>
          <Route path="/projectmanagerdashboard/:id" element={<ProjectManagerDashBoard/>}/>
          <Route path="/detailtask/:id" element={<DetailTask/>}/>
          <Route path="/detailteam/:id" element={<DetailTeam/>}/>
          <Route path="/detailusertaskpage/:id" element={<DetailUserTaskPage2/>}/>
          <Route path="/usertaskupdatepage/:id" element={<UserTaskUpdatePage/>}/>
          <Route path="/usertaskaddpage" element={<UserTaskAddPage/>}/>
          <Route path="/updatetask/:id" element={<UpdateTask/>}/>
          <Route path="/taskpage/:id" element={<TaskPage/>}/>
          <Route path="/task" element={<Task/>}/>
          <Route path="/updateapi3/:id" element={<UpdateApi3/>}/>
          <Route path="/projectteam/:id" element={<ProjectTeam/>}/>
          <Route path="/projectteamadd" element={<ProjectTeamAdd/>}/>
          <Route path="/detailpage/:id" element={<DetailPage/>}/>
          <Route path="/addmodule" element={<AddModule/>}/>
          <Route path="/updateapi2/:id" element={<UpdateApi2/>}/>
          <Route path="/userdetailpage/:id" element={<UserDetailPage/>}/>
          <Route path="/updateapi/:id" element={<UpdateApi/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/viewteam/:id" element={<ViewTeam/>}/>
          <Route path="/devdashboard" element={<DevDashBoard/>}/>
          <Route path="/testerdashboard/:id" element={<TesterDashBoard/>}/>
          <Route path="/userdashboard/:id" element={<UserDashBoard />}/>
          <Route path="/admindashboard" element={<AdminDashBoard2/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="singup" element={<SingUp/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
           <Route path="/aboutus" element={<AboutUs/>}/>
          </Routes>
        </div>

)}


export default App;