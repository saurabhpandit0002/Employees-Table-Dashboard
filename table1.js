import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ej from './image/Image.png';
import on1 from './image/Status.png';

import av1 from './image/Images.png';

import off from './image/status1.png';
import av2 from './image/Image (1).png';

import on2 from './image/Status.png';
import av3 from './image/Image (2).png';
import on3 from './image/Status.png';
import av4 from './image/Image (3).png';
import off2 from './image/status1.png';
import av5 from './image/Image (4).png';
import off3 from './image/status1.png';
import { Typography } from '@mui/material';

const rows = [
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{width: "100%",
height: "388.5px",
top: "177.5px",
left: "320.5px",

 }} 

>
        < >
          <TableRow  style={{color:"#718096", align:'center' }}>
            <TableCell style={{fontSize:"12px" ,}}><strong>AUTHOR</strong></TableCell>
            <TableCell style={{fontSize:"12px" ,}}><strong>FUNCTION</strong></TableCell>
            <TableCell style={{fontSize:"12px" ,}}><strong>STATUS</strong></TableCell>
            <TableCell style={{fontSize:"12px" ,}}><strong>EMPLOYED</strong> </TableCell>
            <TableCell  ></TableCell>
          </TableRow>
        </>

        
        <TableRow style={{align:"center"}}>
            <TableCell>
              <div style={{display:"flex"}}>
              <div > 
              <img src={ej} alt='ej'></img> 
              </div>
              <div style={{marginLeft:'10px'}}>
                <Typography><strong>Esthera Jackson</strong></Typography>
                <Typography style={{color:"#718096" ,fontSize:'16px' ,marginTop:'-4px'}}>esthera@simmmple.com</Typography>
              </div>
            </div>
              </TableCell>

           <TableCell >
            <Typography>
            <strong >Manager</strong>
            </Typography>
            <Typography style={{color:"#718096" ,fontSize:'16px' ,marginTop:'-4px'}}>Organization</Typography>
           </TableCell>
            <TableCell><img src={on1} alt='on1'></img></TableCell>
            <TableCell><strong>14/06/21</strong></TableCell>
            <TableCell color="#718096">Edit</TableCell>
          </TableRow>
        
       
        <TableRow style={{align:"center"}}>
            <TableCell>
              <div  style={{display:"flex"}}>
              <div > 
              <img src={av1} alt='av1'></img> 
              </div>
              <div style={{marginLeft:'10px'}}>
                <Typography><strong>Alexa Liras</strong></Typography>
                <Typography style={{color:"#718096" ,fontSize:'16px' ,marginTop:'-4px'}}>alexa@simmmple.com</Typography>
              </div>
            </div></TableCell >
            <TableCell >
            <Typography>
            <strong >Programmer</strong>
            </Typography>
            <Typography style={{color:"#718096" ,fontSize:'16px' ,marginTop:'-4px'}}>Developer</Typography>
              </TableCell>
            <TableCell><img src={off} alt='off'></img></TableCell>
            <TableCell><strong>14/06/21</strong></TableCell>
            <TableCell color="#718096">Edit</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            <div  style={{display:"flex"}}>
              <div > 
              <img src={av2} alt='av2'></img> 
              </div>
              <div style={{marginLeft:'10px'}}>
                <Typography><strong>laurent Michael</strong></Typography>
                <Typography style={{color:"#718096" ,fontSize:'16px' ,marginTop:'-4px'}}>laurent@simmmple.com</Typography>
              </div>
            </div>
          </TableCell>
            <TableCell >
            <Typography>
            <strong >Executive</strong>
            </Typography>
            <Typography style={{color:"#718096" ,fontSize:'16px' ,marginTop:'-4px'}}>Projects</Typography>
            </TableCell>
            <TableCell><img src={on2} alt='on2'></img></TableCell>
            <TableCell><strong>14/06/21</strong></TableCell>
            <TableCell color="#718096">Edit</TableCell>
          </TableRow>

          <TableRow style={{align:"center"}}>
            <TableCell>
            <div  style={{display:"flex"}}>
              <div > 
              <img src={av3} alt='av3'></img> 
              </div>
              <div style={{marginLeft:'10px'}}>
                <Typography><strong>Freduardo Hill</strong></Typography>
                <Typography style={{color:"#718096" ,fontSize:'16px' ,marginTop:'-4px'}}>freduardo@simmmple.com</Typography>
              </div>
            </div>
            </TableCell>
            <TableCell style={{align:"center"}}>
            <Typography>
            <strong >Manager</strong>
            </Typography>
            <Typography style={{color:"#718096" ,fontSize:'16px' ,marginTop:'-4px'}}>Organization</Typography>
           </TableCell>
            <TableCell><img src={on3} alt='on3'></img></TableCell>
            <TableCell><strong>14/06/21</strong></TableCell>
            <TableCell color="#718096">Edit</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            <div  style={{display:"flex"}}>
              <div > 
              <img src={av4} alt='av4'></img> 
              </div>
              <div style={{marginLeft:'10px'}}>
                <Typography><strong>Daniel Thomas</strong></Typography>
                <Typography style={{color:"#718096" ,fontSize:'16px' ,marginTop:'-4px'}}>thomas@simmmple.com</Typography>
              </div>
            </div>
            </TableCell>
            <TableCell style={{align:'center'}}>
            <Typography>
            <strong >Programmer</strong>
            </Typography>
            <Typography style={{color:"#718096" ,fontSize:'16px' ,marginTop:'-4px'}}>Developer</Typography>
              </TableCell>
            
            <TableCell><img src={off2} alt='off2'></img></TableCell>
            <TableCell><strong>14/06/21</strong></TableCell>
            <TableCell color="#718096">Edit</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
            <div  style={{display:"flex"}}>
              <div > 
              <img src={av5} alt='av5'></img> 
              </div>
              <div style={{marginLeft:'10px'}}>
                <Typography><strong>Mark Wilson</strong></Typography>
                <Typography style={{color:"#718096" ,fontSize:'16px' ,marginTop:'-4px'}}>mark@simmmple.com</Typography>
              </div>
            </div>
            </TableCell>
            <TableCell >
            <Typography>
            <strong >Designer</strong>
            </Typography>
            <Typography style={{color:"#718096" ,fontSize:'16px' ,marginTop:'-4px'}}>UI/Ux Design</Typography>
              </TableCell>
            
            <TableCell><img src={off3} alt='off3'></img></TableCell>
            <TableCell><strong>14/06/21</strong></TableCell>
            <TableCell color="#718096" >Edit</TableCell>
          </TableRow>

           
        
      </Table>
    </TableContainer>
  );
}
