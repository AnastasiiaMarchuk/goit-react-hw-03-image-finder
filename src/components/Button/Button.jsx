import { LoadMoreButton } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <LoadMoreButton onClick={loadMore} type="button">
      Load more
    </LoadMoreButton>
  );
};
