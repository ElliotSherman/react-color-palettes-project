import React from 'react';
import { withStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import {SortableElement} from 'react-sortable-hoc'
import styles from './styles/DragableColorBoxStyles';

const DragableColorBox = SortableElement(({color , name , handleDelete , classes}) => {
    return (
        <div className={classes.root} style={{backgroundColor:color}}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={() => handleDelete(name)}/>
            </div>
        </div>
    );
})

export default withStyles(styles)(DragableColorBox);