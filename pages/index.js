export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '60px',
      backgroundColor: '#fefefe',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333' }}>
        🎓 Welcome to the School of Purpose
      </h1>

      <p style={{ marginBottom: '40px', color: '#666', fontSize: '1.2rem' }}>
        Discover your Purpose, Calling, and Assignment.  
        Learn, grow, and walk in your divine destiny.
      </p>

      {/* Navigation Buttons */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <a href="/curriculum" style={buttonStyle}>📖 Curriculum</a>
        <a href="/classroom" style={buttonStyle}>🎥 Classroom</a>
        <a href="/assignments" style={buttonStyle}>📝 Assignments</a>
        <a href="/library" style={buttonStyle}>📚 Library</a>
        <a href="/chatroom" style={buttonStyle}>💬 Chatroom</a>
      </div>

      <footer style={{ marginTop: '60px', color: '#aaa' }}>
        © {new Date().getFullYear()} School of Purpose | Olajide Ajibowo
      </footer>
    </div>
  )
}

const buttonStyle = {
  display: 'block',
  padding: '20px',
  backgroundColor: '#0066cc',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '10px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  transition: '0.3s',
  textAlign: 'center'
}
