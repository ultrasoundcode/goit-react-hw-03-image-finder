import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  handleClick = () => {
    const { largeImageURL, onImageClick } = this.props;

    onImageClick(largeImageURL);
  };

  render() {
    const { webformatURL, tags } = this.props;

    return (
      <li className={styles.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={styles.ImageGalleryItemImage}
          onClick={this.handleClick}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
