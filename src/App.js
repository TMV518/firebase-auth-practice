import "./App.module.css";
import { useState } from "react";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {};

  const login = async () => {};

  const logout = async () => {};

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input placeholder="Email..." />
        <input placeholder="Password..." />

        <button>Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input placeholder="Email..." />
        <input placeholder="Password..." />

        <button> Login</button>
      </div>

      <h4> User Logged In: </h4>

      <button> Sign Out </button>
    </div>
  );
}

export default App;
