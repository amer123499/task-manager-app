import React from 'react';

export default function Loader({ label = 'Loading…' }) {
  return (
    <div style={styles.wrap} role="status" aria-live="polite">
      <div style={styles.spinner} />
      <span style={styles.label}>{label}</span>
    </div>
  );
}

const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '2rem',
    color: '#6b7280',
  },
  spinner: {
    width: 18,
    height: 18,
    border: '3px solid #e5e7eb',
    borderTopColor: '#2563eb',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  label: { fontSize: '0.9rem' },
};