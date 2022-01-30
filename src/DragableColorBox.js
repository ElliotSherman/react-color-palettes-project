import React from 'react';
import { withStyles } from '@mui/styles';

const styles = {
    root:{
        height:'25%',
        width:'20%',
        margin:'0 auto',
        display:'inline-block',
        position:'relative',
        cursor:'pointer',
        marginBottom:'-4px',
    }
}

function DragableColorBox({color , name , classes}) {
    return (
        <div className={classes.root} style={{backgroundColor:color}}>
            {name}
        </div>
    );
}

export default withStyles(styles)(DragableColorBox);