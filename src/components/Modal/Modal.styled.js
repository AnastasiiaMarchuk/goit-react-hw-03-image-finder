import { styled } from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Image = styled.img`
  max-height: 750px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

export const Icon = styled(AiOutlineCloseCircle)`
  font-size: 36px;
  color: #fff;
`;
