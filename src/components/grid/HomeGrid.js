import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme, useMediaQuery } from '@mui/material';


export default function HomeGrid() {


  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <section className='homeGrid'>
      <ImageList sx={{ width: `${matchDownMd ? 350 : 1920}`, height:  `${matchDownMd ? 1036 : 259}` }} cols={matchDownMd ? 1 : 4 } rowWidth={matchDownMd ? 350 : 1920 } rowHeight={259}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img className='ImageListItem'
              src={`${item.img}?w=1920&fit=crop&auto=format`}
              srcSet={`${item.img}?w=1920&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}

const itemData = [
  {
    img: 'https://avita.com/images/demo/promo-01-en.jpg',
    title: 'Chill in Style',
  },
  {
    img: 'https://avita.com/images/demo/promo-02-en.jpg',
    title: 'AVITA Experience',
  },
  {
    img: 'https://avita.com/images/demo/promo-03-en.jpg',
    title: 'About AVITA',
  },
  {
    img: 'https://avita.com/images/demo/promo-04-en.jpg',
    title: 'Warranty & Register',
  },

];
