import React ,{useState} from 'react';
import {SignUpRequest , SignUpSuccess , SignUpError} from '../stateManager/redux/AuthenticationState/authAction';
import axios from 'axios';
import {useSelector , useDispatch} from 'react-redux';
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

function SignUp() {
     const [username , setUsername] = useState('');
     const [Email , setEmail] = useState('');
     const [password , setPassword] = useState('');
     const [visible, setVisible] = useState(false);
     const dispatch = useDispatch();
     const initialState = useSelector(state => state.signup);
        //alert dismiss
        const onDismiss = () => setVisible(false);
        
        // user signup
        const Signup = (e) => {
            e.preventDefault();
          dispatch(SignUpRequest());

          axios.post('http://localhost:5000/api/admin/signup' , {
            username : username,
            Email:Email,
            password: password
           }).then(res => {
            console.log(res.data);
              dispatch(SignUpSuccess(res.data))
              setVisible(true);
           }).catch(err => {
              dispatch(SignUpError(err.response.data.error))
              setVisible(true);
           });

           setEmail('');
           setPassword('');
           setUsername('');
        } 
         
   return (
     <div>
          <Container>
             <h4 className="pop-700 text-center mt-4">E-<span className="text-primary">MART</span></h4>
            <h2 className="text-primary Roboto text-center text-dark">Signup your account</h2>
             <Card className="mx-auto mt-5 w-50 px-5 py-4 shadow-sm rounded">
               <Alert color={initialState.isError ? 'danger' : 'success'} isOpen={visible} toggle={onDismiss}>
               {initialState.isError ? (
                <p>{initialState.error}</p>
              ) : (
                <p>{initialState.message}</p>
              )}
               </Alert>
                <Form onSubmit={Signup}>
                  <FormGroup>
                     <Label for="Password" className="label">Username</Label>
                     <Input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                  </FormGroup>
                  <FormGroup className="mb-4">
                     <Label for="Email" className="label">Email address</Label>
                      <Input type="text" placeholder="you@gmail.com" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                  </FormGroup>
                  <FormGroup>
                     <Label for="Password" className="label">Password</Label>
                    <Input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </FormGroup>
                <div className="d-flex py-2 justify-content-between">
                  <FormGroup check>
                     <Label check>
                       <Input type="checkbox" />{' '}
                      Remember me
                     </Label>
                   </FormGroup>
                </div>
                <Button type="submit" color="primary" size="lg" block className="Roboto mt-3" >Sign up</Button>
              </Form>
             </Card>
          </Container>
     </div>
   )
}

export default SignUp;
