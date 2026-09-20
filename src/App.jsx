import React, { useMemo, useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import Loader from './components/Loader';
import { useLocalStorage } from './hooks/useLocalStorage';
import './styles/App.css';

const STORAGE_KEY = 'task-manager-tasks-v1';

function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function App() {
  const [tasks, setTasks] = useLocalStorage(STORAGE_KEY, []);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate initial load (shows loading state)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    return { total, completed, active: total - completed };
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter((t) => !t.completed);
    if (filter === 'completed') return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, filter]);

  const addTask = async ({ title, description }) => {
    try {
      const newTask = {
        id: generateId(),
        title,
        description: description || '',
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTasks((prev) => [newTask, ...prev]);
    } catch (err) {
      console.error('addTask failed:', err);
      setError('Failed to add task.');
      throw err;
    }
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((t) => !t.completed));
  };

  if (loading) return <Loader label="Loading your tasks…" />;

  return (
    <div className="app-container">
      <Header stats={stats} />

      {error && (
        <div className="app-error" role="alert">
          {error}
        </div>
      )}

      <TaskForm onAdd={addTask} />

      {stats.total > 0 && (
        <FilterBar
          filter={filter}
          onChange={setFilter}
          onClearCompleted={clearCompleted}
          hasCompleted={stats.completed > 0}
        />
      )}

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />

      <footer className="app-footer">
        <p>Built with React · Data saved locally in your browser</p>
      </footer>
    </div>
  );
}