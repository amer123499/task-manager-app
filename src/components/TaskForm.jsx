import React, { useState } from 'react';
import { validateTask, TITLE_MAX, DESC_MAX } from '../utils/validation';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const { valid, errors: vErrors, clean } = validateTask({
      title,
      description,
    });

    if (!valid) {
      setErrors(vErrors);
      setSubmitting(false);
      return;
    }

    try {
      await onAdd(clean);
      setTitle('');
      setDescription('');
      setErrors({});
    } catch (err) {
      setErrors({ form: 'Could not add task. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} noValidate>
      <div style={styles.field}>
        <label htmlFor="title" style={styles.label}>
          Title <span style={styles.req}>*</span>
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Finish Workshop 3 assignment"
          maxLength={TITLE_MAX}
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? 'title-error' : undefined}
          style={{
            ...styles.input,
            borderColor: errors.title ? '#dc2626' : '#d1d5db',
          }}
        />
        {errors.title && (
          <span id="title-error" style={styles.error} role="alert">
            {errors.title}
          </span>
        )}
      </div>

      <div style={styles.field}>
        <label htmlFor="description" style={styles.label}>
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Optional details…"
          maxLength={DESC_MAX}
          rows={3}
          aria-invalid={!!errors.description}
          style={{
            ...styles.input,
            resize: 'vertical',
            borderColor: errors.description ? '#dc2626' : '#d1d5db',
          }}
        />
        <div style={styles.counter}>
          {description.length}/{DESC_MAX}
        </div>
        {errors.description && (
          <span style={styles.error} role="alert">
            {errors.description}
          </span>
        )}
      </div>

      {errors.form && (
        <div style={styles.formError} role="alert">
          {errors.form}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        style={{
          ...styles.button,
          opacity: submitting ? 0.6 : 1,
          cursor: submitting ? 'not-allowed' : 'pointer',
        }}
      >
        {submitting ? 'Adding…' : '+ Add Task'}
      </button>
    </form>
  );
}

const styles = {
  form: {
    background: '#fff',
    padding: '1.25rem',
    borderRadius: 12,
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    marginBottom: '1.5rem',
  },
  field: { marginBottom: '1rem', display: 'flex', flexDirection: 'column' },
  label: { fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.35rem' },
  req: { color: '#dc2626' },
  input: {
    padding: '0.6rem 0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: 8,
    fontSize: '0.95rem',
    fontFamily: 'inherit',
  },
  counter: {
    fontSize: '0.75rem',
    color: '#9ca3af',
    textAlign: 'right',
    marginTop: '0.25rem',
  },
  error: { color: '#dc2626', fontSize: '0.8rem', marginTop: '0.25rem' },
  formError: {
    background: '#fef2f2',
    color: '#991b1b',
    padding: '0.5rem 0.75rem',
    borderRadius: 8,
    fontSize: '0.875rem',
    marginBottom: '0.75rem',
  },
  button: {
    width: '100%',
    padding: '0.7rem',
    background: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: '1rem',
    fontWeight: 600,
  },
};