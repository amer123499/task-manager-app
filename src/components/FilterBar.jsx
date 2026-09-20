import React from 'react';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
];

export default function FilterBar({ filter, onChange, onClearCompleted, hasCompleted }) {
  return (
    <div style={styles.bar}>
      <div role="tablist" aria-label="Filter tasks" style={styles.tabs}>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => onChange(f.id)}
            style={{
              ...styles.tab,
              ...(filter === f.id ? styles.tabActive : {}),
            }}
          >
            {f.label}
          </button>
        ))}
      </div>
      {hasCompleted && (
        <button onClick={onClearCompleted} style={styles.clear}>
          Clear completed
        </button>
      )}
    </div>
  );
}

const styles = {
  bar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  tabs: { display: 'flex', gap: '0.25rem' },
  tab: {
    padding: '0.4rem 0.8rem',
    background: '#fff',
    border: '1px solid #d1d5db',
    borderRadius: 8,
    fontSize: '0.875rem',
    color: '#374151',
  },
  tabActive: {
    background: '#2563eb',
    color: '#fff',
    borderColor: '#2563eb',
  },
  clear: {
    padding: '0.4rem 0.8rem',
    background: 'transparent',
    border: '1px solid #dc2626',
    color: '#dc2626',
    borderRadius: 8,
    fontSize: '0.8rem',
  },
};