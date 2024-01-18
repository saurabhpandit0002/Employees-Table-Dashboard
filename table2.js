import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import xd from './image/Icon.png';

import  xd2 from './image/Icons.png';
import xd3 from './image/Icon (1).png';
import xd4 from './image/Icon (2).png';
import xd5 from './image/Icon (3).png'
import { Icon, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#4FD1C5",
  },
}));

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      
      
    </Box>
  );
}


const rows = [
  
];

export default function BasicTable2() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%',
height: '380px',
top: '216px',
left: '320.5px',
padding: '0px, 0px, 0px, 0px',
}}
 
>
        <>
          <TableRow  style={{color:"#718096", align:'center' }}>
            <TableCell  style={{fontSize:"12px" ,}}><strong>COMPANIES</strong></TableCell>
            <TableCell style={{fontSize:"12px" ,}}><strong>BUDGET</strong></TableCell>
            <TableCell style={{fontSize:"12px" ,}}><strong>STATUS</strong></TableCell>
            <TableCell style={{fontSize:"12px" ,}}><strong>COMPLETION</strong> </TableCell>
            <TableCell  ></TableCell>
          </TableRow>
        </>
        <>
        <TableRow style={{align:"center"}}>
            <TableCell><div style={{ display:'flex', }}>
              <div>
              <img src={xd} alt='xd'width='20px' height='19.5px' top="769px" left="320.5px"></img>
              </div>
              <div style={{paddingLeft:"30px"}}><strong>Chakra Soft UI Version</strong></div>
            </div>
           </TableCell>
            <TableCell ><strong>$14000</strong></TableCell>
            <TableCell ><strong>Working</strong></TableCell>
            <TableCell > <Typography style={{marginRight:'100px',color:"#4FD1C5"}}><strong >60%</strong></Typography>
             
            <Box sx={{ flexGrow: 1 }}>
                  <FacebookCircularProgress />
                   
                  <BorderLinearProgress variant="determinate" value={60}  style={{width:"130px", color:"#4FD1C5"}}  />
             </Box>   </TableCell>
            <TableCell ><MoreVertIcon sx={{color:"#A0AEC0"}}></MoreVertIcon></TableCell>
          </TableRow>
        </>
       
        <TableRow style={{align:"center"}}>
            <TableCell><div style={{ display:'flex', }}>
              <div>
              <img src={xd2} alt='xd2'width='20px' height='19.5px' top="769px" left="320.5px"></img>
              </div>
              <div style={{paddingLeft:"30px"}}><strong>Add Progress Track</strong></div>
            </div></TableCell>
            <TableCell ><strong>$3000</strong></TableCell>
            <TableCell ><strong>Canceled</strong></TableCell>
            <TableCell > <Typography style={{marginRight:'100px',color:"#4FD1C5"}}><strong >10%</strong></Typography>
            <Box sx={{ flexGrow: 1 }}>
                  <FacebookCircularProgress />
                   
                  <BorderLinearProgress variant="determinate" value={10}  style={{width:"130px", color:"#4FD1C5"}}  />
             </Box>   
             </TableCell>
            <TableCell ><MoreVertIcon sx={{color:"#A0AEC0"}}></MoreVertIcon></TableCell>
          </TableRow>
          <TableRow style={{align:"center"}}>
            <TableCell><div style={{ display:'flex', }}>
              <div>
              <img src={xd3} alt='xd3'width='20px' height='19.5px' top="769px" left="320.5px"></img>
              </div>
              <div style={{paddingLeft:"30px"}}><strong>Fix Platform Errors</strong></div>
            </div></TableCell>
            <TableCell ><strong>Not set</strong></TableCell>
            <TableCell ><strong>Done</strong></TableCell>
            <TableCell > <Typography style={{marginRight:'100px',color:"#4FD1C5"}}><strong >100%</strong></Typography>
            <Box sx={{ flexGrow: 1 }}>
                  <FacebookCircularProgress />
                   
                  <BorderLinearProgress variant="determinate" value={100}  style={{width:"130px", color:"#4FD1C5"}}  />
             </Box>               
             </TableCell>
            <TableCell ><MoreVertIcon sx={{color:"#A0AEC0"}}></MoreVertIcon></TableCell>
          </TableRow>
          <TableRow style={{align:"center"}}>
            <TableCell><div style={{ display:'flex', }}>
              <div>
              <img src={xd4} alt='xd4'width='20px' height='19.5px' top="769px" left="320.5px"></img>
              </div>
              <div style={{paddingLeft:"30px"}}><strong>Launch our Mobile App</strong></div>
            </div></TableCell>
            <TableCell ><strong>$32000</strong></TableCell>
            <TableCell  style={{align:"center"}} ><strong>Done</strong></TableCell>
            <TableCell > <Typography style={{marginRight:'100px',color:"#4FD1C5"}}><strong >100%</strong></Typography>
            <Box sx={{ flexGrow: 1 }}>
                  <FacebookCircularProgress />
                  
                  <BorderLinearProgress variant="determinate" value={100}  style={{width:"130px", color:"#4FD1C5"}}  />
             </Box>           
             </TableCell>
            <TableCell ><MoreVertIcon sx={{color:"#A0AEC0"}}></MoreVertIcon></TableCell>
          </TableRow>
          <TableRow style={{align:"center"}}>
            <TableCell><div style={{ display:'flex', }}>
              <div>
              <img src={xd5} alt='xd5'width='20px' height='19.5px' top="769px" left="320.5px"></img>
              </div>
              <div style={{paddingLeft:"30px"}}><strong>Add the New Pricing Page</strong></div>
            </div></TableCell >
            
            <TableCell ><strong>$400</strong></TableCell>
            <TableCell ><strong>Working</strong></TableCell>
            <TableCell  >
              <Typography style={{marginRight:'100px',color:"#4FD1C5"}}><strong >25%</strong></Typography>
              <Box sx={{ flexGrow: 1 }}>
                <FacebookCircularProgress />
                
                      <BorderLinearProgress variant="determinate" value={25}  style={{width:"130px", color:"#4FD1C5", }}  />
               </Box>
            </TableCell>
            <TableCell ><MoreVertIcon sx={{color:"#A0AEC0", marginTop:"8px"}}></MoreVertIcon></TableCell>
            
          </TableRow>  
      </Table>
      
    </TableContainer>
  );
    

}