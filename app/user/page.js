"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function UserPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");  // Added username field
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirect to login if no token is found
    } else {
      setIsAuthenticated(true); // Proceed if token exists
      setUsername(localStorage.getItem("username") || "");  // Retrieve username from localStorage
    }
  }, []);

  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
    });

    const result = await response.json();

    if (result.message === "Logout successful!") {
      // Clear local storage and redirect
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("userType");
      window.location.href = "/login"; // Redirect to login page after logout
    } else {
      console.error("Logout failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from("messages").insert([ 
        {
          username: username,  // Include username in the insert
          full_name: fullName,
          email: email,
          message: message,
        },
      ]);

      if (error) {
        console.error("Error sending message:", error);
        alert("Error sending message: " + error.message);
      } else {
        alert("Message sent successfully!");
        setFullName(""); // Clear the name field after sending
        setEmail(""); // Clear the email field after sending
        setMessage(""); // Clear the message field after sending
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Unexpected error occurred: " + err.message);
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px", marginTop: "60px", paddingTop: "40px" }}>
      <h1 style={{ color: "#1877f2" }}>Welcome, {username}!</h1>
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
        Send a Message
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="fullName"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Your Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
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
            htmlFor="email"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Your Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
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
            htmlFor="message"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            style={{
              width: "100%",
              height: "100px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />
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
          Send
        </button>
      </form>
    </div>
  );
}
