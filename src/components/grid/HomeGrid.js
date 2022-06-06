import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function HomeGrid() {
  return (
    <section className='homeGrid'>
      <ImageList sx={{ width: 1920, height: 259 }} cols={4} rowWidth={1920} rowHeight={259}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img className='ImageListItem'
              src={`${item.img}?w=1920&fit=crop&auto=format`}
              srcSet={`${item.img}?w=1920&fit=crop&auto=format&dpr=2 2x`}
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
