import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    more: true,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true });

      try {
        const images = await fetchImages(query, page);

        if (images.length !== 0) {
          return this.setState(prevState => ({
            images: [...prevState.images, ...images],
            more: images.length === 12,
          }));
        }
        toast.warn(
          'Sorry, no images were found for your request. Enter a valid query'
        );
      } catch (error) {
        toast.error('An error occurred while fetching images.');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
      more: true,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading, more } = this.state;

    return (
      <>
        <Searchbar handleSubmit={this.changeQuery} />
        {loading && <Loader />}
        <ImageGallery images={images} />
        {images.length > 0 && more && <Button loadMore={this.handleLoadMore} />}
        <ToastContainer />
      </>
    );
  }
}
