export default function Assignments() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      backgroundColor: '#f9fff1',
      minHeight: '100vh',
      lineHeight: 1.6
    }}>
      <h1 style={{ fontSize: '2rem', color: '#228B22', textAlign: 'center' }}>
        📝 Assignments
      </h1>

      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Here are your assignments for each module. Submit them to:  
        <strong>schoolofpurposegpc@gmail.com</strong>
      </p>

      {/* Assignment List */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h2>📖 Module 1: Fundamentals of Purpose</h2>
        <p>
          Go to a quiet place and ask God: <em>"What is my purpose and calling?"</em>  
          Write/type all that comes to your mind and submit by **Feb 2023**.
        </p>
        <hr />

        <h2>👤 Module 2: Identity in Christ</h2>
        <p>
          Be still and ask the Holy Spirit: <em>"What is the catch-word or name of my destiny?"</em>  
          Submit by **Feb 2023**.
        </p>
        <hr />

        <h2>🔥 Module 4: Burden of Purpose</h2>
        <p>
          Reflect and share a past or current pain you see as linked to your purpose.  
          Submit by **Nov 1st, 2022**.
        </p>
        <hr />

        <h2>🌟 Module 6: Discovering Purpose/Calling</h2>
        <p>
          Draft your prophetic destiny blueprint with:  
          1. Calling  2. Purpose  3. Assignments  
          4. Scriptural Mandate  5. Anointing/Mantle  
          6. Encounter  7. Talent  8. Warning  
          9. Target audience.  
          Submit by **Oct 2022**.
        </p>
      </div>

      <p style={{ marginTop: '30px', textAlign: 'center' }}>
        📤 All submissions go to <strong>schoolofpurposegpc@gmail.com</strong>
      </p>

      {/* Navigation */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <a href="/" style={{ marginRight: '20px' }}>🏠 Home</a>
        <a href="/curriculum" style={{ marginRight: '20px' }}>📖 Curriculum</a>
        <a href="/classroom">🎥 Classroom</a>
      </div>
    </div>
  )
}
