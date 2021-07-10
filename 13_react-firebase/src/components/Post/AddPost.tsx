import React, { Component } from "react";

const AddPost: React.FC = () => {
  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <form className="AddPost">
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="content" placeholder="Body" />
      <input className="create" type="submit" value="Create Post" />
    </form>
  );
};

export default AddPost;
