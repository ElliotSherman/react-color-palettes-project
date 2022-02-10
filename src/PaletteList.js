import React,{useState} from 'react';
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles'
import { withStyles } from '@mui/styles';
import {Link} from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { blue , red } from '@mui/material/colors';

function PaletteList({classes , palettes , deletMiniPalette}) {
    const [open , setOpen] = useState(false);
    const [deleteId , setDeleteID]=useState('');

    const handleOpenDialag = (id) =>{
        setDeleteID(id);
    };
    const handleDelete=()=>{
        deletMiniPalette(deleteId);
        setOpen(false);
        setDeleteID('')
    };
    const paletteList = palettes;
    const paletteCards = paletteList.map(palette => (
        <CSSTransition  key={palette.id} classNames='fade' timeout={500}>
            <MiniPalette setOpen={setOpen} key={palette.id} id={palette.id} handleOpenDialag={handleOpenDialag} {...palette}>{palette.paletteName}</MiniPalette>
        </CSSTransition>
        ))
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React colors</h1>
                    <Link to='palette/new'>Create Palatte</Link>
                </nav>
                    <TransitionGroup className={classes.palettes}>
                        {paletteCards}
                    </TransitionGroup>
            </div>
            <Dialog open={open} aria-labelledby='delete-dialog-title' onClose={()=>setOpen(false)} >
                <DialogTitle id="delete-dialog-title">Are you sure?</DialogTitle>
        <List>
            <ListItem button onClick={handleDelete} >
                <ListItemAvatar>
                    <Avatar style={{backgroundColor:blue[100] , color:blue[500]}} >
                    <CheckIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Delete' />
            </ListItem>
            <ListItem button onClick={()=>(setOpen(false),setDeleteID(''))}>
                <ListItemAvatar>
                    <Avatar style={{backgroundColor:red[100] , color:red[500]}}>
                    <ClearIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Cancel'/>
            </ListItem>
        </List>
            </Dialog>
        </div>
    );
}

export default  withStyles(styles)(PaletteList);
