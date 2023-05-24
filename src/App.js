import "./App.module.css";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //user object
  const [user, setUser] = useState({});

  useEffect(() => {
    //similar to useEffect(), when auth changes, do callback function
    onAuthStateChanged(auth, (currentUser) => {
      setUser(auth.currentUser);
    });
  }, []);

  //creates user account
  //createUserWithEmailAndPassword(auth, email, password)
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  //signs in
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  //logs out
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />

        <button onClick={register}>Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default App;
