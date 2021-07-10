import React from "react";

const AddPost: React.FC = () => {
  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="AddPost">
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="content"
        placeholder="Body"
        onChange={handleChange}
      />
      <input className="create" type="submit" value="Create Post" />
    </form>
  );
};

export default AddPost;
