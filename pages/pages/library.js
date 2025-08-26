export default function Library() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      backgroundColor: '#fff9f3',
      minHeight: '100vh',
      lineHeight: 1.6
    }}>
      <h1 style={{ fontSize: '2rem', color: '#8B0000', textAlign: 'center' }}>
        📚 Digital Library
      </h1>

      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Explore resources, books, and study materials to guide you on your journey of purpose.
      </p>

      {/* Library Resources */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h2>📖 Recommended Books</h2>
        <ul>
          <li><strong>Everybody is Born Pregnant</strong> – Olajide Ajibowo</li>
          <li><strong>Maximizing Your Potential</strong> – Dr. Myles Munroe</li>
          <li><strong>Pursuit of Purpose</strong> – Dr. Myles Munroe</li>
        </ul>

        <h2>📄 Study Materials</h2>
        <ul>
          <li><a href="#">📝 Module Notes (PDF) – Coming Soon</a></li>
          <li><a href="#">🎧 Audio Teachings – Coming Soon</a></li>
          <li><a href="#">📹 Video Archive – Coming Soon</a></li>
        </ul>

        <h2>🔗 External Resources</h2>
        <p>
          More teachings and study aids will be uploaded here. Stay tuned!
        </p>
      </div>

      <p style={{ marginTop: '30px', textAlign: 'center' }}>
        ✨ The library will expand as we grow. Keep checking for updates!
      </p>

      {/* Navigation */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <a href="/" style={{ marginRight: '20px' }}>🏠 Home</a>
        <a href="/curriculum" style={{ marginRight: '20px' }}>📖 Curriculum</a>
        <a href="/classroom" style={{ marginRight: '20px' }}>🎥 Classroom</a>
        <a href="/assignments">📝 Assignments</a>
      </div>
    </div>
  )
}
