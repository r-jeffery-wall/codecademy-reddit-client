import { Navbar, Container } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
            src="./img/icons8-reddit-50.png"
            width="50"
            height="50"
            alt="a plain outline of the reddit logo."
          />
          PlainReddit
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
