import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>NorthrupOperationsML | Insurance Workflow Intelligence</title>
        <meta name="description" content="AI-powered insurance workflow intelligence platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            NorthrupOperationsML
          </h1>
          <p className="text-xl text-gray-600">
            A cutting-edge AI agent system for insurance operations
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-12">
          <div className="h-64 bg-gray-300 relative">
            {/* Placeholder image - replace with your actual hero image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Project Screenshot or Demo
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Streamlining Insurance Workflows with AI
            </h2>
            <p className="text-gray-600 mb-4">
              NorthrupOperationsML transforms insurance operations by implementing intelligent
              agents for policy management, renewal prioritization, and client communication.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AI Agents</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Insurance</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">LangChain</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Claude API</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Multi-agent intelligence system</li>
              <li>• Document understanding & analysis</li>
              <li>• Smart renewal prioritization</li>
              <li>• Intelligent client communication</li>
              <li>• Policy comparison & recommendation</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Technology Stack</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Next.js & React</li>
              <li>• TypeScript</li>
              <li>• LangChain.js / LangGraph</li>
              <li>• Claude API</li>
              <li>• Supabase & pgvector</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://github.com/NrupM/northrup-operations-ml" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            View on GitHub
          </a>
        </div>
      </main>

      <footer className="mt-12 py-6 border-t border-gray-200">
        <div className="container mx-auto text-center text-gray-500">
          <p>© 2025 Mary Northrup | NorthrupOperationsML</p>
        </div>
      </footer>
    </div>
  );
}