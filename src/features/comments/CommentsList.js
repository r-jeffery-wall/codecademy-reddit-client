import { Accordion, AccordionBody } from "react-bootstrap";
import { Comment } from './Comment';
import { UpvoteDisplay } from "../UpVoteDisplay/UpvoteDisplay";

export const CommentsList = ( {comments, upvotes} ) => {
	return (
		<Accordion className="p-2">
			<Accordion.Item eventKey="0">
				<Accordion.Header>
					<UpvoteDisplay upvotes={upvotes}/>
					{comments.length} Comments
				</Accordion.Header>
				<AccordionBody className="p-0">
					<ul className="p-0">
					{comments.map(comment => <Comment username={comment.user} commentText={comment.comment} />)}
					</ul>
				</AccordionBody>
			</Accordion.Item>
		</Accordion>
	)
}
