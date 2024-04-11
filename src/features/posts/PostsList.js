import { selectPosts } from "./PostsSlice"
import { Post } from './Post';
import { useSelector } from 'react-redux';

export const PostsList = () => {
    const posts = useSelector(selectPosts);
    
    return (
        <ul className="col-sm-6 m-auto p-3">
            {posts.map(post => <Post title={post.title} imgSrc={post.imageSrc} text={post.text} upvotes={post.upvotes} key={post.title}/>)}
        </ul>
    )
}
