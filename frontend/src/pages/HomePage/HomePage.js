import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <h1>Welcome to Taskini</h1>
        <p className="hero-subtitle">Your simple and efficient task management solution</p>
        <div className="hero-actions">
          <Link to="/register" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/tasks" className="btn btn-secondary">
            View Tasks
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📝 Create Tasks</h3>
            <p>Easily create and organize your tasks with titles, descriptions, and priorities.</p>
          </div>
          <div className="feature-card">
            <h3>✅ Track Progress</h3>
            <p>Monitor your task status from pending to in-progress to completed.</p>
          </div>
          <div className="feature-card">
            <h3>🔐 Secure Access</h3>
            <p>Your tasks are protected with secure authentication and authorization.</p>
          </div>
          <div className="feature-card">
            <h3>📱 Responsive Design</h3>
            <p>Access your tasks from any device with our responsive interface.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

