import React from 'react';
import {List , ListItem ,ListItemText , ListItemIcon } from '@material-ui/core';
import DevicesIcon from '@material-ui/icons/Devices';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import {NavLink} from 'react-router-dom';

function Drawer() {
  return (
    <div className="sideDrawer text-white" >
     <List>
        <NavLink exact to="/" className="link">
        <ListItem button>
            <ListItemIcon>
                <HomeOutlinedIcon className="text-white"/>
            </ListItemIcon>
            <ListItemText  primary="Dashboard" />
        </ListItem>
        </NavLink>
      <NavLink to="/Category" className="link">
        <ListItem button >
            <ListItemIcon>
                <CategoryOutlinedIcon className="text-white"/>
            </ListItemIcon>
            <ListItemText  primary="Category" />
        </ListItem>
      </NavLink>
      <NavLink to="/Products" className="link">
        <ListItem button >
            <ListItemIcon>
                <DevicesIcon className="text-white"/>
            </ListItemIcon>
            <ListItemText  primary="Products" />
        </ListItem>
      </NavLink>
      <NavLink to="/Orders" className="link">
      <ListItem button>
         <ListItemIcon>
             <ShoppingCartOutlinedIcon className="text-white"/>
         </ListItemIcon>
         <ListItemText  primary="Orders" />
       </ListItem>
      </NavLink>
     </List>
    </div>
  )
}

export default Drawer;
