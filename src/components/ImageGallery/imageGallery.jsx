import React from 'react';
import PropTypes from 'prop-types';
import { List } from './imageGalleryStyled';

import ImageGalleryItem from '../ImageGalleryItem/imageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
