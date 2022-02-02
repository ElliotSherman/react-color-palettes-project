import React from 'react';
import { withStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
const styles = {
    root:{
        height:'25%',
        width:'20%',
        margin:'0 auto',
        display:'inline-block',
        position:'relative',
        cursor:'pointer',
        marginBottom:'0px',
        '&:hover svg':{
            color:'white',
            transform:'scale(1.5)',
        }
    },
    boxContent:{
        position: 'absolute',
        width: '100%',
        left:'0px',
        bottom: '0px',
        padding: '10px',
        color: 'rgb(0,0,0,0.5)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        display:'flex',
        justifyContent:'space-between'
    },
    deleteIcon:{
        transition:'all 0.3s ease-in-out'
    }
}

function DragableColorBox({color , name , handleDelete , classes}) {
    return (
        <div className={classes.root} style={{backgroundColor:color}}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleDelete}/>
            </div>
        </div>
    );
}

export default withStyles(styles)(DragableColorBox);