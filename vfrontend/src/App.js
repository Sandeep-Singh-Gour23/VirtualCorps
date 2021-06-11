import React, { useState } from 'react';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/styles/rsuite-default.css'
import Pmd from './projectmanager/Pmd';
import Hrd from './hr/Hrd';
import Adm from './admin/Adm';
import Form from './hr/createMember/Form'
import MemForm from './hr/createTeam/MemForm'
import Profile from './teamMember/Profile'
import First from './home/First'
import Cn from './hr/createTask/Cn';
import Assignhr from './hr/assignProject/AssignProj';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
const  App = () => {

  

  return (
<>
<Router>
  
    <Switch>
      <Route path="/" exact component=
      {First}
      />
      <Route path="/admin" exact component=
      {Adm}
      />
      <Route path="/admin/createtask" exact component=
      {Cn}
      /><Route path="/admin/assignproject" exact component=
      {Assignhr}
      /><Route path="/admin/createteam" exact component=
      {MemForm}
      /><Route path="/admin/createmember" exact component=
      {Form}
      />
      <Route path="/hr" exact component=
      {Hrd}
      />
        <Route path="/hr/createtask" exact component=
      {Cn}
      /><Route path="/hr/assignproject" exact component=
      {Assignhr}
      /><Route path="/hr/createteam" exact component=
      {MemForm}
      /><Route path="/hr/createmember" exact component=
      {Form}
      />
      <Route path="/projectmanager" exact component=
      {Pmd}
      />
         <Route path="/member" exact component=
      {Profile}
      />

      </Switch>
     </Router>


</>
  );
}

export default App;