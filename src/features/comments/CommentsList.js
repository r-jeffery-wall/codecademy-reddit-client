import { Accordion, AccordionBody } from "react-bootstrap";
import { Comment } from './Comment';

export const CommentsList = ( {comments, upvotes} ) => {
	return (
		<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>
					<div className="mx-1 d-flex flex-column justify-content-center align-items-center" style={{ width: "15%", fontSize: "12px" }}>
						<i className="fa-solid fa-angle-up" />
						<p className="fw-bold m-0">{upvotes}</p>
						<i className="fa-solid fa-angle-down" />
					</div>
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
