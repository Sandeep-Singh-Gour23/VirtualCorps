import './App.css';
import './component/Team Member/profile.style.css'
import 'rsuite/dist/styles/rsuite-default.css';
import Navbar from './component/NavBar'
import Button from './component/HR/CreateProject/BtnComponent'
import Profile from './component/Team Member/Profile'

function App() {
  return (
    <>
    <Navbar />
    {/* <h2 className="heading">Project Assignment</h2>
    <div className="container">
        <Button props title="Project 1" />  
        <Button props title="Project 2" />
        <Button props title="Project 3" />
        <Button props title="Project 4" />
        <Button props title="Project 5" />
        <Button props title="Project 6" />
        <Button props title="Project 7" />
    </div>  */}
     {/* <span className="showMore">Show More</span> */}
    {/* <Form /> */}
    {/* <MemForm /> */}
    <Profile />
    </>
  );
}

export default App;
