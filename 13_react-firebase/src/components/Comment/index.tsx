import React from "react";

import AddComment from "./AddComment";
import Comments from "./Comments";

const Comment: React.FC = () => {
  return (
    <section className="Comments">
      <AddComment />
      <Comments />
    </section>
  );
};
