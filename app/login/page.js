"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .eq("password", password)
      .eq("type", userType)
      .single();

    if (error) {
      setMessage("Login failed: " + error.message);
    } else {
      setMessage(`Login successful! You are logged in as a ${data.type}.`);
      // Redirect based on user type
      if (data.type === "admin") {
        router.push("/admin");
      } else if (data.type === "user") {
        router.push("/user");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Login</h2>
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
        <select
          style={styles.select}
          onChange={(e) => setUserType(e.target.value)}
          value={userType}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button style={styles.button} onClick={handleLogin}>Login</button>
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
  select: {
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
    color: "green",
    marginTop: "10px",
  },
};
