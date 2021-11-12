import React from 'react'
import Navigation from './Navigation'
import { Panel } from 'rsuite'
import {Card, Button} from 'react-bootstrap';
import ProjectWork from '../../src/Image/work.svg'

const TaskStatus = () => {
    return (
        <>
            <Navigation />
            <div className="mem-project-card">
            <Card style={{ width: '20rem',height:'25rem' }} className="single-card">
                <Card.Img variant="top" src={ProjectWork} />
                 <Card.Body>
                    <Button style={{backgroundColor:'#2bbbad', outline:'none'}}>Project Name</Button>
                 </Card.Body>
            </Card>
            </div>
        </>
    )
}

export default TaskStatus
