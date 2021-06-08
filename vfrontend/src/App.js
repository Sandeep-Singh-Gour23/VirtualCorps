import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/styles/rsuite-default.css'
import Pmd from './projectmanager/Pmd';
import Hrd from './hr/Hrd';
import Adm from './admin/Adm';
import Form from './hr/createMember/Form'
import MemForm from './hr/createTeam/MemForm'
import Profile from './teamMember/Profile'
import First from './home/First'

const  App = () => {

  

  return (
<>
<Pmd/>
{/* <Hrd/> */}
{/* <Adm/> */}
    {/* <Header/>
   
    <CN  passNote = {addNote}/>
    
  <div className="row">


 {   addItem.map((val,index)=> {
      return <Note
            key = {index}
            id={index}
            title = {val.title}
            content = {val.content}
            deleteItem = {delitem}
      />
    }) }
 
    </div>
   */}
   {/* <Form /> */}
   {/* <MemForm /> */}
   {/* <Profile /> */}
   {/* <First/> */}
  
</>
  );
}

export default App;