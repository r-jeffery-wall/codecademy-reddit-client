import { useSelector } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";
import { SearchBar } from "../searchBar/SearchBar";
import { selectPopularSubs } from "./HeaderSlice";

export const Header = () => {
  const popularSubs = useSelector(selectPopularSubs);

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        className="bg-body-tertiary justify-content-around"
      >
        <Container>
          <Navbar.Brand className="fs-1">
            <img
              src="./img/icons8-reddit-50.png"
              width="50"
              height="50"
              alt="a plain outline of the reddit logo."
              className="me-3"
            />
            PlainReddit
          </Navbar.Brand>
          <SearchBar />
        </Container>
      </Navbar>
      <Container
        fluid
        style={{ width: "100%" }}
        className="d-flex justify-content-center align-items-center bg-body-tertiary border-top border-bottom border-secondary-subtle"
      >
        <h2 className="fs-6 m-0">Popular Subs:</h2>
        <Nav className="d-flex justify-content-between align-items-center">
          {popularSubs.map((sub) => (
            <Nav.Item>
              <Nav.Link href={sub.url} key={sub.name}>
                {sub.name}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </>
  );
};
