import React from "react";

import Post from "./Post";
import Posts from "./Post/Posts";

const Application: React.FC = () => {
  return (
    <main className="Application">
      <Posts />
    </main>
  );
};

export default Application;
