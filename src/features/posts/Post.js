import { useSelector } from "react-redux";
import { CommentsList } from "../comments/CommentsList";
import { selectComments } from "../comments/CommentsSlice";
import { PostHeader } from "./PostHeader";

export const Post = ({ title, imgSrc, text, upvotes, subreddit, url }) => {
  const comments = useSelector(selectComments); // This will need to be modified to use the Post id to find the relevant comments.

  return (
    <div className="bg-body-tertiary border rounded my-3">
      <PostHeader title={title} subreddit={subreddit} url={url} />
      {imgSrc ? (
        <img
          src={imgSrc}
          className="rounded m-auto"
          style={{ maxWidth: "95%", height: "auto", display: "block" }}
        />
      ) : (
        <></>
      )}
      <p className="p-1">{text}</p>
      <CommentsList comments={comments} upvotes={upvotes} />
    </div>
  );
};
