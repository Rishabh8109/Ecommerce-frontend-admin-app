
import React , {useState , useEffect} from 'react';
import Drawer from '../components/assets/Drawer';
import {BrowserRouter as Router , Route , Switch , Redirect , useLocation } from 'react-router-dom';
import MainDashboard from './Dashboard/MainDashboard';
import Product from './product/Product';
import Orders from './orders/Orders';
import {useLastLocation} from 'react-router-last-location';
import PrivateRoutes from '../hoc/PrivateRoutes';

function Dashboard() {
  const [path , setPath] = useState('');
  const token = localStorage.getItem('token');
  const location = useLocation();


  return (
    <Router>
            <div className="row">
                  <div className="col-2 drawer" style={{backgroundColor : '#14274e'}}>
                    <Drawer />
                  </div>
                <div className="col-10" style={{backgroundColor : '#f1f6f9'}}>
                        <Switch>
                          
                            <PrivateRoutes  path="/AdminDashboard" component={MainDashboard}/>
                           
                       </Switch>
                  </div>
              </div>
         </Router>
  );
}


export default Dashboard;
