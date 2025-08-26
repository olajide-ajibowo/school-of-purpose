import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      {/* Navbar */}
      <nav style={{
        backgroundColor: '#0066cc',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ color: '#fff', margin: 0 }}>🎓 School of Purpose</h2>
        <div>
          <Link href="/" style={linkStyle}>Home</Link>
          <Link href="/curriculum" style={linkStyle}>Curriculum</Link>
          <Link href="/classroom" style={linkStyle}>Classroom</Link>
          <Link href="/assignments" style={linkStyle}>Assignments</Link>
          <Link href="/library" style={linkStyle}>Library</Link>
          <Link href="/chatroom" style={linkStyle}>Chatroom</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main style={{ padding: '30px' }}>
        {children}
      </main>
    </div>
  )
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginLeft: '20px',
  fontWeight: 'bold'
};
