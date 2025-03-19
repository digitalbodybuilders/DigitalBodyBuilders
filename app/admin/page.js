// "use client";
// import { useState, useEffect } from "react";
// import { supabase } from "../../lib/supabaseClient";

// export default function AdminPage() {
//   const [messages, setMessages] = useState([]);
//   const [admins, setAdmins] = useState([]);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("admin");
//   const [message, setMessage] = useState("");

//   // Fetch messages and admins on page load
//   useEffect(() => {
//     fetchMessages();
//     fetchAdmins();
//   }, []);

//   // Fetch messages from Supabase
//   const fetchMessages = async () => {
//     const { data, error } = await supabase
//       .from("messages")
//       .select("*");
//     if (error) console.error("Error loading messages:", error);
//     else setMessages(data);
//   };

//   // Fetch admins from Supabase
//   const fetchAdmins = async () => {
//     const { data, error } = await supabase
//       .from("users")
//       .select("*")
//       .eq("type", "admin");
//     if (error) console.error("Error loading admins:", error);
//     else setAdmins(data);
//   };

//   // Create new admin or user
//   const createAdmin = async () => {
//     if (!username || !password) {
//       setMessage("Username and password are required!");
//       return;
//     }

//     const { error } = await supabase
//       .from("users")
//       .insert([{ username, password, type: userType }]);

//     if (error) {
//       setMessage("Error creating user: " + error.message);
//     } else {
//       setMessage("User created successfully!");
//       setUsername("");
//       setPassword("");
//       setUserType("admin");
//       fetchAdmins();
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.leftPanel}>
//         <h3 style={styles.heading}>Messages</h3>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>Name</th>
//               <th style={styles.th}>Email</th>
//               <th style={styles.th}>Phone Number</th>
//               <th style={styles.th}>Message</th>
//             </tr>
//           </thead>
//           <tbody>
//             {messages.map((msg) => (
//               <tr key={msg.id}>
//                 <td style={styles.td}>{msg.name}</td>
//                 <td style={styles.td}>{msg.email}</td>
//                 <td style={styles.td}>{msg.phone_number}</td>
//                 <td style={styles.td}>{msg.message}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div style={styles.rightPanel}>
//         <h3 style={styles.heading}>Admins</h3>
//         <ul style={styles.list}>
//           {admins.map((admin) => (
//             <li key={admin.id} style={styles.listItem}>{admin.username}</li>
//           ))}
//         </ul>

//         <h3 style={styles.heading}>Create User/Admin</h3>
//         <input
//           placeholder="Username"
//           style={styles.input}
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           placeholder="Password"
//           type="password"
//           style={styles.input}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <select
//           style={styles.select}
//           value={userType}
//           onChange={(e) => setUserType(e.target.value)}
//         >
//           <option value="admin">Admin</option>
//           <option value="user">User</option>
//         </select>
//         <button style={styles.button} onClick={createAdmin}>Create</button>
//         <p style={styles.message}>{message}</p>
//       </div>
//     </div>
//   );
// }
// const styles = {
//     container: {
//       display: "flex",
//       gap: "20px",
//       padding: "20px",
//       paddingTop: "80px", // Added top padding of 20px
//       backgroundColor: "#f0f2f5",
//       height: "100vh",
//     },
//     leftPanel: {
//       flex: 2,
//       backgroundColor: "#fff",
//       borderRadius: "8px",
//       padding: "16px",
//       boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//     },
//     rightPanel: {
//       flex: 1,
//       backgroundColor: "#fff",
//       borderRadius: "8px",
//       padding: "16px",
//       boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//     },
//     heading: {
//       marginBottom: "10px",
//       color: "#1877f2",
//     },
//     table: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },
//     th: {
//       padding: "12px",
//       backgroundColor: "#1877f2",
//       color: "white",
//       border: "1px solid #ddd",
//     },
//     td: {
//       padding: "10px",
//       border: "1px solid #ddd",
//     },
//     list: {
//       listStyle: "none",
//       padding: "0",
//     },
//     listItem: {
//       padding: "8px",
//       borderBottom: "1px solid #ddd",
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       margin: "8px 0",
//       border: "1px solid #ddd",
//       borderRadius: "4px",
//       fontSize: "16px",
//     },
//     select: {
//       width: "100%",
//       padding: "10px",
//       margin: "8px 0",
//       border: "1px solid #ddd",
//       borderRadius: "4px",
//       fontSize: "16px",
//     },
//     button: {
//       width: "100%",
//       padding: "10px",
//       margin: "8px 0",
//       backgroundColor: "#1877f2",
//       color: "white",
//       fontWeight: "bold",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//     },
//     message: {
//       marginTop: "10px",
//       color: "green",
//     },
//   };
  


"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function AdminPage() {
  const [messages, setMessages] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("admin");
  const [message, setMessage] = useState("");

  // Fetch messages and admins on page load
  useEffect(() => {
    fetchMessages();
    fetchAdmins();
  }, []);

  // Fetch messages from Supabase
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*");
    if (error) console.error("Error loading messages:", error);
    else setMessages(data);
  };

  // Fetch admins from Supabase
  const fetchAdmins = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("type", "admin");
    if (error) console.error("Error loading admins:", error);
    else setAdmins(data);
  };

  // Create new admin or user
  const createAdmin = async () => {
    if (!username || !password) {
      setMessage("Username and password are required!");
      return;
    }

    const { error } = await supabase
      .from("users")
      .insert([{ username, password, type: userType }]);

    if (error) {
      setMessage("Error creating user: " + error.message);
    } else {
      setMessage("User created successfully!");
      setUsername("");
      setPassword("");
      setUserType("admin");
      fetchAdmins();
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("username"); // Remove the username from localStorage
    window.location.href = "/login"; // Redirect to the login page
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </div>

      <div style={styles.leftPanel}>
        <h3 style={styles.heading}>Messages</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Full Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td style={styles.td}>{msg.full_name}</td>
                <td style={styles.td}>{msg.email}</td>
                <td style={styles.td}>{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.rightPanel}>
        <h3 style={styles.heading}>Admins</h3>
        <ul style={styles.list}>
          {admins.map((admin) => (
            <li key={admin.id} style={styles.listItem}>{admin.username}</li>
          ))}
        </ul>

        <h3 style={styles.heading}>Create User/Admin</h3>
        <input
          placeholder="Username"
          style={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          style={styles.select}
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button style={styles.button} onClick={createAdmin}>Create</button>
        <p style={styles.message}>{message}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    paddingTop: "80px", // Added top padding of 20px
    backgroundColor: "#f0f2f5",
    height: "100vh",
  },
  header: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    backgroundColor: "#fff",
    padding: "10px",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 100,
  },
  logoutButton: {
    padding: "10px 20px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "80px", // Set the top margin to 100px
  },
  leftPanel: {
    flex: 2,
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
  rightPanel: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
  heading: {
    marginBottom: "20px",
    color: "#1877f2",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    padding: "12px",
    backgroundColor: "#1877f2",
    color: "white",
    border: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    padding: "8px",
    borderBottom: "1px solid #ddd",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },
  select: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    backgroundColor: "#1877f2",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
    color: "green",
  },
};
