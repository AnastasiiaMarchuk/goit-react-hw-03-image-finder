export const Searchbar = ({ handleSubmit }) => (
  <div>
    <header>
      <form onSubmit={handleSubmit} role="search">
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
  </div>
);
