import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mountApp = () => {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    console.error("Critical: #root element missing.");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("React Mounting Failed:", err);
    rootElement.innerHTML = `
      <div style="padding: 2rem; color: #ef4444; font-family: monospace; background: #080808; border: 1px solid #222; margin: 1rem;">
        <h1 style="font-size: 14px; margin-bottom: 1rem; color: #fff;">[REACT_MOUNT_ERROR]</h1>
        <pre style="background: #000; padding: 1rem; overflow: auto; border: 1px solid #111; font-size: 11px;">${err instanceof Error ? err.stack || err.message : String(err)}</pre>
      </div>
    `;
  }
};

// Ensure DOM is ready before mounting
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}

