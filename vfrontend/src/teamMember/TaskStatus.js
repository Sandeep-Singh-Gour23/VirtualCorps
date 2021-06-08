import React from 'react'
import { Drawer, Divider } from 'rsuite'

const TaskStatus = () => {
    return (
        <div>
            
            <Drawer.Header>
                <Drawer.Title>
                    Dashboard
                </Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
                <h2>Project 1</h2>
                <Divider />
               
            </Drawer.Body>

            <Drawer.Footer>
                
                <p>Footer</p>
            </Drawer.Footer>
        </div>
    )
}

export default TaskStatus
