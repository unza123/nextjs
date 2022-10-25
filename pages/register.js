import  {useState} from 'react';
import Box from '@mui/material/Box';
import { Avatar, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { Stack } from '@mui/system';
export default function Register() {
 const initialState = {name:'', email:'', password:'', cf_passowrd:''}
 const [userData, setUserData] = useState(initialState)
 const handleChangeInput = e => {
  const {name,value}= e.target;
  setUserData({...userData, [name]:value})
 }
  return (
    <Box
      sx={{
        width: 800,
        minWidth:400,
        height: 500,
        display:"flex",
        justifyContent:'center',
        flexDirection:'column',
        margin:'auto',
        color:'white',
        // backgroundColor: '#C1A3A3',
        background: 'rgba(255,255,255,0.1)',
        boxShadow: '0px 4px 16px rgba(0,0,0,0.7)',
        opacity:"0.6",
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
         {/* <Card sx={{ minWidth: 800,
         background: 'rgba(255,255,255,0.1)',
         boxShadow: '0px 4px 16px rgba(0,0,0,0.7)',
         opacity:"0.8",
         display:"flex",
        justifyContent:'center',
         }}>
      <CardContent> */}
        <Box sx={{textAlign:'center'}}>
        <Typography variant="h4" sx={{color:"yellow"}}>Welcome back</Typography>
        <Typography variant="h6">Join the world largest company</Typography>
    
        </Box>
    
    {/* </CardContent>
   
 
    </Card> */}
    
    <Box sx={{ flexGrow: 1 ,
    // justifyContent:"center",
    margin:'auto'
    }}>
        <Typography>Recent logins</Typography>
     <Stack direction="row" spacing={5}>
        
      {/* <Avatar alt="Remy Sharp" src="first.png" /> */}
      <Card 
            sx={{ width: 100,display:"flex",flexDirection:"column",
             alignItems:'center', 
             padding:'5px'  }}
             >
    
      
     <Avatar alt="Remy Sharp" src="first.png" />
     <Typography>Zahid</Typography>
    </Card>
    <Card 
            sx={{ width: 100,display:"flex",flexDirection:"column",
             alignItems:'center', 
             padding:'5px'  }}
             >
    
      
     <Avatar alt="Remy Sharp" src="first.png" />
     <Typography>Zahid</Typography>
    </Card>
    <Card 
            sx={{ width: 100,display:"flex",flexDirection:"column",
             alignItems:'center', 
             padding:'5px'  }}
             >
    
      
     <Avatar alt="Remy Sharp" src="first.png" />
     <Typography>Zahid</Typography>
    </Card>
</Stack>
<Box sx={{width:600, display:'flex', justifyContent:'space-between', margin:'auto', marginTop:'20px'}}>
<Box>
<TextField id="outlined-basic" label="Please username or email" variant="outlined" sx={{ background:'white'}}/>
<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember for 30 days" />
</FormGroup></Box>
<Box>
<TextField id="outlined-basic" label="Please username or email" variant="outlined" sx={{ background:'white'}}/>
<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember for 30 days" />
</FormGroup></Box>{/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}

   {/* <Box sx={{backgroundColor:"yellow", width:600, display:'flex', justifyContent:'center', margin:'auto', marginTop:'20px'}}> */}
    

   {/* </Box> */}
    </Box>
    <Box sx={{width:400, display:'flex', flexDirection:'column',  margin:'auto', marginTop:'20px'}}>

    <Button variant="contained" sx={{width:400, padding:"10px",marginBottom:'12px'}}>Sign in</Button>
    <Button variant="contained" sx={{width:400,padding:"10px", marginBottom:'12px'}}>Create new account</Button>

    
    </Box>

    </Box>
  
    </Box>
  );
}
