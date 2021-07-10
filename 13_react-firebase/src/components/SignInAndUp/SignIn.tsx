import React from "react";

const SignIn: React.FC = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <form className="SignIn" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <input type="submit" value="Sign In" />
      <button>Sign In With Google</button>
    </form>
  );
};

export default SignIn;
