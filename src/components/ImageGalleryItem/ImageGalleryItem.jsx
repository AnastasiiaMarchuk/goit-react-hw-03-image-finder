import { ImageModal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Image, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { modalIsOpen } = this.state;

    return (
      <>
        <Item onClick={this.openModal}>
          <Image src={webformatURL} alt={tags} />
        </Item>
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      </>
    );
  }
}
