import React from 'react'
import Row from 'react-bootstrap/Row';
import mobBanner1 from '../../../../components/assets/product/Wristo/1.png';
import webBanner1 from '../../../../components/assets/product/Wristo/1.jpg';
import mobBanner2 from '../../../../components/assets/product/Wristo/2.png';
import webBanner2 from '../../../../components/assets/product/Wristo/2.jpg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function ProductBannerSection() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    <Row>
      <img
        className="d-block w-100"
        src={matches ? (
          mobBanner1
        ) : (
          webBanner1
        )}
        alt="First slide" />
    </Row>
        <Row>
        <img
          className="d-block w-100"
          src={matches ? (
            mobBanner2
          ) : (
            webBanner2
          )}
          alt="Second slide" />
      </Row>
      
          </>
  )
}

export default ProductBannerSection