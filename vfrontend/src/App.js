import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pmd from './projectmanager/Pmd';
import Hrd from './hr/Hrd';
import Adm from './admin/Adm';

const  App = () => {

  

  return (
<>
{/* <Pmd/> */}
{/* <Hrd/> */}
<Adm/>
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
  
</>
  );
}

export default App;