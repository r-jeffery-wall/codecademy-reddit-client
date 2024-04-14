import { Container } from 'react-bootstrap';

export const PostHeader = ({title, subreddit, url}) => {
  return (
    <Container fluid className="fw-bold">
      <a href={url} target='_blank' className='link-secondary'><h3 className='p-1'>{title}</h3></a>
      <p className="p-1">{subreddit}</p>
    </Container>
  );
};
