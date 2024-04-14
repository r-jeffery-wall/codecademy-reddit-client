import { Container } from 'react-bootstrap';

export const PostHeader = ({title, subreddit}) => {
  return (
    <Container fluid className="fw-bold">
      <h3 className="p-1">{title}</h3>
      <p className="p-1">{subreddit}</p>
    </Container>
  );
};
