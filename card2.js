import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BasicTable from './table1';
import BasicTable2 from './table2';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ Width: "100%", marginTop:1, borderRadius:"15px",
    
    top: "101px",
    left:"298px",
    
    
      }}>
      <CardHeader
        
        
        action={
          <IconButton aria-label="settings">
            
          </IconButton>
        }
        title="Projects"
        
        
        
        
      />
          <div style={{display:'flex' }}>

            <CheckCircleOutlinedIcon  
            style={{ backgroundColor:"#68D391", marginLeft:"17px"}} 
            /><Typography style={{color:"#A0AEC0"}}>&nbsp;30 done this month</Typography>
            </div>
        <BasicTable2 
        />
        
      
     </Card>
  );
}
