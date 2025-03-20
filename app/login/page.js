// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("user");
//   const [message, setMessage] = useState("");
//   const router = useRouter();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password, userType }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setMessage(result.message);
//         localStorage.setItem("token", result.token);
//         if (userType === "admin") {
//           router.push("/admin");
//         } else {
//           router.push("/user");
//         }
//       } else {
//         setMessage(result.error);
//       }
//     } catch (err) {
//       setMessage("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Login</h2>
//         <input
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           style={styles.input}
//           placeholder="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <select
//           style={styles.select}
//           onChange={(e) => setUserType(e.target.value)}
//           value={userType}
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//         <button style={styles.button} onClick={handleLogin}>Login</button>
//         {message && <p style={styles.message}>{message}</p>}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f0f2f5",
//   },
//   card: {
//     width: "350px",
//     padding: "20px",
//     borderRadius: "8px",
//     backgroundColor: "#fff",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//   },
//   title: {
//     marginBottom: "20px",
//     color: "#333",
//   },
//   input: {
//     width: "100%",
//     padding: "12px",
//     margin: "8px 0",
//     borderRadius: "4px",
//     border: "1px solid #ddd",
//     fontSize: "16px",
//   },
//   select: {
//     width: "100%",
//     padding: "12px",
//     margin: "8px 0",
//     borderRadius: "4px",
//     border: "1px solid #ddd",
//     fontSize: "16px",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     margin: "12px 0",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     fontWeight: "bold",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   message: {
//     marginTop: "10px",
//     color: "red",
//   },
// };


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Log the request to see the payload
      console.log("Login attempt with: ", { username, password, userType });

      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, userType }),
      });

      const result = await response.json();
      console.log("Login result:", result);  // Log the result to check the response

      if (response.ok) {
        setMessage(result.message);
        localStorage.setItem("token", result.token);
        // Redirect based on the user type
        if (userType === "admin") {
          router.push("/admin");
        } else {
          router.push("/user");
        }
      } else {
        setMessage(result.error || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      setMessage("An error occurred. Please try again.");
      console.error("Login error:", err);  // Log the error for debugging
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          value={password}
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
        {message && <p style={styles.message}>{message}</p>}
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
  card: {
    width: "350px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  select: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    margin: "12px 0",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
    color: "red",
  },
};
