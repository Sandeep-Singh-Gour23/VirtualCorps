import React, { useState ,useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import CN from './CreateNote';
import './cn.css';
import Note from './Note';


const  Cn = () => {
 
  const[project,setproject] = useState([]);

  const getProjects = async ()=>{
      const response = await fetch('/getAllProjects',{

        method : "GET",
        headers:{
          // "Content-Type":"application/json",
          "authorization":"Bearer "+localStorage.getItem("JWT")
        },

      });
    
     const data = await response.json();
     console.log(data.data.NotAssignedProject);
    setproject(data.data.NotAssignedProject);
  }
 
  useEffect(()=>{
    getProjects();
  },[]);

    const [addItem , setItem] = useState([]);
  
    const addNote = (note) => {
      // alert("hello!");
      setItem((preval)=>{
        return[...preval,
        note
        ];
      });
  
   
      console.log(note);
    }
  
    const delitem = (id) =>{
  
      setItem((preval)=>{
     
          preval.filter((currentval,indx)=>{
                return indx !== id;
          })
        
      })
    }
   
  
    return (
  <>

      <Header/>
     
      <CN  passNote = {addNote}/>
      
    <div className="row">
  
  
   {   addItem.map((val,index)=> {
        return <Note
              key = {index}
              id={index}
              title = {val.title}
              content = {val.content}
              status = "Not Asssigned"
              deleteItem = {delitem}
        />
      }) }
   
      {/* </div>
      <div className="row"  > */}
      {   
      project.map((value,index)=> {
        return <Note
              key = {index}
              id={value.projectName}
              title ={value.projectName}
              content = {value.description}
              status = "Not Assigned"
              deleteItem = {delitem}
        />
     
      }) }
        </div>
    
    
  </>
    );
  }
  
  export default Cn;