import { UpvoteDisplay } from "../UpVoteDisplay/UpvoteDisplay";
import {Container} from 'react-bootstrap';

export const Comment = ({ username, commentText, score }) => {
  return (
    <div className="border p-0">
      <Container fluid className="d-flex justify-content-between m-1">
        <h6 className="fw-bold">{username}</h6>
        <UpvoteDisplay upvotes={score} />
      </Container>
      <p className="p-2">{commentText}</p>
    </div>
  );
};
