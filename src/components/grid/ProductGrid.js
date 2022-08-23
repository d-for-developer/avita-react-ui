import React from 'react'
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import img1 from '../assets/latest/1.png';
import img2 from '../assets/latest/2.png';
import img3 from '../assets/latest/3.png';
import img4 from '../assets/latest/4.png';
import img5 from '../assets/latest/5.png';
import img6 from '../assets/latest/6.png';
import img7 from '../assets/latest/7.png';
import img8 from '../assets/latest/8.png';
import img9 from '../assets/latest/9.png';
import img10 from '../assets/latest/10.png';
import img11 from '../assets/latest/11.png';
import img12 from '../assets/latest/12.png';




const ProductGrid = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className='container mt-4'>
            {matches?(<h4 style={{textAlign:'center'}}>LATEST PRODUCTS</h4>):(<Divider sx={{ fontSize:'26px', overflowY:'hidden'}}>LATEST PRODUCTS</Divider>)}
            <ImageList variant="masonry" className='mt-4' cols={matches?3:5} gap={matches?3:8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

        </div>
    )
}

const itemData = [
    {
      img: img1,
      title: 'WRISTIO',
    },
    {
      img: img2,
      title: 'WRISTIO',
    },
    {
      img: img3,
      title: 'WRISTIO',
    },
    {
      img: img4,
      title: 'WRISTIO',
    },
    {
      img: img5,
      title: 'WRISTIO',
    },
    {
      img: img6,
      title: 'WRISTIO',
    },
    {
      img: img7,
      title: 'WRISTIO',
    },
    {
      img: img8,
      title: 'WRISTIO',
    },
    {
      img: img9,
      title: 'WRISTIO',
    },
    {
      img: img10,
      title: 'WRISTIO',
    },
    {
      img: img11,
      title: 'WRISTIO',
    },
    {
      img: img12,
      title: 'WRISTIO',
    },
  ];

export default ProductGrid