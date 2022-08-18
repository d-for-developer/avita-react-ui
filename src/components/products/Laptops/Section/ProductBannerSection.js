import React from 'react'
import Row from 'react-bootstrap/Row';
import mobBanner from '../../../assets/product/mobBanner.jpg';
import webBanner from '../../../../components/assets/product/webBanner.jpg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function ProductBannerSection() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Row>
   <img
            className="d-block w-100"
            src={matches ? (
              mobBanner
            ) : (
              webBanner
            )}
            alt="First slide"/>
    </Row>
  )
}

export default ProductBannerSection