'use client';

import React, { useState } from 'react';
import styles from './InputDesign.module.css';

const SignInForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with:', { username, password });
  };

  return (
    <section className={styles.formContainer}>
      <h2 className={styles.formTitle}>Sign in</h2>
      <form className={styles.formFields} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.inputLabel}>
            Username
          </label>
          <input
            type="text"
            id="username"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.continueButton}>
          Continue
        </button>
        <div className={styles.linksContainer}>
          <button type="button" className={styles.createAccount}>
            Create Account
          </button>
          <button type="button" className={styles.forgotPassword}>
            Forgot Password
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignInForm;
