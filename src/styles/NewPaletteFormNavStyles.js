import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import sizes from "./sizes"

const styles = {
drawerWidth : 400,
root:{
    display:'flex'
  },
navBtns:{
    display:'flex',
    alignItems:'center',
    "& button":{
      marginRight:'0.5rem'
    },
    '& a':{textDecoration:'none'}
  },
AppBar : styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection:'row',
    justifyContent:'space-between',
    height:'64px',
    ...(open && {
      width: `calc(100% - ${styles.drawerWidth}px)`,
      marginLeft: `${styles.drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }))
}
export default styles;