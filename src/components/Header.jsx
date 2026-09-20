import React from 'react';

export default function Header({ stats }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>📝 Task Manager</h1>
      <p style={styles.sub}>
        {stats.total} task{stats.total !== 1 ? 's' : ''} ·{' '}
        {stats.completed} done · {stats.active} active
      </p>
    </header>
  );
}

const styles = {
  header: { marginBottom: '1.5rem', textAlign: 'center' },
  h1: { fontSize: '1.75rem', marginBottom: '0.25rem' },
  sub: { color: '#6b7280', fontSize: '0.9rem' },
};