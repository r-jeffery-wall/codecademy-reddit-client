import {
  getPostsforSub,
  isPostsFailed,
  isPostsLoading,
  isPostsSearchFailed,
  selectPosts,
} from "./PostsSlice";
import { Post } from "./Post";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCommentsForPostId } from "../comments/CommentsSlice";

export const PostsList = () => {
  const dispatch = useDispatch();
  const postsLoading = useSelector(isPostsLoading);
  const postsFailed = useSelector(isPostsFailed);
  const searchFailed = useSelector(isPostsSearchFailed);
  const posts = useSelector(selectPosts); // This will eventually using routing to get the sub.
  const comments = useSelector(selectCommentsForPostId);

  useEffect(() => {
    dispatch(getPostsforSub(""));
  }, []);

  if (postsLoading) {
    return <Container className="fs-1 text-center">Posts Loading...</Container>;
  } else if (postsFailed) {
    return (
      <Container className="fs-1 text-center text-danger">
        Loading failed! Please refresh the page.
      </Container>
    );
  } else if (searchFailed) {
    return (
      <Container className="fs-1 text-center text-danger">
        Search failed! Please try a different search term.
      </Container>
    );
  } else {
    return (
      <ul className="col-sm-6 m-auto p-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              title={post.title}
              imgSrc={post.imageSrc}
              text={post.text}
              upvotes={post.upvotes}
              subreddit={post.subreddit}
              key={post.key}
              id={post.key}
              url={post.url}
              author={post.author}
              timestamp={post.timestamp}
              comments={comments[post.key]}
              commentsNumber={post.numComments}
            />
          ))
        ) : (
          <></>
        )}
      </ul>
    );
  }
};
