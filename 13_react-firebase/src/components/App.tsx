import React from "react";

interface PostProps {
  id: string;
  title: string;
  content: string;
  user: Array<string>;
}

const Application: React.FC = () => {
  return (
    <main className="Application">
      <h1>Hello World</h1>
    </main>
  );
};

export default Application;
