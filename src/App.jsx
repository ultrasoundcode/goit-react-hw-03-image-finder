import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import { fetchImages } from './components/API';
import '../src/index.css';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      await this.setState({ page: 1, images: [] }, await this.fetchImages);
    }

    if (prevState.page !== page && page !== 1) {
      await this.fetchImages();
    }
  }

  handleFormSubmit = query => {
    this.setState({ query });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleImageClick = largeImageURL => {
    this.setState({ selectedImage: largeImageURL, showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  fetchImages = async () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const images = await fetchImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}

        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal onClose={this.handleModalClose}>
            <img src={selectedImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
