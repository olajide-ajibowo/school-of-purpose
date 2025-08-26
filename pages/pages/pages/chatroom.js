import { useState } from "react";

export default function Chatroom() {
  const [messages, setMessages] = useState([
    { user: "System", text: "👋 Welcome to the School of Purpose Chatroom!" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { user: "You", text: input }]);
    setInput("");
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      backgroundColor: '#f3f9ff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', color: '#0066cc' }}>
        💬 Student & Mentor Chatroom
      </h1>

      <div style={{
        width: '100%',
        maxWidth: '800px',
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        height: '400px',
        overflowY: 'auto',
        marginBottom: '20px'
      }}>
        {messages.map((msg, i) => (
          <p key={i}><strong>{msg.user}:</strong> {msg.text}</p>
        ))}
      </div>

      <div style={{ display: 'flex', maxWidth: '800px', width: '100%' }}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px'
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            backgroundColor: '#0066cc',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>

      {/* Navigation */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <a href="/" style={{ marginRight: '20px' }}>🏠 Home</a>
        <a href="/curriculum" style={{ marginRight: '20px' }}>📖 Curriculum</a>
        <a href="/classroom" style={{ marginRight: '20px' }}>🎥 Classroom</a>
        <a href="/assignments" style={{ marginRight: '20px' }}>📝 Assignments</a>
        <a href="/library">📚 Library</a>
      </div>
    </div>
  );
}
