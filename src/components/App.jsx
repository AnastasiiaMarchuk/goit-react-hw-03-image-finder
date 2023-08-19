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
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const searchQuery = query.split('/')[1];

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true });

      try {
        const images = await fetchImages(searchQuery, page);

        if (images.length !== 0) {
          return this.setState({ images, loading: false });
        }
        toast.warn(
          'Sorry, no images were found for your request. Enter a valid query'
        );
      } catch (error) {
        toast.error('An error occurred while fetching images.');
      }
    }
  }

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.elements.query.value;
    e.target.reset();

    if (newQuery !== '') {
      return this.changeQuery(newQuery);
    }
    toast.warn('Please enter your search query.');
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        const appElement = document.getElementById('root');
        if (appElement) {
          appElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    );
  };

  render() {
    const { images, loading } = this.state;

    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        {loading && <Loader />}
        <ImageGallery images={images} />
        {images.length > 0 && <Button loadMore={this.handleLoadMore} />}
        <ToastContainer />
      </>
    );
  }
}
