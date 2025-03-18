"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function MessagePage() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleMessageSend = async () => {
    const { error } = await supabase
      .from("messages")
      .insert([{ username, message }]);
    if (error) alert("Message not sent: " + error.message);
    else alert("Message sent successfully!");
  };

  return (
    <div>
      <h2>Send Message</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <textarea
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleMessageSend}>Send</button>
    </div>
  );
}
