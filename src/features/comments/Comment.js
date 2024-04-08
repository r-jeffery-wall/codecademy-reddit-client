export const Comment = ({username, commentText}) => {
	return (
		<div className="border p-0">
			<h6 className="fw-bold">{username}</h6>
			<p>{commentText}</p>
		</div>
	)
}
