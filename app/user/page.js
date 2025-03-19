// "use client";
// import { useEffect, useState } from "react";

// export default function UserPage() {
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     // Retrieve the username and userType from localStorage
//     const storedUsername = localStorage.getItem("username");
//     const storedUserType = localStorage.getItem("userType");

//     // Check if user is logged in and if they are a user
//     if (storedUsername && storedUserType === "user") {
//       setUsername(storedUsername);
//     } else {
//       // If not logged in or not a user, redirect to login
//       window.location.href = "/login";
//     }
//   }, []);

//   if (!username) {
//     return <p>Loading...</p>; // Show loading while username is being fetched
//   }

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Welcome, {username}!</h2>
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
//     textAlign: "center",
//   },
//   heading: {
//     color: "#1877f2",
//   },
// };



"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient"; // Make sure you import the supabase client
import { useRouter } from 'next/navigation'; // Import from 'next/navigation' instead of 'next/router'

export default function UserPage() {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState(""); // To show success or error message after form submission
  const [isClient, setIsClient] = useState(false); // To check if we are on the client side
  const router = useRouter();

  useEffect(() => {
    // Check if we are on the client-side
    setIsClient(true);

    // Retrieve the username and userType from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedUserType = localStorage.getItem("userType");

    // Check if user is logged in and if they are a user
    if (storedUsername && storedUserType === "user") {
      setUsername(storedUsername);
    } else {
      // If not logged in or not a user, redirect to login
      window.location.href = "/login";
    }
  }, []);

  const handleMessageSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Insert the message data into the database
    const { data, error } = await supabase
      .from("messages") // Assuming you have a "messages" table
      .insert([
        {
          username,
          full_name: fullName,
          email,
          message,
        },
      ]);

    if (error) {
      setResponseMessage("Error submitting message: " + error.message);
    } else {
      setResponseMessage("Message sent successfully!");
      setFullName(""); // Clear form fields
      setEmail("");
      setMessage("");
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("username"); // Remove the username from localStorage
    localStorage.removeItem("userType"); // Remove the userType from localStorage
    router.push("/login"); // Redirect to the login page
  };

  if (!username || !isClient) {
    return <p>Loading...</p>; // Show loading while username is being fetched or until client is ready
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </div>
      
      <h2 style={styles.heading}>Welcome, {username}!</h2>
      
      <form onSubmit={handleMessageSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Your Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Your Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
            required
          />
        </div>

        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      {responseMessage && <p style={styles.responseMessage}>{responseMessage}</p>}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    textAlign: "center",
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
    marginTop : "80px"
  },
  heading: {
    color: "#1877f2",
    marginBottom: "20px",
  },
  form: {
    width: "80%",
    maxWidth: "600px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginTop: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "12px",
    marginTop: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1877f2",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  responseMessage: {
    marginTop: "15px",
    fontSize: "16px",
    color: "#28a745",
  },
};
