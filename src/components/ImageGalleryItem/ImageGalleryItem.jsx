import { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

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
      <div>
        <li onClick={this.openModal}>
          <img src={webformatURL} alt={tags} />
        </li>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <img src={largeImageURL} alt={tags} />
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

// export const ImageGalleryItem = ({ webformatURL, tags }) => {
//   return (
//     <>
//       <li>
//         <img src={webformatURL} alt={tags} />
//       </li>
//       <div>
//         <Modal
//           isOpen={modalIsOpen}
//           onAfterOpen={afterOpenModal}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//           <button onClick={closeModal}>close</button>
//           <p>I am a modal</p>
//         </Modal>
//       </div>
//     </>
//   );
// };
