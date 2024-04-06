import { Container, Nav} from 'react-bootstrap';
import { selectPopularSubs } from "./PopularSubsSlice";
import { useSelector } from 'react-redux';

export const PopularSubs = () => {
    const popularSubs = useSelector(selectPopularSubs);

  return (
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
  );
};
