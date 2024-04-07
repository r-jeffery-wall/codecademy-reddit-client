import { Container } from "react-bootstrap";

export const Post = ({ title, imgSrc, text, upvotes }) => {
  return (
    <div className="bg-body-tertiary border rounded my-3">
      <h3 className="fw-bold p-1">{title}</h3>
      {imgSrc ? (
        <img
          src={imgSrc}
          className="rounded m-auto"
          style={{ maxWidth: "95%", height: "auto", display: "block" }}
        />
      ) : (
        <></>
      )}
      <p className="p-1">{text}</p>
<Container className="m-2 bg-body-secondary border rounded d-flex justify-content-between align-items-center" style={{maxWidth: "98%"}}>
        <div>
          <div className="mx-1 d-flex flex-column justify-content-center align-items-center" style={{width: "15%", fontSize: "12px"}}>
            <i className="fa-solid fa-angle-up" />
            <p className="fw-bold m-0">{upvotes}</p>
            <i className="fa-solid fa-angle-down" />
          </div>
        </div>
        Comments
      </Container>
    </div>
  );
};
