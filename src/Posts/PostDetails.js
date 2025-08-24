function PostDetails({ allPosts }) {
    return (
        <div className="col-3">
            <div className="card shadow border-success mb-5 h-70">
                <div className="card-body text-danger">
                    <figure>
                        <blockquote>Post caption: {allPosts.title}</blockquote>
                        <figcaption>Tags: {allPosts.tags[0] + ", " + allPosts.tags[1]}</figcaption>
                        <p className="bi bi-eye"> {allPosts.views}</p>
                    </figure>
                    <div className="card-footer">
                        <button className="btn btn-primary me-2 bi bi-hand-thumbs-up">{allPosts.reactions.likes}</button>
                        <button className="btn btn-danger bi bi-hand-thumbs-down">{allPosts.reactions.dislikes}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostDetails;