
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "../../lib/supabaseClient";

// export default function Login({ setIsLoggedIn }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("user"); // Default is user
//   const [message, setMessage] = useState("");
//   const router = useRouter();

//   const handleLogin = async () => {
//     const { data, error } = await supabase
//       .from("users")
//       .select("*")
//       .eq("username", username)
//       .eq("password", password)
//       .eq("type", userType)
//       .single(); // Use .single() to get one result

//     if (error) {
//       setMessage("Login failed: " + error.message);
//     } else {
//       setMessage("Login successful!");
//       // Store username and type in localStorage
//       localStorage.setItem("username", data.username);
//       localStorage.setItem("userType", data.type); // Store the type (user/admin)

//       // Update the parent component's state
//       setIsLoggedIn(true);

//       // Redirect based on user type
//       if (data.type === "admin") {
//         router.push("/admin");
//       } else {
//         router.push("/user");
//       }
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.box}>
//         <h2 style={styles.heading}>Login</h2>
//         <input
//           placeholder="Username"
//           value={username}
//           style={styles.input}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           placeholder="Password"
//           type="password"
//           value={password}
//           style={styles.input}
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
//         <button style={styles.button} onClick={handleLogin}>
//           Login
//         </button>
//         <p style={styles.message}>{message}</p>
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
//   box: {
//     width: "350px",
//     padding: "20px",
//     borderRadius: "8px",
//     backgroundColor: "white",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//     textAlign: "center",
//   },
//   heading: {
//     marginBottom: "20px",
//     color: "#1877f2",
//   },
//   input: {
//     width: "100%",
//     padding: "12px",
//     margin: "8px 0",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     fontSize: "16px",
//   },
//   select: {
//     width: "100%",
//     padding: "12px",
//     margin: "8px 0",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     fontSize: "16px",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     margin: "10px 0",
//     backgroundColor: "#1877f2",
//     color: "white",
//     fontWeight: "bold",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   message: {
//     color: "green",
//     marginTop: "10px",
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
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, userType }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        localStorage.setItem("token", result.token);
        if (userType === "admin") {
          router.push("/admin");
        } else {
          router.push("/user");
        }
      } else {
        setMessage(result.error);
      }
    } catch (err) {
      setMessage("An error occurred. Please try again.");
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
