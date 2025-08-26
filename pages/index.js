export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f9f9ff',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#4a00e0' }}>
        🎓 Welcome to the School of Purpose ✨
      </h1>
      <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
        Discover your <b>Purpose</b>, <b>Calling</b>, and <b>Assignment</b> 🙏
      </p>

      <div style={{ marginTop: '40px' }}>
        <a href="/curriculum" style={{
          padding: '15px 30px',
          backgroundColor: '#4a00e0',
          color: 'white',
          borderRadius: '10px',
          textDecoration: 'none',
          fontSize: '1rem',
          margin: '10px'
        }}>
          📖 View Curriculum
        </a>
        <a href="/classroom" style={{
          padding: '15px 30px',
          backgroundColor: '#ff6600',
          color: 'white',
          borderRadius: '10px',
          textDecoration: 'none',
          fontSize: '1rem',
          margin: '10px'
        }}>
          🎥 Enter Classroom
        </a>
      </div>

      <p style={{ marginTop: '50px', fontSize: '0.9rem', color: '#666' }}>
        Powered by School of Purpose – Olajide Ajibowo ✍️
      </p>
    </div>
  )
}
