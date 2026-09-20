import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={styles.item}>
      <label style={styles.label}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Mark "${task.title}" as ${
            task.completed ? 'active' : 'completed'
          }`}
          style={styles.checkbox}
        />
        <div style={styles.content}>
          <span
            style={{
              ...styles.title,
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#9ca3af' : '#111827',
            }}
          >
            {task.title}
          </span>
          {task.description && (
            <span style={styles.desc}>{task.description}</span>
          )}
          <span style={styles.date}>
            {new Date(task.createdAt).toLocaleDateString()}
          </span>
        </div>
      </label>
      <button
        onClick={() => onDelete(task.id)}
        aria-label={`Delete "${task.title}"`}
        style={styles.delete}
        title="Delete"
      >
        ✕
      </button>
    </li>
  );
}

const styles = {
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '0.75rem',
    background: '#fff',
    borderRadius: 8,
    marginBottom: '0.5rem',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    gap: '0.5rem',
  },
  label: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.6rem',
    flex: 1,
    cursor: 'pointer',
  },
  checkbox: { marginTop: '0.25rem', width: 18, height: 18, cursor: 'pointer' },
  content: { display: 'flex', flexDirection: 'column', gap: '0.15rem' },
  title: { fontSize: '0.95rem', wordBreak: 'break-word' },
  desc: { fontSize: '0.8rem', color: '#6b7280', wordBreak: 'break-word' },
  date: { fontSize: '0.7rem', color: '#9ca3af' },
  delete: {
    background: 'transparent',
    border: 'none',
    color: '#9ca3af',
    fontSize: '1rem',
    padding: '0.25rem 0.5rem',
    borderRadius: 6,
  },
};