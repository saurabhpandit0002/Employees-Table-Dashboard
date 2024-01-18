import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import dashboard from './image/Dashboard.png'
import table from './image/Table.png';
import billing from './image/Billing.png';
import rtl from './image/RTL.png';
import profile from './image/Profile.png';
import signin from './image/Sign In.png';
import signup from './image/Sign Up.png';

import group from './image/Group 2 (1).jpg';
import icon from './image/logo-creative-tim-black.png'


import RecipeReviewCard from './card1';
import RecipeReviewCard2 from './card2';
import signin1 from './image/default1.png';
import setting from './image/setting.png';
import alarm from './image/default.png';
import tables from './image/Breadcrumb.png';

import Searchbar from './searchbar';



const drawerWidth = 246.5;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    backgroundColor:"#F8F9FA",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
  
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  backgroundColor:"#F8F9FA",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft1() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: '#F8F9FA' }} >
        <Toolbar sx={{ display: 'flex', paddingLeft:7 }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' })  }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography>

         <Typography> <img src={tables} alt='tables'></img></Typography>
         <Typography display="block" sx={{color:"#000000",fontFamily: "Helvetica",
fontSize: '18px',
fontWeight: '700',
lineHeight: "20px" ,
letterSpacing: "0em",
textAlign: 'left',
 }}>Tables</Typography>
          </Typography>
        
              <Searchbar/> 


                    <Typography
                    sx={{color:"#718096",
                          fontFamily:"Helvetica",
                          fontSize: "12px",
                          fontWeight: "700",
                          lineHeight: "20px" ,
                          letterSpacing: "0em",
                          textAlign: "left",
                          paddingRight:"20px",
                          
                          

                    
                    }}>
                      <img src={signin1} alt='signin'
                      sx={{width:"14px",
                      height:'14px'}}></img> Sign in</Typography>  
                      <Typography
                      sx={{
                          paddingRight:'20px'
                         
                      }}
                      ><img src={setting} alt='setting' 
                      sx={{width:"14px",
                      height:'14px'}}></img></Typography> 
                      <Typography sx={{
                                      paddingRight:"110px",
                      }}>
                        <img src={alarm} alt='alarm'
                        sx={{width:"14px",
                        height:'14px', top:"36.5px"}}></img>   
                        </Typography>
        </Toolbar>
      </AppBar>
         
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            height:"100%",
            top:"1px",
            left:"18px",
            backgroundColor:"#F8F9FA"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <Typography><h6><strong>
                     <img src={icon} alt='icon'></img>
          PURITY UI DASHBOARD</strong> </h6> </Typography>
                           
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Dashboard', 'Tables', 'Billing', 'RTL'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                
              <ListItemIcon>
                 { text==='Dashboard'? <img src={dashboard} alt='dashboard'></img>:text==='Tables'? <img src={table} alt='table'></img>:(text === 'Billing')? <img src={billing} alt='billing'></img>:<img src={rtl} alt='rtl'></img>}
                </ListItemIcon>
               
              </ListItemButton>
            </ListItem>
          ))}
        </List >
        
        <List style={{}}>
        <Typography sx={{ fontFamily: "Helvetica", fontWeight: '700', fontSize: '12px', lineHeight: '18px' , color:'#2D3748' ,left:'47.5px', justifyContent:'center' ,marginLeft:'30px'}}>
            ACCOUNT PAGES
          </Typography>
          {['Profile', 'Sign In', 'Sign Up'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
              <ListItemIcon>
              { text==='Profile'? <img src={profile} alt='profile'></img>:(text === 'Sign In')? <img src={signin} alt='signin'></img>:<img src={signup} alt='signup'></img>}
                </ListItemIcon> 
                
              </ListItemButton>
            </ListItem>
          ))}
        </List >
        <list style={{marginLeft:'auto',marginRight:"auto"}}>

              
<img src={group} alt='group' height='145.5px' width='180px' top='594.5px' left="35px" backgroundColor="#F8F9FA" >
        
 </img>

        </list>
                
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       <RecipeReviewCard/>
       <RecipeReviewCard2/>
       <div style={{ display: "flex", marginTop: "10px", justifyContent: "space-between" }}>
        <div  style={{display:"flex"  }}>
                <Typography style={{color:"#A0AEC0" ,fontSize:"x-small"}}>@ 2021,Made with❤️ by&nbsp; </Typography>
                <Typography style={{color:"#38B2AC",fontSize:"x-small"}}>Creative Tim&nbsp; </Typography>
               <Typography  style={{color:"#A0AEC0",fontSize:"x-small"}} >&&nbsp; </Typography> 
                <Typography style={{color:"#38B2AC",fontSize:"x-small"}}>Simmmple</Typography>
                <Typography style={{color:"#A0AEC0",fontSize:"x-small"}}> &nbsp;for a better web</Typography>
        </div>
        <div style={{display:"flex"}}>
          <Typography style={{ marginRight: "20px" ,color:"#A0AEC0" ,fontSize:"small"}}>CreativeTim</Typography>
          <Typography style={{ marginRight: "20px" ,color:"#A0AEC0" ,fontSize:"small"}}>Simmmple</Typography>
          <Typography style={{ marginRight: "20px" ,color:"#A0AEC0",fontSize:"small" }}>Blog</Typography>
          <Typography style={{ marginRight: "20px" ,color:"#A0AEC0",fontSize:"small" }}>License</Typography>
        </div>
       </div>
      </Main>
    </Box>
  );
}