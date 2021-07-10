import React from "react";

interface PostProps {
  title?: string;
  content?: string;
  user?: {};
  createdAt?: Date;
  stars?: number;
  comments?: number;
}

const Post: React.FC<PostProps> = ({
  title,
  content,
  user,
  createdAt,
  stars,
  comments,
}) => {
  return (
    <article className="Post">
      <div className="Post--content">
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
      <div className="Post--meta">
        <div>
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {stars}
          </p>
          <p>
            <span role="img" aria-label="comments">
              🙊
            </span>
            {comments}
          </p>
          <p>Posted by {user}</p>
          <p>{createdAt}</p>
        </div>
        <div>
          <button className="star">Star</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </article>
  );
};

export default Post;
