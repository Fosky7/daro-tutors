import { useState, useEffect } from 'react';

const BuildIndicator = () => {
  // Use a fixed timestamp to indicate the last build time.
  // In development, this will update only on full page reload, not HMR.
  const buildTime = new Date().toISOString();

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: '#fff',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontFamily: 'monospace',
      zIndex: 9999,
    }}>
      Build: {buildTime}
    </div>
  );
};

export default BuildIndicator;
