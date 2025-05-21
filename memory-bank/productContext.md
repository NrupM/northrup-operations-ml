# Product Context

This file provides a high-level overview of the project and the expected product that will be created. Initially it is based upon projectBrief.md (if provided) and all other available project-related information in the working directory. This file is intended to be updated as the project evolves, and should be used to inform all other modes of the project's goals and context.
2025-05-21 19:22:00 - Initial setup based on package.json analysis

## Project Goal

* A Next.js application with ML capabilities, leveraging:
  - LangChain for AI/ML operations
  - Pinecone for vector database
  - Supabase for backend services
  - React Query for data management
  - TypeScript for type safety

## Key Features

* AI/ML Integration using LangChain with Anthropic and OpenAI providers
* Vector database operations with Pinecone
* Backend services with Supabase
* Modern React components with shadcn/ui
* Type-safe development with TypeScript and Zod

## Overall Architecture

* Frontend: Next.js 15.3.2 with React 19
* AI/ML Layer: LangChain with multiple providers
* Data Layer: 
  - Pinecone for vector operations
  - Supabase for traditional backend
* State Management: React Query
* Development Tools:
  - TypeScript
  - ESLint
  - Prettier
  - Jest for testing
  - Tailwind CSS for styling