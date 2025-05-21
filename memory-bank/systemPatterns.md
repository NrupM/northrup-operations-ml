# System Patterns

This file documents recurring patterns and standards used in the project.
2025-05-21 19:23:06 - Initial setup patterns

## Coding Patterns

* TypeScript for type safety
* React 19 with Next.js for frontend
* ESLint and Prettier for code formatting
* Jest for testing

## Architectural Patterns

* AI/ML Integration Pattern:
  - LangChain as abstraction layer
  - Multiple AI providers (Anthropic, OpenAI)
  - Vector database integration with Pinecone
* Frontend Architecture:
  - Next.js for server-side rendering
  - React Query for data fetching
  - shadcn/ui for component library
  - Semantic CSS classes for styling:
    * Component-specific classes
    * Reusable utility classes
    * CSS variables for theming
* Backend Integration:
  - Supabase for backend services
  - Zod for runtime type validation

## Testing Patterns

* Jest for unit testing
* TypeScript for compile-time type checking
* ESLint for static code analysis