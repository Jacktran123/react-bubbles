import React, {useState} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Form, Label, Input, FormGroup, Button, Spinner} from 'reactstrap';

const Login = () => {
   const [user,setUser]=useState({username:'', password: ''});
   const [isloading,setLoading]=useState(false );
    const history = useHistory();

    const LogIn=(e)=>{
      e.preventDefault();
      axios
      .post('http://localhost:5000/api/login',user)
      .then(res=>{
        console.log(res); 
        localStorage.setItem('token', res.data.payload)})
      .catch(err=> console.error(err));
      setLoading(true);
      setTimeout(()=> 
        history.push('/BubblePage')
      ,2000)
    }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <Form onSubmit={LogIn}>
      <FormGroup>
        <Label>Username:</Label>
        <Input type='text' onChange={(e)=> setUser({...user,username: e.target.value})}/>
      </FormGroup>
      <FormGroup>
        <Label> Password:</Label>
        <Input type='password' onChange={(e)=>setUser({...user,password: e.target.value})}/>
      </FormGroup>
      {isloading ? <Spinner style={{ width: '3rem', height: '3rem', margin: '0 auto'}}  color='primary'/> : <Button type='submit' color='primary'> Login</Button>}
    </Form>
     
  );
};

export default Login;
