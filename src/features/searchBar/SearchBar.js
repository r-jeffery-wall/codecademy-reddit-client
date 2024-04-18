import { InputGroup, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchSubs } from "../PopularSubs/PopularSubsSlice";
import { searchPosts } from "../posts/PostsSlice";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const submitSearch = (e, searchTerm) => {
    e.preventDefault()
    dispatch(searchSubs(searchTerm));
    dispatch(searchPosts(searchTerm));
    setSearch('');
  };

  return (
    <Form onSubmit={(e) => submitSearch(e, search)}>
      <InputGroup className="m-auto" style={{ width: "375px" }}>
        <Form.Control
          placeholder="search"
          aria-label="search"
          aria-describedby="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="primary" type="submit">
          <i className="fas fa-search" />
        </Button>
      </InputGroup>
    </Form>
  );
};
