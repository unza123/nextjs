import { useState } from 'react';
import Box from '@mui/material/Box';
import { Avatar, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { Stack } from '@mui/system';
import valid from '../utils/valid';
import { blue, red } from '@mui/material/colors';
import { postData } from '../utils/fetchData';
export default function Register() {
  const initialState = { name: '', email: '', password: '', cf_passowrd: '' }
  const [userData, setUserData] = useState(initialState)
  const [errorMessage, setErrorMessage] = useState()
  const { name, email, password, cf_password } = userData
  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value })
    
  }
  const errMsg = valid(name, email, password, cf_password)
// var errorMessage;
// if(errMsg) {
  
  // console.log(errMsg[2])
  const handleSubmit = async(e)=>{
e.preventDefault();
console.log(userData)

const errMsg = valid(name, email, password, cf_password)
// var errorMessage;
if(errMsg) {
  console.log(errMsg[0])
   setErrorMessage(errMsg)
}
setUserData(initialState)
const res = await postData('auth/register', userData)
console.log("After ubmitting Data", res)
  }
  console.log("USer", userData)
  return (
    <Box
      sx={{
        width: 800,
        minWidth: 400,
        height: "auto",
        display: "flex",
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 'auto',
        marginBottom:'10%',
        color: 'white',
        // backgroundColor: '#C1A3A3',
        background: 'rgba(255,255,255,0.1)',
        boxShadow: '0px 4px 16px rgba(0,0,0,0.7)',
        opacity: "0.6",
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
     <Box sx={{ textAlign: 'center' }} >
        <Typography variant="h4">Welcome back</Typography>
        <Typography variant="h6">Join the world largest company</Typography>

      </Box>
      
      <Box sx={{
        flexGrow: 1,
        // justifyContent:"center",
        margin: 'auto'
      }}>
        <form >
  
        <Typography>Register</Typography>

        <Box sx={{ width: '900', margin: 'auto', marginTop: '20px', }}>
          <Box>
            <TextField id="outlined-basic" name="name" value={name} label="Please Enter Name" variant="outlined" sx={{ background: 'white', width: '100%' }} onChange={handleChangeInput}/>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember for 30 days" />
            </FormGroup>
          </Box>
            <Box>
            <TextField id="outlined-basic" name="email" value={email} label="Please Enter email" variant="outlined" sx={{ background: 'white', width: '100%' }} onChange={handleChangeInput}/>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember for 30 days" />
            </FormGroup>
            {errorMessage && errorMessage}
            
            </Box>
            <Box>
            <TextField id="outlined-basic" name="password" value={password} label="Please Enter Password" variant="outlined" sx={{ background: 'white', width: '100%' }} onChange={handleChangeInput}/>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember for 30 days" />
            </FormGroup>
          <p style={{color: red}}> {errorMessage && errorMessage}</p> 
            
            </Box>
          <Box>
            
            <TextField id="outlined-basic" name="cf_password" value={cf_password} label="Please Enter Confirm Password" variant="outlined" sx={{ background: 'white', width: '100%' }} onChange={handleChangeInput}/>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember for 30 days" />
            </FormGroup></Box>{/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
<p>{errorMessage && errorMessage.cf_password}</p>
        </Box>
        <Box sx={{ width: 400, display: 'flex', flexDirection: 'column', margin: 'auto', marginTop: '20px' }}>
          <Button variant="contained" sx={{ width: 400, padding: "10px", marginBottom: '12px' }} onClick={handleSubmit}>Create new account</Button>

          {/* <Button variant="contained" sx={{ width: 400, padding: "10px", marginBottom: '12px' }}>Sign in</Button>
 */}
 
        </Box>
        </form>
<p>Already have an account <button>Sign in</button></p>
      </Box>
    
    </Box>
  );
}
