import React, { useState } from 'react';
import '../App.css';
import './Home.jsx';
import { Checkbox } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Plus } from 'react-iconly';
import { Textarea } from '@nextui-org/react';

const ToDoList = () => {
    const [items, setItems] = useState([
        { id: 1, text: <Textarea rows={1} size="sm"></Textarea> },
        { id: 2, text: <Textarea rows={1} size="sm"></Textarea> },
        { id: 3, text: <Textarea rows={1} size="sm"></Textarea> }
    ]);

    const addNewItem = () => {
        const newItemId = items.length+1;
        const newItem = { id: newItemId, text: `New item ${newItemId}` };
        setItems([...items, newItem]);
    }
    return(
        <div>
            <Checkbox.Group
            color="secondary"
            defaultValue={[""]}
            label="To-Do List"
            >
            
            {items.map((item) => (
                <Checkbox key={item.id} value={item.id}>
                    <Textarea rows={1} size="sm"></Textarea>
                </Checkbox>
            ))}
            <br />
            
            </Checkbox.Group>
         
            <div className="center-top">
            <Button auto light onClick={addNewItem}>
                <Plus set="bold" primaryColor="blueviolet"/>
            </Button>
            </div>
            
         
        </div>
        
        
        
    );
}

export default ToDoList;