import { styled } from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const Wrapper = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;
  color: #fff;
  /* background-color: #1b434d; */
  /* background: rgb(28, 140, 142); */
  background: linear-gradient(
    31deg,
    rgba(20, 93, 94, 1) 0%,
    rgba(2, 26, 49, 1) 100%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
export const Icon = styled(BsSearch)`
  font-size: 24px;
  color: #1b434d;
`;

export const Button = styled.button`
  display: block;
  width: 60px;
  height: 48px;
  border: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #61d284;
  &:hover {
    background-color: #c4f54e;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 5px;
  &::placeholder {
    font: inherit;
    font-size: 20px;
  }
`;
