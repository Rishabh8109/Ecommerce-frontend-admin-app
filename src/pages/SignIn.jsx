import React , {useState} from 'react';
import {SignInRequest , SignInSuccess , SignInError} from '../stateManager/redux/AuthenticationState/authAction';
import {useSelector , useDispatch} from 'react-redux';
import {Redirect, useHistory} from 'react-router-dom';
import axios from 'axios';

 import Loaders from '../components/Loader';
import {
  Form,
  FormGroup,
  Card,
  Input,
  Label,
  Container,
  Button,
   Alert
} from 'reactstrap';



function SignIn() {
 
  const [Email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const initialState = useSelector(state => state.signin);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
 
  const login = (e) => {
    e.preventDefault();
     dispatch(SignInRequest());

        axios.post('http://localhost:5000/api/admin/signin' , {
          Email:Email,
          password: password
        }).then(res => {
          dispatch(SignInSuccess(res.data));
             setVisible(true);
             history.push('/');
        }).catch(err => {
            dispatch(SignInError(err.response.data.error));
            setVisible(true);
        });
          setEmail('');
          setPassword('');
       
      } 
 
     //alert dismiss
     const onDismiss = () => setVisible(false);       
   return (
      <div>
        <Container>
         <h4 className="pop-700 text-center mt-4">E-<span className="text-primary">MART</span></h4>
         <h2 className="text-primary Roboto text-center text-dark">Sign in your account</h2>
          <Card className="mx-auto mt-5 w-50 px-5 py-4 shadow-sm rounded card">
             {initialState.loading &&  <Loaders />}
            <Alert color={initialState.isError ? 'danger' : 'success'} isOpen={visible} toggle={onDismiss}>
              {initialState.isError ? (
                <p>{initialState.error}</p>
              ) : (
                <p>{initialState.message}</p>
              )}
            </Alert>
             <Form onSubmit={login}>
               <FormGroup className="mb-4">
                  <Label for="Email" className="label">Email address</Label>
                  <Input type="text" placeholder="you@gmail.com" value={Email} onChange={(e) => setEmail(e.target.value)} autoComplete/>
               </FormGroup>
               <FormGroup>
                  <Label for="Password" className="label">Password</Label>
                  <Input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete/>
               </FormGroup>
             <div className="d-flex py-2 justify-content-between">
               <FormGroup check>
                  <Label check>
                    <Input type="checkbox" required/>{' '}
                     Remember me
                  </Label>
                </FormGroup>
                <h6 className="text-primary">forgot your password</h6>
             </div>
             <Button type="submit" color="primary" size="lg" block className="Roboto mt-3" disabled={!Email || !password}>Sign in</Button>            
           </Form>
          </Card>
       </Container>

     </div>
   )
}
export default SignIn;

// vishwakarmarishabh378@gmail.com