import { Button, Form, Input, Wrapper, Icon } from './Searchbar.styled';

export const Searchbar = ({ handleSubmit }) => (
  <>
    <Wrapper>
      <Form onSubmit={handleSubmit} role="search">
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
