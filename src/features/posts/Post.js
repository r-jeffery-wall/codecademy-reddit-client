import { CommentsList } from "../comments/CommentsList";
import { PostHeader } from "./PostHeader";
import { PostMedia } from "./PostMedia";

export const Post = ({ title, text, upvotes, subreddit, url, author, timestamp, key, id, comments, commentsNumber }) => {


  return (
    <div className="bg-body-tertiary border rounded my-3">
      <PostHeader title={title} subreddit={subreddit} url={url} author={author} timestamp={timestamp} />
      <PostMedia media={url} />
      <p className="p-3">{text}</p>
      <CommentsList  upvotes={upvotes} postId={id} subreddit={subreddit} comments={comments} commentsNumber={commentsNumber} />
    </div>
  );
};
