import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';

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

      const images = await fetchImages(searchQuery, page);
      this.setState({ images, loading: false });
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
    this.changeQuery(newQuery);
    e.target.reset();
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading } = this.state;

    return (
      <div>
        <h1>Gallery</h1>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        <button onClick={this.handleLoadMore} type="button" disabled={loading}>
          {loading ? 'Loading...' : 'Load more'}
        </button>
      </div>
    );
  }
}
