import React from "react";
import Post from "../Post";
import AddPost from "./AddPost";

const Posts = () => {
  return (
    <section className="Posts">
      <AddPost />
      <Post />
    </section>
  );
};

export default Posts;
