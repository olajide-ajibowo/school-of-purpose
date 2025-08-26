export default function Classroom() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      backgroundColor: '#eef7ff',
      minHeight: '100vh',
      lineHeight: 1.6,
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', color: '#ff6600' }}>
        🎥 Digital Classroom
      </h1>

      <p style={{ marginBottom: '30px' }}>
        Welcome to your interactive classroom. Watch, learn, and grow! 🙏✨
      </p>

      {/* Demo Video Embed */}
      <div style={{ margin: '0 auto', maxWidth: '800px' }}>
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="School of Purpose Teaching"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p style={{ marginTop: '20px', color: '#333' }}>
        📚 This classroom will host teachings, video lessons, and live sessions.
      </p>

      {/* Navigation */}
      <div style={{ marginTop: '40px' }}>
        <a href="/" style={{ marginRight: '20px' }}>🏠 Home</a>
        <a href="/curriculum" style={{ marginRight: '20px' }}>📖 Curriculum</a>
        <a href="/assignments">📝 Assignments</a>
      </div>
    </div>
  )
}
