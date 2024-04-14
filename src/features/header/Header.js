import { Navbar, Container } from "react-bootstrap";
import { SearchBar } from "../searchBar/SearchBar";
import { PopularSubs } from "../PopularSubs/PopularSubs";

export const Header = () => {
  return (
    <Container fluid className="position-sticky top-0 m-0" style={{zIndex: 5}}>
      <Navbar
        expand="lg"
        className="bg-body-tertiary justify-content-around"
      >
        <Container>
          <Navbar.Brand className="fs-1 m-auto">
            <img
              src="./img/icons8-reddit-50.png"
              width="50"
              height="50"
              alt="a plain outline of the reddit logo."
              className="me-3"
            />
            ReadOnlyReddit
          </Navbar.Brand>
          <SearchBar />
        </Container>
      </Navbar>
      <PopularSubs/>
    </Container>
  );
};
