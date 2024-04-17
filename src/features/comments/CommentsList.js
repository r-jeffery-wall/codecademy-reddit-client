import { Accordion, AccordionBody } from "react-bootstrap";
import { Comment } from './Comment';
import { UpvoteDisplay } from "../UpVoteDisplay/UpvoteDisplay";
import { useDispatch} from "react-redux";
import { getCommentsForPost} from "./CommentsSlice";
import { useEffect } from "react";

export const CommentsList = ( {comments, subreddit, postId, upvotes, commentsNumber} ) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCommentsForPost({subreddit: subreddit, postId: postId}));
	}, [])

	return (
		<Accordion className="p-2">
			<Accordion.Item eventKey="0">
				<Accordion.Header>
					<UpvoteDisplay upvotes={upvotes}/>
					{commentsNumber} Comments
				</Accordion.Header>
				<AccordionBody className="p-0">
					<ul className="p-0">
					{comments ? comments.map(comment => <Comment username={comment.author} commentText={comment.text} score={comment.score} timestamp={comment.timestamp} />) : <></>}
					</ul>
				</AccordionBody>
			</Accordion.Item>
		</Accordion>
	)
}
