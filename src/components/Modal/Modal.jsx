import Modal from 'react-modal';
import { CloseButton, Icon, Image } from './Modal.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 20,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    borderRadius: '0px',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onRequestClose, largeImageURL, tags }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <Image src={largeImageURL} alt={tags} />
      <CloseButton onClick={onRequestClose}>
        <Icon />
      </CloseButton>
    </Modal>
  );
};
