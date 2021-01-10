import React  from 'react';
import './App.css';
import Appbar from './components/Appbar';
import {BrowserRouter as Router , Route , Switch   } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard/MainDashboard';
import Products from './pages/product/Product';
import Orders from './pages/orders/Orders';
import SignUp from './pages/SignUp';
import PrivateRoutes from './hoc/PrivateRoutes';
import Drawer from './components/assets/Drawer';
import Category from './pages/Category/Category';




function App() {
 
  return (
       <Router>
         <div className="App">

             <div className="row">
                <div className="col-sm-12">
                   <Appbar />
                </div>
             </div>
             <div className="row">
                <div className="col-2 sidebar">
                   <Drawer />
                </div>
                <div className="col-10 main">
                  <Switch> 
                    <PrivateRoutes exact path="/" component={Dashboard}/>
                    <PrivateRoutes path="/Products" component={Products}/>
                    <PrivateRoutes path="/Orders" component={Orders}/>
                    <PrivateRoutes path="/Category" component={Category}/>
                    <Route path="/SignIn" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} /> 
                  </Switch> 
                </div>
             </div> 
          </div>
       </Router> 
  );
}

export default App;
