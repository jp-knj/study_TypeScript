import React, { useState } from "react";
import { auth } from "../utils/firebase";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
