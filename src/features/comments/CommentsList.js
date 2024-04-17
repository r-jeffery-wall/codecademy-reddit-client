import { Accordion, AccordionBody } from "react-bootstrap";
import { Comment } from "./Comment";
import { UpvoteDisplay } from "../UpVoteDisplay/UpvoteDisplay";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsForPost, isCommentsLoading } from "./CommentsSlice";
import { useEffect } from "react";

export const CommentsList = ({
  comments,
  subreddit,
  postId,
  upvotes,
  commentsNumber,
}) => {
  const dispatch = useDispatch();
  const commentsLoading = useSelector(isCommentsLoading);

  useEffect(() => {
    dispatch(getCommentsForPost({ subreddit: subreddit, postId: postId }));
  }, []);

  return (
    <Accordion className="p-2">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <UpvoteDisplay upvotes={upvotes} />
          {commentsLoading ? (
            <span>Comments loading...</span>
          ) : (
            <span>{commentsNumber} Comments</span>
          )}
        </Accordion.Header>
        <AccordionBody className="p-0">
          <ul className="p-0">
            {comments ? (
              comments.map((comment) => (
                <Comment
                  username={comment.author}
                  commentText={comment.text}
                  score={comment.score}
                  timestamp={comment.timestamp}
                />
              ))
            ) : (
              <></>
            )}
          </ul>
        </AccordionBody>
      </Accordion.Item>
    </Accordion>
  );
};
