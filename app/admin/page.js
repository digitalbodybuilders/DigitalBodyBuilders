
// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "../../lib/supabaseClient";

// export default function AdminPage() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term
//   const [username, setUsername] = useState(""); // Username field
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("user"); // Default to 'user'
//   const [error, setError] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push("/login");
//     } else {
//       setIsAuthenticated(true);
//       fetchMessages();
//       fetchUsers();
//     }
//   }, []);

//   const fetchMessages = async () => {
//     const { data, error } = await supabase.from("messages").select("*");
//     if (error) {
//       console.error("Error fetching messages:", error);
//     } else {
//       setMessages(data);
//     }
//   };

//   const fetchUsers = async () => {
//     const { data, error } = await supabase.from("users").select("*");
//     if (error) {
//       console.error("Error fetching users:", error);
//     } else {
//       setUsers(data);
//     }
//   };

//   const handleLogout = async () => {
//     const response = await fetch("/api/logout", {
//       method: "POST",
//     });

//     const result = await response.json();

//     if (result.message === "Logout successful!") {
//       localStorage.removeItem("token");
//       localStorage.removeItem("username");
//       localStorage.removeItem("userType");
//       window.location.href = "/login";
//     } else {
//       console.error("Logout failed");
//     }
//   };

//   const handleCreateUser = async (e) => {
//     e.preventDefault();

//     // Insert the new user into the database
//     const { data, error } = await supabase
//       .from("users")
//       .insert([
//         {
//           username: username,
//           password: password,
//           type: userType, // 'user' or 'admin'
//         },
//       ]);

//     if (error) {
//       setError(`Error creating user: ${error.message}`);
//     } else {
//       alert("User created successfully!");
//       setUsername("");
//       setPassword("");
//       setUserType("user");
//       setError("");
//       fetchUsers(); // Refresh users list after creating new user
//     }
//   };

//   const handleDeleteUser = async (userId) => {
//     // Deleting the user from the database
//     const { data, error } = await supabase
//       .from("users")
//       .delete()
//       .eq("id", userId);

//     if (error) {
//       console.error("Error deleting user:", error);
//     } else {
//       alert("User deleted successfully!");
//       fetchUsers(); // Refresh users list after deletion
//     }
//   };

//   // Filter users based on search term
//   const filteredUsers = users.filter((user) => {
//     const searchTermLower = searchTerm.toLowerCase();
//     return (
//       user.username.toLowerCase().includes(searchTermLower) ||
//       user.type.toLowerCase().includes(searchTermLower)
//     );
//   });

//   if (!isAuthenticated) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={styles.pageContainer}>
//       <h1 style={{ color: "#1877f2" }}>Welcome, Admin!</h1>
//       <button
//         onClick={handleLogout}
//         style={{
//           marginBottom: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Logout
//       </button>

//       <h2 style={{ marginTop: "20px", marginBottom: "10px", color: "#333" }}>
//         Messages
//       </h2>
//       <table
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           borderRadius: "8px",
//           overflow: "hidden",
//         }}
//       >
//         <thead>
//           <tr style={{ backgroundColor: "#1877f2", color: "white" }}>
//             <th style={styles.th}>Full Name</th>
//             <th style={styles.th}>Email</th>
//             <th style={styles.th}>Message</th>
//           </tr>
//         </thead>
//         <tbody>
//           {messages.map((msg, index) => (
//             <tr
//               key={msg.id}
//               style={{
//                 backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
//               }}
//             >
//               <td style={styles.td}>{msg.full_name}</td>
//               <td style={styles.td}>{msg.email}</td>
//               <td style={styles.td}>{msg.message}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2 style={{ marginTop: "40px", color: "#333" }}>Create New User</h2>
//       <form onSubmit={handleCreateUser}>
//         {error && (
//           <div style={{ color: "red", marginBottom: "10px" }}>
//             <strong>{error}</strong>
//           </div>
//         )}
//         <div style={{ marginBottom: "10px" }}>
//           <label
//             htmlFor="username"
//             style={{
//               display: "block",
//               fontWeight: "bold",
//               marginBottom: "5px",
//             }}
//           >
//             Username
//           </label>
//           <input
//             id="username"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter username"
//             style={{
//               width: "100%",
//               padding: "10px",
//               borderRadius: "8px",
//               border: "1px solid #ddd",
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label
//             htmlFor="password"
//             style={{
//               display: "block",
//               fontWeight: "bold",
//               marginBottom: "5px",
//             }}
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//             style={{
//               width: "100%",
//               padding: "10px",
//               borderRadius: "8px",
//               border: "1px solid #ddd",
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label
//             htmlFor="userType"
//             style={{
//               display: "block",
//               fontWeight: "bold",
//               marginBottom: "5px",
//             }}
//           >
//             User Type
//           </label>
//           <select
//             id="userType"
//             value={userType}
//             onChange={(e) => setUserType(e.target.value)}
//             style={{
//               width: "100%",
//               padding: "10px",
//               borderRadius: "8px",
//               border: "1px solid #ddd",
//             }}
//           >
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#1877f2",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Create User
//         </button>
//       </form>

//       <h2 style={{ marginTop: "40px", color: "#333" }}>Manage Users</h2>

//       {/* Search Box */}
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search by username or type"
//         style={{
//           marginBottom: "20px",
//           padding: "10px",
//           width: "100%",
//           borderRadius: "8px",
//           border: "1px solid #ddd",
//         }}
//       />

//       <table
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           borderRadius: "8px",
//           overflow: "hidden",
//         }}
//       >
//         <thead>
//           <tr style={{ backgroundColor: "#1877f2", color: "white" }}>
//             <th style={styles.th}>Username</th>
//             <th style={styles.th}>Type</th>
//             <th style={styles.th}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.map((user, index) => (
//             <tr
//               key={user.id}
//               style={{
//                 backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
//               }}
//             >
//               <td style={styles.td}>{user.username}</td>
//               <td style={styles.td}>{user.type}</td>
//               <td style={styles.td}>
//                 <button
//                   onClick={() => handleDeleteUser(user.id)}
//                   style={{
//                     backgroundColor: "#ff4d4d",
//                     color: "white",
//                     border: "none",
//                     padding: "5px 10px",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const styles = {
//   pageContainer: {
//     padding: "40px", // Overall padding for the page
//     marginTop: "40px", // Top margin for spacing
//   },
//   th: {
//     padding: "12px",
//     textAlign: "left",
//     borderBottom: "2px solid #ddd",
//   },
//   td: {
//     padding: "12px",
//     textAlign: "left",
//     borderBottom: "1px solid #ddd",
//   },
// };


"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Search term for users
  const [messageSearchTerm, setMessageSearchTerm] = useState(""); // Search term for messages
  const [username, setUsername] = useState(""); // Username field
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user"); // Default to 'user'
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
      fetchMessages();
      fetchUsers();
    }
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase.from("messages").select("*");
    if (error) {
      console.error("Error fetching messages:", error);
    } else {
      setMessages(data);
    }
  };

  const fetchUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      console.error("Error fetching users:", error);
    } else {
      setUsers(data);
    }
  };

  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
    });

    const result = await response.json();

    if (result.message === "Logout successful!") {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("userType");
      window.location.href = "/login";
    } else {
      console.error("Logout failed");
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();

    // Insert the new user into the database
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          username: username,
          password: password,
          type: userType, // 'user' or 'admin'
        },
      ]);

    if (error) {
      setError(`Error creating user: ${error.message}`);
    } else {
      alert("User created successfully!");
      setUsername("");
      setPassword("");
      setUserType("user");
      setError("");
      fetchUsers(); // Refresh users list after creating new user
    }
  };

  const handleDeleteUser = async (userId) => {
    // Deleting the user from the database
    const { data, error } = await supabase
      .from("users")
      .delete()
      .eq("id", userId);

    if (error) {
      console.error("Error deleting user:", error);
    } else {
      alert("User deleted successfully!");
      fetchUsers(); // Refresh users list after deletion
    }
  };

  // Filter users based on search term
  const filteredUsers = users.filter((user) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      user.username.toLowerCase().includes(searchTermLower) ||
      user.type.toLowerCase().includes(searchTermLower)
    );
  });

  // Filter messages based on search term
  const filteredMessages = messages.filter((message) => {
    const messageSearchTermLower = messageSearchTerm.toLowerCase();
    return (
      message.full_name.toLowerCase().includes(messageSearchTermLower) ||
      message.email.toLowerCase().includes(messageSearchTermLower) ||
      message.message.toLowerCase().includes(messageSearchTermLower)
    );
  });

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.pageContainer}>
      <h1 style={{ color: "#1877f2" }}>Welcome, Admin!</h1>
      <button
        onClick={handleLogout}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>

      <h2 style={{ marginTop: "20px", marginBottom: "10px", color: "#333" }}>
        Messages
      </h2>

      {/* Message Search Box */}
      <input
        type="text"
        value={messageSearchTerm}
        onChange={(e) => setMessageSearchTerm(e.target.value)}
        placeholder="Search messages by full name, email, or message"
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#1877f2", color: "white" }}>
            <th style={styles.th}>Full Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Message</th>
          </tr>
        </thead>
        <tbody>
          {filteredMessages.map((msg, index) => (
            <tr
              key={msg.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
              }}
            >
              <td style={styles.td}>{msg.full_name}</td>
              <td style={styles.td}>{msg.email}</td>
              <td style={styles.td}>{msg.message}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "40px", color: "#333" }}>Create New User</h2>
      <form onSubmit={handleCreateUser}>
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>
            <strong>{error}</strong>
          </div>
        )}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="username"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="password"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="userType"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            User Type
          </label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#1877f2",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Create User
        </button>
      </form>

      <h2 style={{ marginTop: "40px", color: "#333" }}>Manage Users</h2>

      {/* User Search Box */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by username or type"
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#1877f2", color: "white" }}>
            <th style={styles.th}>Username</th>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr
              key={user.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
              }}
            >
              <td style={styles.td}>{user.username}</td>
              <td style={styles.td}>{user.type}</td>
              <td style={styles.td}>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  style={{
                    backgroundColor: "#ff4d4d",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  pageContainer: {
    padding: "40px", // Overall padding for the page
    marginTop: "40px", // Top margin for spacing
  },
  th: {
    padding: "12px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
  },
  td: {
    padding: "12px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
};
