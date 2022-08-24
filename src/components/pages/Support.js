import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SideDrawer from '../layouts/SideDrawer'
import HomeBanner from '../banner/HomeBanner'
import Container from 'react-bootstrap/Container';
import Divider from '@mui/material/Divider';


function Support() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  
  return (
    <>

      {matches ? <SideDrawer /> : <Header />}
      <HomeBanner />
      <>
        <Container className='mt-4 mb-4'>
          {matches ? (<h4 style={{ textAlign: 'center', marginBottom: '25px' }}> <br /> Have a question?</h4>) : (<Divider sx={{ fontSize: '36px', overflowY: 'hidden', marginBottom: '35px' }}>  Have a question?</Divider>)}
          <p className='text-center'>Drop us an email at support@novita-india.com and our experts will get back to you within 24 hours.</p>
         
          <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

        </Container>
      </>
      {matches ? <></> : <Footer />}
      <Copyright />
    </>
  )
}

export default Support