import React from 'react'
import './style.css'
import logo from './Images/Capture.JPG'
import {Typography,AppBar,Toolbar, Container,TextField,Button, Box}from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  text:{marginTop:"40px",
  textAlign:"center"
}
})
const App = () => {
  const classes = useStyles()
  return (
    <div>
    <AppBar position='static' >
      <Toolbar>
      <Box 
        component='img'
        style={{ height:"50px" ,width:'100px'}}
        alt="Logo"
        src={logo}
      />
      <Typography variant='h4'>Vision InfoTech</Typography>
      </Toolbar>
    </AppBar>
    <Container className={classes.text}>
      <Typography variant='h3'>We Provide your Vision</Typography>
      <Typography paragraph>It is Our Pleasure To Serve You</Typography>
      </Container>
      <center>
        <Container>
        <Typography variant='h5'>Contact Us</Typography>
        <form>
          <TextField style={{'width':'500px',margin:'10px'}} type="text" label='Name' variant='outlined'/><br/>
          <TextField style={{'width':'500px',margin:'10px'}} type="email" label='Email' variant='outlined'/><br/>
          <TextField style={{'width':'500px',margin:'10px'}} type="text" label='Proposal' variant='outlined'/><br/>
          <TextField style={{'width':'500px',margin:'10px'}} type="text" label='Adress' variant='outlined'/><br/>
          <TextField style={{'width':'500px',margin:'10px'}} type="number" label='Mobile' variant='outlined'/><br/>
          <Button variant='contained' className='btn-grad btn-grad:hover'>Submit</Button>
          </form>
        </Container>
      </center>
   </div>
  )
}

export default App
