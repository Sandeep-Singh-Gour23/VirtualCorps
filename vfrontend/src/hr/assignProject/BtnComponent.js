import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./BtnComponents.style.css";

function Button(props) {
  const titleState = useState(props.title);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState();

  //fetching

  const [drop, setDrop] = useState();
  const [projectManager, setProjectManager] = useState([]);

  const getProjectManager = async () => {
    try {
      const response = await fetch("/getAllProjectManager", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + localStorage.getItem("jwt"),
        },
      });
      const data = await response.json();
      // console.log("Project Manager: ", data.data);
      setProjectManager(data.data);
    } catch (error) {
      console.log("Error in get project manager: ", error);
    }
  };
  console.log("title", titleState)
  // posting project
  const AssignProj = async (e) => {
    e.preventDefault();
 
    try {
      // console.log("assign proj called");
      const res = await fetch("/assignProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          "empId": drop,
          "projectName":titleState[0]
        }),
      });
      // console.log("project title: ", props.title);
      const data = await res.json();
      // console.log("data recieved: ",data);
      if(!data){
        window.alert("nothing happened");
      }else{
        window.alert("Project Assigned!!");
      }
    } catch (error) {
      console.log("assigning project error: ", error);
    }
  };

  useEffect(() => {
    getProjectManager();
  }, []);
  return (
    <>
      <div className="body-bg">
        <div className="wrapper">
          <div class="btn">
            <p onClick={() => setModalIsOpen(true)}>{props.title}</p>
            {/* <p className="status">Status: {status[Math.floor(Math.random() * status.length)]}</p> */}
            <p className="status">{props.projectStatus}</p>
            <span className="BorderTopBottom"></span>
            <span className="BorderLeftRight"></span>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          style={{ overlay: { backgroundColor: "none" } }}
        >
          <div className="box">
            <button className="closeBtn" onClick={() => setModalIsOpen(false)}>
              X
            </button>
            
            <h2 className="box-title">{props.title}</h2>
            {/* <input type="text"
                   name="contactNumber"  
                   className="form-input"
                   value={props.title}
                    onChange={()=>{
                      setTitle(props.title);
                      }}
                    /> */}
            
            {/* <input type="text" className="box-title" value={props.title}/> */}

            <p className="des-title">Description-</p>
            <h3 className="description head3">{props.description}</h3>
            <br />

            <p className="des-title">Sub-description</p>
            <h3 className="sub-description head3">{props.subDescription}</h3>
            <br />

            <p className="select-pm">Select Project Manager:</p>
            <select
              className="drop-down2"
              name="proejctManager"
              value={drop}
              id="projectManager"
              onChange={(event) => {
                setDrop(event.target.value);
              }}
              style={{ backgroundColor: "white" }}
            >
              {projectManager.map((value, index) => {
                return (
                  <option key={index} id={value.fullName} value={value.empId}>
                    {value.fullName}
                  </option>
                );
              })}
            </select>
            <br />
            <button type="submit" className="button-1" onClick={AssignProj}>
              Assign
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Button;
