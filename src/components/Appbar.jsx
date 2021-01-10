import React , {useState} from 'react';
import {SignoutRequest , SignoutSuccess , SignoutError} from '../stateManager/redux/AuthenticationState/authAction';
import axios from 'axios';
import {useSelector , useDispatch} from 'react-redux';
import { NavLink , useHistory } from 'react-router-dom';
import {LinearProgress , IconButton} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Button
} from 'reactstrap';

function Appbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const token = localStorage.getItem('token');
  const initialSignupState = useSelector(state => state.signup);
  const initialSigninState = useSelector(state => state.signin);
  const initialSignoutState = useSelector(state => state.signout);
  const dispatch = useDispatch();
  const history = useHistory();
 

  const headers = {
    'Authorization' : `Bearer ${token}`
 }
  const logout = () => {
    dispatch(SignoutRequest());
    axios({
      method : 'post',
      url : 'http://localhost:5000/api/admin/signout',
      headers : headers
    }).then(res => {
         dispatch(SignoutSuccess(res.data));
         history.go(0);
         history.push('/SignIn');
    }).catch(err => {
        dispatch(SignoutError(err.response.data.error));
    });

  }
  //open dropdown
  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  }

   return (
     <div>
      <Navbar color="light" light expand="md" className="shadow-md app-bar">
         <Container>
         <NavbarBrand href="/" className="Quick">E<span className="text-bluevoilet">shop</span></NavbarBrand>
         <NavbarToggler />
         <Collapse  navbar>
           <Nav className="ml-auto text-upper" navbar>
         
              {token && (
                 <>
                 <NavItem className="logout">
                      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                          <DropdownToggle tag="a" className="nav-link">
                            <IconButton>
                                <Avatar className="bg-warning">R</Avatar>
                            </IconButton> 
                          </DropdownToggle>
                       <DropdownMenu>
                         <DropdownItem>Profile</DropdownItem>
                         <DropdownItem onClick={logout}>Logout</DropdownItem>
                       </DropdownMenu>
                     </Dropdown>
                 </NavItem>
                 </>
              )}
         
             {!token  && (
               <>
             <NavItem>
               <NavLink to="/SignIn" className="nav-link text-dark">
                  Login
               </NavLink>
             </NavItem>
             <NavItem>
               <NavLink to="/SignUp" className="nav-link text-dark">
                  Signup
               </NavLink>
             </NavItem>
             </>
             )}
         
           </Nav>
         </Collapse>
       </Container>
       </Navbar>
      
    </div>
   )
}

export default Appbar;
