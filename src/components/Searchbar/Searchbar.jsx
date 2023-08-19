import { toast } from 'react-toastify';
import { Button, Form, Input, Wrapper, Icon } from './Searchbar.styled';

export const Searchbar = ({ changeQuery, handleSubmit }) => {
  const handleSearchSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.elements.query.value;
    e.target.reset();

    if (newQuery !== '') {
      return handleSubmit(newQuery);
    }
    toast.warn('Please enter your search query.');
  };
  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSearchSubmit} role="search">
          <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Button type="submit">
            <Icon />
          </Button>
        </Form>
      </Wrapper>
    </>
  );
};
