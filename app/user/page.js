// "use client";
// import { useState, useEffect } from "react";
// import { supabase } from "../../lib/supabaseClient";
// import { useRouter } from "next/navigation";

// export default function User() {
//   const [user, setUser] = useState(null);
//   const [message, setMessage] = useState("");
//   const router = useRouter();

//   // Get the current user session
//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data, error } = await supabase.auth.getUser();
      
//       if (error) {
//         console.error("Error fetching user:", error.message);
//         router.push("/login"); // Redirect to login if not authenticated
//       } else {
//         setUser(data);
//       }
//     };

//     fetchUser();
//   }, [router]);

//   // Handle message submission
//   const handleMessageSubmit = async () => {
//     const { error } = await supabase.from("messages").insert([
//       {
//         name: user?.user_metadata?.username,
//         phone_number: user?.user_metadata?.phone_number, // Optionally store phone number if provided during registration
//         email: user?.email,
//         message: message,
//       },
//     ]);

//     if (error) {
//       alert("Message not sent: " + error.message);
//     } else {
//       alert("Message sent successfully!");
//       setMessage(""); // Clear the message field
//     }
//   };

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div style={styles.pageContainer}>
//       <h2 style={styles.welcomeHeader}>Welcome, {user.user_metadata.username}!</h2>
//       <div style={styles.userDetails}>
//         <h4>Your Information:</h4>
//         <ul style={styles.userDetailsList}>
//           <li>Email: {user.email}</li>
//           <li>Username: {user.user_metadata.username}</li>
//           <li>Phone: {user.user_metadata.phone_number}</li>
//         </ul>
//       </div>

//       <div style={styles.messageForm}>
//         <h4>Send a Message:</h4>
//         <textarea
//           placeholder="Write your message here..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           style={styles.textArea}
//         />
//         <button onClick={handleMessageSubmit} style={styles.submitButton}>
//           Send Message
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   pageContainer: {
//     paddingTop: "40px",
//     padding: "20px",
//     maxWidth: "800px",
//     marginLeft: "auto",
//     marginRight: "auto",
//     backgroundColor: "#f9f9f9",
//     borderRadius: "8px",
//     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//     fontFamily: "Arial, sans-serif",
//   },
//   welcomeHeader: {
//     textAlign: "center",
//     fontSize: "28px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   },
//   userDetails: {
//     marginBottom: "30px",
//   },
//   userDetailsList: {
//     listStyleType: "none",
//     paddingLeft: "0",
//     fontSize: "16px",
//     lineHeight: "1.6",
//   },
//   messageForm: {
//     marginTop: "30px",
//   },
//   textArea: {
//     width: "100%",
//     height: "150px",
//     padding: "10px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//     marginBottom: "10px",
//     boxSizing: "border-box",
//   },
//   submitButton: {
//     padding: "10px 20px",
//     fontSize: "16px",
//     color: "#fff",
//     backgroundColor: "#007bff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };
