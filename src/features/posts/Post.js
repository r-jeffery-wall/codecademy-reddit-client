export const Post = ({ title, imgSrc, text, upvotes }) => {
    return (
        <div className="bg-body-tertiary ">
            <h3>{title}</h3>
            {imgSrc ? <img src={imgSrc} /> : <></>}
            <p>{text}</p>

        </div>
    )
}