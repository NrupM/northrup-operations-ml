import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="hero-container">
      <Head>
        <title>NorthrupOperationsML | Insurance Workflow Intelligence</title>
        <meta name="description" content="AI-powered insurance workflow intelligence platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-content">
        <div className="header-section">
          <h1 className="main-title">
            NorthrupOperationsML
          </h1>
          <p className="subtitle">
            A cutting-edge AI agent system for insurance operations
          </p>
        </div>

        <div className="feature-card">
          <div className="card-image">
            {/* Placeholder image - replace with your actual hero image */}
            <div className="image-placeholder">
              Project Screenshot or Demo
            </div>
          </div>
          <div className="card-content">
            <h2 className="card-title">
              Streamlining Insurance Workflows with AI
            </h2>
            <p className="card-text">
              NorthrupOperationsML transforms insurance operations by implementing intelligent
              agents for policy management, renewal prioritization, and client communication.
            </p>
            <div className="tags-container">
              <span className="tag tag-blue">AI Agents</span>
              <span className="tag tag-green">Insurance</span>
              <span className="tag tag-purple">Next.js</span>
              <span className="tag tag-orange">LangChain</span>
              <span className="tag tag-pink">Claude API</span>
            </div>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-box">
            <h3 className="feature-title">Key Features</h3>
            <ul className="feature-list">
              <li>• Multi-agent intelligence system</li>
              <li>• Document understanding & analysis</li>
              <li>• Smart renewal prioritization</li>
              <li>• Intelligent client communication</li>
              <li>• Policy comparison & recommendation</li>
            </ul>
          </div>
          <div className="feature-box">
            <h3 className="feature-title">Technology Stack</h3>
            <ul className="feature-list">
              <li>• Next.js & React</li>
              <li>• TypeScript</li>
              <li>• LangChain.js / LangGraph</li>
              <li>• Claude API</li>
              <li>• Supabase & pgvector</li>
              <li>• Regular CSS</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/NrupM/northrup-operations-ml"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            View on GitHub
          </a>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Mary Northrup | NorthrupOperationsML</p>
        </div>
      </footer>
    </div>
  );
}