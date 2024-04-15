import { Container } from "react-bootstrap";
import moment from "moment";

export const PostHeader = ({ title, author, subreddit, url, timestamp }) => {
  return (
    <Container fluid>
      <a href={url} target="_blank" className="link-secondary">
        <h3 className="p-1 fw-bold">{title}</h3>
      </a>
      <Container fluid className="d-flex justify-content-between p-0">
        <p className="p-1">{subreddit}</p>
        <p className="p-1">Posted {moment.unix(timestamp).fromNow()} by {author}</p>
      </Container>
    </Container>
  );
};
