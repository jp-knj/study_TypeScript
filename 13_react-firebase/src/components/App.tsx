import React, { useEffect } from "react";
import { firestore } from "../firebase";

import Posts from "./Post/Posts";

const Application: React.FC = () => {
  useEffect(() => {
    const snapshot = firestore
      .collection("post")
      .get()
      .then((snapshot) => {
        console.log({ snapshot });
      });
    snapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      console.log({ id, data });
    });
  });
  return (
    <main className="Application">
      <Posts />
    </main>
  );
};

export default Application;
