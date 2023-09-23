import { useState } from "react";

function Login({ loginUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      Name:
      <br />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      Password:
      <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button className="btn btn-success" onClick={() => loginUser(name, password)}>
        Login
      </button>
    </>
  );
}

export default Login;
