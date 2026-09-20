import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div style={styles.empty} role="status">
        <p style={styles.emptyText}>No tasks here yet.</p>
        <p style={styles.emptyHint}>Add one above to get started 👆</p>
      </div>
    );
  }

  return (
    <ul style={styles.list} aria-label="Task list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

const styles = {
  list: { listStyle: 'none' },
  empty: {
    textAlign: 'center',
    padding: '2rem 1rem',
    background: '#fff',
    borderRadius: 12,
    color: '#6b7280',
  },
  emptyText: { fontSize: '1rem', marginBottom: '0.25rem' },
  emptyHint: { fontSize: '0.85rem', color: '#9ca3af' },
};