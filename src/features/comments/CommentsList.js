import { useSelector } from "react-redux"
import { selectComments } from "./CommentsSlice"
import { Comment } from './Comment';

export const CommentsList = () => {
	const comments = useSelector(selectComments);

	return (
		<ul>
			{comments.map(comment => <Comment username={comment.user} commentText={comment.text}  />)}
		</ul>
	)
}
