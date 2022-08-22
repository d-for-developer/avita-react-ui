import React from 'react'
import Row from 'react-bootstrap/Row';
import mobBanner1 from '../../../../components/assets/product/Satus/1.png';
import webBanner1 from '../../../../components/assets/product/Satus/1.jpg';
import mobBanner2 from '../../../../components/assets/product/Satus/2.png';
import webBanner2 from '../../../../components/assets/product/Satus/2.jpg';
import mobBanner3 from '../../../../components/assets/product/Satus/3.png';
import webBanner3 from '../../../../components/assets/product/Satus/3.jpg';
import mobBanner4 from '../../../../components/assets/product/Satus/4.png';
import webBanner4 from '../../../../components/assets/product/Satus/4.jpg';
import mobBanner5 from '../../../../components/assets/product/Satus/5.png';
import webBanner5 from '../../../../components/assets/product/Satus/5.jpg';
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
          <Row>
          <img
            className="d-block w-100"
            src={matches ? (
              mobBanner3
            ) : (
              webBanner3
            )}
            alt="Third slide" />
        </Row>
            <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mobBanner4
              ) : (
                webBanner4
              )}
              alt="Fourth slide" />
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={matches ? (
                mobBanner5
              ) : (
                webBanner5
              )}
              alt="Fifth slide" />
          </Row>
          </>
  )
}

export default ProductBannerSection