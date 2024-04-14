import { getPostsforSub, selectPosts } from "./PostsSlice"
import { Post } from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

export const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts); // This will eventually using routing to get the sub.
    
    useEffect(() => {
        dispatch(getPostsforSub(''));
    }, [])

    return (
        <ul className="col-sm-6 m-auto p-3">
            {posts.length > 0 ? posts.map(post => <Post title={post.title} imgSrc={post.imageSrc} text={post.text} upvotes={post.upvotes} subreddit={post.subreddit} key={post.key} url={post.url}/>) : <></>}
        </ul>
    )
}
