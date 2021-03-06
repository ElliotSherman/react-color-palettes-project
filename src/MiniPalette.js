import React from 'react';
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import styles from './styles/MiniPaletteStyles'
import DeleteIcon from '@mui/icons-material/Delete';

const MiniPalette = ({ paletteName , emoji, colors , id , classes,  handleOpenDialag , setOpen })=> {
    // const handleDelete = (e) =>{
    //     e.stopPropagation();
    //     deletMiniPalette(id)
    // }
    // console.log(`rendered ${id}`);
    const openDeleteDialog=(e)=>{
    e.stopPropagation();
    setOpen(true);
    handleOpenDialag(id);
}
    const navigate = useNavigate();
     const miniColorPalette = colors.map(color => (
         <div
         className={classes.miniColor} 
         style={{backgroundColor:color.color}}
         key={color.name}
         >
        </div>
     ))
    return (
        <div className={classes.root} onClick={()=>navigate(`/palette/${id}`)}>
                <DeleteIcon 
                className={classes.deleteIcon} 
                style={{transition: 'all 0.3s ease-in-out'}}
                onClick={openDeleteDialog}/>
            <div className={classes.colors}>{miniColorPalette}</div>
            <h5 className={classes.title} >{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
        </div>
    );
};

export default withStyles(styles)(MiniPalette)