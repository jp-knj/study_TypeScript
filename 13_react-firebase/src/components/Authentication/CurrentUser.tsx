import React from "react";

const CurrentUser = () => {
  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        <div className="CurrentUser--information">
          <h2>Kenji Tomita</h2>
          <p className="email">sample@email.com</p>
          <p className="created-at">12:31</p>
        </div>
      </div>
      <div>
        <div>some text</div>
        <button>Sign Out</button>
      </div>
    </section>
  );
};

CurrentUser.defaultProps = {
  displayName: "kenji tomita",
  email: "kenji@email.com",
  photoURL: "https://www.fillmurray.com/300/300",
  createdAt: new Date(),
};

export default CurrentUser;
