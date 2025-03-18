"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const { data, error } = await supabase
      .from("users")
      .insert([{ username, password, type: "user" }]);

    if (error) {
      setMessage("Registration failed: " + error.message);
    } else {
      setMessage("Registration successful!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Sign Up</h2>
        <input
          placeholder="Username"
          style={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          type="password"
          style={styles.input}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button style={styles.button} onClick={handleRegister}>Register</button>
        <p style={styles.message}>{message}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  box: {
    width: "350px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    color: "#1877f2",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    backgroundColor: "#1877f2",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  message: {
    color: "red",
    marginTop: "10px",
  },
};
