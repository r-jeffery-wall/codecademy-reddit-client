import { Accordion, Container, Nav } from 'react-bootstrap';
import { selectPopularSubs } from "./PopularSubsSlice";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const PopularSubs = () => {
  const popularSubs = useSelector(selectPopularSubs);
  const [isMobile, setMobile] = useState(window.innerWidth < 576); //This lines up with the Bootstrap sm breakpoint.
  const updateMobile = () => {
    setMobile(window.innerWidth < 576);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMobile);
  })


  if (isMobile) {
    return (
      <Accordion className='bg-body-tertiary border-top border-bottom border-secondary-subtle'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            Popular subs
          </Accordion.Header>
          <Accordion.Body>
            <Nav className='d-flex flex-column align-items-center'>
              {popularSubs.map((sub) => (
                <Nav.Item>
                  <Nav.Link href={sub.url} key={sub.name}>
                    {sub.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  } else {
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
  }
};
