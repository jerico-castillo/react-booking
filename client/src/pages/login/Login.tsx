import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../typedHooks/hooks";

// import { loginFailure, loginStart } from "../../store/auth-slice";

import styles from "./login.module.css";
import { loginUser } from "../../store/auth-action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { error, loading } = useAppSelector((state) => state.auth);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(credentials))
        .unwrap()
        .then((res) => {
          navigate("/");
        });
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className={styles.loginInput}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className={styles.loginInput}
        />
        <button
          disabled={loading}
          className={styles.button}
          onClick={handleLogin}
        >
          {loading}
          Login
        </button>
        {error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default Login;
