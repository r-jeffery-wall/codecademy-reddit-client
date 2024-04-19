import { Navbar, Container } from "react-bootstrap";
import { SearchBar } from "../searchBar/SearchBar";
import { PopularSubs } from "../PopularSubs/PopularSubs";
import logo from '../../img/icons8-reddit-50.png';

export const Header = () => {
  return (
    <Container
      fluid
      className="position-sticky top-0 m-0"
      style={{ zIndex: 5 }}
    >
      <Navbar expand="lg" className="bg-body-tertiary justify-content-around">
        <Container>
          <Navbar.Brand className="m-auto d-flex align-items-center">
            <img
              src={logo}
              width="50"
              height="50"
              alt="a plain outline of the reddit logo."
              className="me-3"
            />
            <div>
              <h1 className="m-0">ReadOnlyReddit</h1>
              <p className="m-0">No accounts, no upvotes, just content.</p>
            </div>
          </Navbar.Brand>
          <SearchBar />
        </Container>
      </Navbar>
      <PopularSubs />
    </Container>
  );
};
