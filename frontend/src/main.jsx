import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setStatus(data))
      .catch(err => setStatus({ error: err.message }));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1>MEARN Frontend</h1>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
