import React from "react";

const AddComment: React.FC = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit} className="AddComment">
      <input
        type="text"
        name="content"
        placeholder="Comment"
        onChange={handleChange}
      />
      <input className="create" type="submit" value="Create Comment" />
    </form>
  );
};
export default AddComment;
