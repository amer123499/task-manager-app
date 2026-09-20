import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.wrap} role="alert">
          <h1 style={styles.h1}>Something went wrong</h1>
          <p style={styles.p}>
            The app hit an unexpected error. Try reloading the page.
          </p>
          <button onClick={this.handleReset} style={styles.btn}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const styles = {
  wrap: {
    maxWidth: 500,
    margin: '4rem auto',
    padding: '2rem',
    textAlign: 'center',
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  h1: { fontSize: '1.5rem', marginBottom: '0.5rem' },
  p: { color: '#6b7280', marginBottom: '1rem' },
  btn: {
    padding: '0.5rem 1rem',
    background: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
  },
};

export default ErrorBoundary;