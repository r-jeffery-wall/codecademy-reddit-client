import { Container } from "react-bootstrap";

export const PostMedia = ({ media }) => {
  if (media.includes("i.redd.it")) {
    return (
      <img
        src={media}
        className="rounded m-auto"
        style={{ maxWidth: "95%", height: "auto", display: "block" }}
      />
    );
  } else if (media.includes("youtu.be")) {
    return (
      <Container className="ratio ratio-16x9">
        <iframe
          width="560"
          height="315"
          src={media}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="rounded m-auto p-1"
        ></iframe>
      </Container>
    );
  } else if (media.includes("v.redd.it")) {
    return (
      <p className="p-1 text-center">
        Reddit video is currently unsupported. Please click the post link to
        view the video on Reddit.
      </p>
    );
  } else {
    return <></>;
  }
};
