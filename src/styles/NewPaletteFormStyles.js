import { styled } from '@mui/material/styles';

const styles = {
drawerWidth : 400,
Main : styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    height:'calc(100vh - 64px)',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${styles.drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
),

Container : styled('div')(() => ({
  width:'90%',
  height:'100%',
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})),
Buttons : styled('div')(() => ({
  width:'100%',
  '& button':{
    width:'50%'
  }
})),
DrawerHeader : styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))
}

export default styles;