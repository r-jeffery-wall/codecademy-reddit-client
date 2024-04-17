export const UpvoteDisplay = ({ upvotes }) => {
  return (
    <div
      className="mx-1 d-flex flex-column justify-content-center align-items-center"
      style={{ width: "15%", fontSize: "12px" }}
    >
      <i className="fa-solid fa-angle-up" style={{ color: "#ff4500" }} />
      <p className="fw-bold m-0">{upvotes}</p>
      <i className="fa-solid fa-angle-down" style={{ color: "#7193ff" }} />
    </div>
  );
};
