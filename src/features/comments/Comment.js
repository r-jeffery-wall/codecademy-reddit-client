import { UpvoteDisplay } from "../UpVoteDisplay/UpvoteDisplay";
import {Container} from 'react-bootstrap';
import moment from "moment";

export const Comment = ({ username, commentText, score, timestamp }) => {
  return (
    <div className="border p-0">
      <Container fluid className="d-flex justify-content-between m-1">
        <div>
          <h6 className="fw-bold">{username}</h6>
          <p>{moment.unix(timestamp).fromNow()}</p>
        </div>
        <UpvoteDisplay upvotes={score} />
      </Container>
      <p className="p-2">{commentText}</p>
    </div>
  );
};
