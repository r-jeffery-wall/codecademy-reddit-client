import { useSelector } from "react-redux";
import { CommentsList } from "../comments/CommentsList";
import { selectComments } from "../comments/CommentsSlice";
import { PostHeader } from "./PostHeader";
import { PostMedia } from "./PostMedia";

export const Post = ({ title, text, upvotes, subreddit, url, author, timestamp }) => {
  const comments = useSelector(selectComments); // This will need to be modified to use the Post id to find the relevant comments.

  return (
    <div className="bg-body-tertiary border rounded my-3">
      <PostHeader title={title} subreddit={subreddit} url={url} author={author} timestamp={timestamp} />
      <PostMedia media={url} />
      <p className="p-1">{text}</p>
      <CommentsList comments={comments} upvotes={upvotes} />
    </div>
  );
};
