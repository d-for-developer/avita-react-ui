import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Logo from '../../Logo';



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function SideDrawer() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="wrapper">
      <nav id="sidebar">

        <div className="sidebar-header mt-2">
                  <Link to="/">
                    <Logo/>
                   </Link>
        </div>

        <div className='sidebar mt-2'>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>
                <h5 className='mt-2' id="headingOne">Dashboard</h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-unstyled components">

                  <li className="active navlink">
                    <Link exact to="/admin/dashboard">Home </Link>

                  </li>
                  <li className="navlink">
                    <Link to="/admin/analytics">Analytics </Link>

                  </li>
                  <li className="navlink">
                    <Link to="/admin/all-countries">Countries</Link>

                  </li>
                  <li className="navlink">
                    <Link to="/admin/customers">Customers</Link>

                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>
                <h5 className='mt-2' id="headingOne">Banner</h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-unstyled components">

                  <li className="navlink">
                    <Link to="/admin/banners">All Banners</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/admin/grid-layout">Grid Layout</Link>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>
                <h5 className='mt-2' id="headingOne">News Events & Blogs</h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-unstyled components">

                  <li className="navlink">
                    <Link to="/admin/blogs">Blogs</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/admin/articles">Articles</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/admin/news">News & Events</Link>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography>
                <h5 className='mt-2' id="headingOne">Products</h5>

              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-unstyled components">

                  <li className="navlink">
                    <Link to="/admin/products">All Products</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/admin/product-categories">Product Categories</Link>
                  </li>
                </ul>

              </Typography>
            </AccordionDetails>
          </Accordion>


          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
              <Typography>
                <h5 className='mt-2' id="headingOne">Warranty Details</h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-unstyled components">
                  <li className='navlink'>
                    <Link to="/admin/extended-warranty">Extended Warranty</Link>
                  </li>
                  <li className='navlink'>
                    <Link to="/admin/warranty-registered">Warranty Registered</Link>
                  </li>

                  <li className='navlink'>
                    <Link to="/admin/invoices">All Invoices</Link>
                  </li>
                  <li className='navlink'>
                    <Link to="/admin/damage-protection">Accidental Damage Protection </Link>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>




          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
              <Typography>
                <h5 className='mt-2' id="headingOne">Services</h5>

              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-unstyled components">

                  <li className='navlink'>
                    <Link to="/admin/all-shops">Where to Buy</Link>
                  </li>
                  <li className='navlink'>
                    <Link to="/admin/service-center">Service Center</Link>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>




          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
              <Typography>
                <h5 className='mt-2' id="headingOne">Settings</h5>

              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-unstyled components">

                  <li className="navlink">
                    <Link to="/admin/settings">Admin Settings </Link>
                  </li>
                  <li className="navlink">
                    <Link to="/admin/change-password">Change Password </Link>
                  </li>
                  <li className="navlink">
                    <Link to="/admin/other-pages">Other Pages </Link>
                  </li>

                  <li className="navlink">
                    <Link to="/admin/logout">Logout </Link>
                  </li>
                </ul>


              </Typography>
            </AccordionDetails>
          </Accordion>



        </div>
      </nav>
    </div>
  );
}
