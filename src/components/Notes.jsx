import React, { useState } from 'react';
import '../App.css';
import './Home.jsx';
import { Textarea } from '@nextui-org/react';
import '../App.css';

const Notes = () => {
    return(
        <div>
            <div className="center-top">
                <Textarea
                    placeholder="Title"
                    rows={1}
                    size='lg'
                    width='100%'
                />
            </div>
            
            <Textarea
                placeholder="Start typing..."
                rows={10}
                size='md'
                width='100%'
            />
        </div>
        
    );
}

export default Notes;