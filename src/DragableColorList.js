import React from 'react';
import {SortableContainer} from 'react-sortable-hoc'
import DragableColorBox from './DragableColorBox';

function DragableColorList ({colorBoxes , handleDelete}) {
    return (
        <div style={{height: '100%'}}>
        {colorBoxes.map( (color , idx) => (
            <DragableColorBox 
            index ={idx}
            key={color.name} 
            color={color.color} 
            name={color.name} 
            handleDelete={() => handleDelete(color.name)} />
          ))}
        </div>
    );
}

export default SortableContainer(DragableColorList);