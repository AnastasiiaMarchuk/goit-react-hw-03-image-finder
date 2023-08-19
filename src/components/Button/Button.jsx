import { LoadMoreButton } from './Button.styled';

export const Button = ({ onClick, loading }) => {
  return (
    <LoadMoreButton onClick={onClick} type="button">
      Load more
    </LoadMoreButton>
  );
};
