import './App.css';
import './component/Team Member/profile.style.css'
import 'rsuite/dist/styles/rsuite-default.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './component/HR/CreateMember/Form'
import Button from './component/HR/AssignProject/BtnComponent'
import Profile from './component/Team Member/Profile'
import MemForm from './component/HR/CreateTeam/MemForm'
import Adm from './component/admin/Adm';

function App() {
  return (
    <>
   {/* <Navbar /> */}
   { /*
    <h2 className="heading">Project Assignment</h2>
    <div className="container">
        <Button props title="Project 1" />  
        <Button props title="Project 2" />
        <Button props title="Project 3" />
        <Button props title="Project 4" />
        <Button props title="Project 5" />
        <Button props title="Project 6" />
        <Button props title="Project 7" />
    </div>   */}
     {/* <span className="showMore">Show More</span> */}
    {/* <Form /> */}
     {/* <MemForm /> */}
     <Adm/>
    {/* <Profile /> */}
    </>
  );
}

export default App;
