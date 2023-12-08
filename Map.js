import * as React from 'react';

import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import ChinaJson from './Assets/china.json'
import Typography from '@mui/material/Typography';
import {
    Marker
  } from "react-simple-maps";
import favicon from './Assets/favicon.ico' 

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import WaterDropIcon from '@mui/icons-material/WaterDrop';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';

import '../CSS/Marker.css';


function Map(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [geoUrl, setGeoUrl] = React.useState('./Assets/china.json');
  const [position, setPosition] = React.useState({ coordinates: [0, 0], zoom: 1 });
  const [province, setProvince] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick = (event) => {
    console.log("HANDLECLICK")
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("HANDLECLOSE")
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div sx={{float:'left', width:'100%', backgroundColor:'black', height:'100%',
    alignContent:'flex-start', flex:1, justifyContent:'flex-start'}}>

        <AppBar position="sticky" sx={{background:'transparent', boxShadow:'none'}} >
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ color:'black', flexGrow: 1, opacity:'100%', ml:4 }}>
                    Teas of China
                </Typography>
            </Toolbar>
        </AppBar>

    <Box className="App-header" sx={{ width:'100%', height:'80%', backgroundColor:'white'}}>
    <ComposableMap 
    projection="geoMercator"
    projectionConfig={{
        scale: 150,
      }} >
    <ZoomableGroup
        center={[101.9199,30.1904]}
        zoom={3}
        minZoom={2.5}
        maxZoom={15}
        translateExtent={[[-1000, -1000], [1000, 1000]]}>
      <Geographies geography={ChinaJson}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Tooltip title={geo.properties.name} followCursor>
            <Geography 
            key={geo.rsmKey} 
            geography={geo}
            strokeWidth={0.3}
            stroke="#0FF"
            onClick={(e) => setProvince(geo.properties.name)}
            fill={province === geo.properties.name ? "#FFF" : "#000"}
            style={{
                default: { fill: "#0AA", outline:'none' },
                hover: { fill: "#04D", outline:'none' },
                pressed: { fill: "#000", },
            }} />
            </Tooltip>
          ))
        }
      </Geographies>

      <Tooltip title="PuErh">
      <Marker coordinates={[101.0652,25.1807]} fill="#777" sx={{cursor: 'pointer'}}>        
            <circle class="marker" r={1.5} onClick={handleClick}
            onMouseEnter ={() => 0} 
            onMouseLeave ={() => 0} 
            fill="#F53" />
            <text font-size="4" textAnchor='middle' y="5" >Pu'Erh</text>        
      </Marker>
      </Tooltip>

      {/*  */}
      <Tooltip title="WuYi">
      <Marker coordinates={[118.3008,25.9277]} fill="#777" sx={{cursor: 'pointer'}}>        
            <circle class="marker" r={1.5} onClick={handleClick}
            onMouseEnter ={() => 0} 
            onMouseLeave ={() => 0} 
            fill="#F53" />
            <text font-size="4" textAnchor='middle' y="5" >WuYi</text>        
      </Marker>
      </Tooltip>

      {/* [120.0254,23.5986] alishan */}
      
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        slotProps={{ paper:{style:{maxWidth:'200px'} } }}
      >
        <Box sx={{justifyContent:'center', alignItems:'center' }}>
            <img src={favicon} align='center' width='150px' sx={{ml:"auto", mr:"auto"}} />
            <Typography>CUNTTTTTTTTTTT</Typography>
        </Box>
      </Popover>

      </ZoomableGroup>
    </ComposableMap>    


    <Accordion sx={{width:"300px", position:'fixed', bottom:0, right:0,}}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" sx={{background:'none'}}>
                {province === "" ? "Click on a province" : province}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="body1" sx={{background:'none'}}>
                水仙肉桂
            </Typography>
        </AccordionDetails>
    </Accordion>
    
    
    </Box>


    <Box sx={{width:"300px", position:'fixed', bottom:0, left:0,}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Dark Teas
          </Typography>
          <WaterDropIcon sx={{color:'brown'}} />

        </AccordionSummary>
        <AccordionDetails>
          
        <List>
          <ListItem disablePadding>
            
            <ListItemButton>
              <ListItemText primary="PuErh" />
              <ListItemIcon>
                <InfoOutlinedIcon/>
                </ListItemIcon>
            </ListItemButton>
            
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="LiuBao" />
              <ListItemIcon>
                <InfoOutlinedIcon/>
            </ListItemIcon>
            </ListItemButton>
            
          </ListItem>
        </List>

        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>White Teas</Typography>
          <WaterDropIcon sx={{color:'#EEA'}} />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Black Teas
          </Typography>
          <WaterDropIcon sx={{color:'#F96'}}/>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Yellow Teas</Typography>
          <WaterDropIcon sx={{color:'#FF1'}}/>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    


    {/* <Box sx={{width:'50%', backgroundColor:'white', right:0, justifyContent:'center',
    position:'absolute'}}> */}

            
      {/* </Box> */}
    

    </div>
  )
}

export default Map;