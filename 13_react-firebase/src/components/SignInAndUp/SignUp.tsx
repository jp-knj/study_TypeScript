import React from "react";

const SignUp = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <form className="SignUp" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="text"
        name="displayName"
        placeholder="Display Name"
        onChange={handleChange}
      />
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
      <input type="submit" value="Sign Up" />
    </form>
  );
};
export default SignUp;
