import sizes from "./sizes"

export default {
    Navbar:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        height: '5vh',
    },
    slider:{
        width: '340px',
        margin: '0 15px',
        display: 'inline-block',
        '& .rc-slider-track':{
            backgroundColor:'transparent'
        },
        '& .rc-slider-rail':{
            height:'8px'
        },
        '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover':{
                backgroundColor: 'green', 
                border: '2px solid green', 
                outline:'none' ,
                boxShadow: 'none' ,
                width:'13px',
                height:'13px',
                marginTop:'-3px' ,
        },
        [`${sizes.down('md')}`]:{
            width:'150px',

        },
    },
    logo:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#eceff1',
        padding: '0 15px',
        marginRight: '15px',
        fontFamily: 'monospace',
        fontSize: '1.2rem',
        '& a':{
        textDecoration: 'none',
        color: 'black',
        },
        [`${sizes.down('xs')}`]:{
            display:'none',
        },
    },
    personalLogo:{
        fontSize: '0.8rem',
        letterSpacing: '0.3em',
        fontWeight: '300',
        '& span':{
        fontFamily: 'monospace',
        fontSize: '0.8em',
        }
    },
    selectContainer:{
        marginLeft: 'auto',
        marginRight: '15px',
    }
}