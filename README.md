# NorthrupOperationsML: Insurance Workflow Intelligence Platform

![NorthrupOperationsML](https://api.placeholder.com/380/200?text=NorthrupOperationsML)

A cutting-edge AI agent system designed to streamline insurance operations, automate renewal workflows, and provide intelligent insights for Northrup Corporation's insurance business.

## 🤖 Overview

NorthrupAgentAI transforms traditional insurance workflows by implementing a multi-agent AI system that handles policy renewal prioritization, client communication automation, document analysis, and intelligent decision support. The platform leverages modern LLM technologies to create a seamless, efficient workflow for insurance professionals.

## ✨ Key Features

- **🧠 Multi-Agent Intelligence System** - Coordinated AI agents working together on complex insurance tasks
- **📄 Document Understanding** - Automated analysis of insurance policies and client documents
- **📊 Smart Renewal Prioritization** - AI-powered scoring and prioritization of policy renewals
- **✉️ Intelligent Communication** - Automated drafting of client emails and follow-ups
- **📋 Policy Comparison** - Side-by-side analysis of coverage options and changes
- **📈 Agent Performance Metrics** - Detailed analytics on AI agent performance and outcomes
- **🔄 Workflow Automation** - End-to-end automation of repetitive insurance tasks

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - App Router & React Server Components
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/UI** - Component library
- **tRPC** - Type-safe API layer
- **Tanstack Query** - Data fetching and caching

### AI & Backend
- **LangChain.js / LangGraph** - Agent workflows and orchestration
- **Claude API** - Core reasoning and NLP tasks
- **Supabase + pgvector** - Vector database for semantic search
- **Vercel AI SDK** - AI streaming and UI integrations
- **Prisma** - Database ORM
- **PostgreSQL** - Relational database

### DevOps & Monitoring
- **Langfuse** - AI observability
- **Vercel** - Deployment platform
- **GitHub Actions** - CI/CD

## 📋 Project Structure

```
northrup-operations-ml/
├── app/                   # Next.js App Router
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   └── ...                # Other routes
├── components/            # React components
│   ├── ui/                # UI components (from shadcn/ui)
│   └── ...                # Feature components
├── lib/                   # Shared utilities
│   ├── agents/            # AI agent implementations
│   │   ├── document-agent.ts
│   │   ├── renewal-agent.ts
│   │   ├── communication-agent.ts
│   │   ├── orchestrator.ts
│   │   └── ...
│   ├── db/                # Database utilities
│   ├── api/               # API clients
│   └── utils/             # Miscellaneous utilities
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── ...                    # Config files, etc.
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL with pgvector extension
- Claude API key
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/northrup-operations-ml.git
   cd northrup-operations-ml
   ```

2. Install pnpm (if not already installed):
   ```bash
   npm install -g pnpm
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys and database connection info
   ```

5. Run database migrations:
   ```bash
   pnpm dlx prisma migrate dev
   ```

6. Start the development server:
   ```bash
   pnpm dev
   ```

6. Visit `http://localhost:3000` to view the application

## 🔄 AI Agent Architecture

NorthrupAgentAI implements a sophisticated multi-agent system:

### Document Analysis Agent
Processes insurance documents, extracts policy information, and converts unstructured data into structured formats.

### Renewal Priority Agent
Analyzes client data, renewal dates, and business value to prioritize renewal tasks for insurance staff.

### Communication Agent
Drafts personalized client communications, suggests follow-up strategies, and analyzes client responses.

### Policy Comparison Agent
Compares insurance policies, identifies coverage gaps, and suggests optimal coverage options.

### Orchestration Engine
Coordinates agent activities, manages workflows, and ensures cohesive system operation.

## 📊 Dashboard Features

The system provides comprehensive dashboards for insurance professionals:

- **Priority Queue**: AI-ranked renewal tasks requiring attention
- **Client Communications Hub**: Centralized view of all client interactions
- **Document Analytics**: Insights extracted from insurance documents
- **Agent Performance Metrics**: Tracking of AI system effectiveness
- **Task Automation**: One-click workflow automation

## 📝 Development Roadmap

### Phase 1: Foundation (Weeks 1-2)
- [x] Project setup and infrastructure
- [x] Basic agent implementation
- [ ] Core database schema design
- [ ] Document analysis pipeline

### Phase 2: Advanced Agents (Weeks 3-5)
- [ ] Renewal prioritization agent
- [ ] Client communication agent
- [ ] Agent orchestration system
- [ ] RAG implementation for insurance knowledge

### Phase 3: Enterprise Features (Weeks 6-8)
- [ ] Multi-agent workflows
- [ ] Advanced analytics dashboard
- [ ] Performance optimization
- [ ] User acceptance testing

## 🧪 Testing

```bash
# Run unit tests
pnpm test

# Run integration tests
pnpm test:integration

# Run E2E tests
pnpm test:e2e
```

## 🔧 Configuration

The system can be configured through environment variables:

- `ANTHROPIC_API_KEY`: API key for Claude
- `DATABASE_URL`: PostgreSQL connection string
- `SUPABASE_URL`: Supabase project URL
- `SUPABASE_KEY`: Supabase API key
- `LANGFUSE_PUBLIC_KEY`: Langfuse public key for monitoring
- `LANGFUSE_SECRET_KEY`: Langfuse secret key

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Mary Northrup - maryenorthrup@gmail.com

Project Link: [https://github.com/NrupM/northrup-operations-ml](https://github.com/NrupM/northrup-operations-ml)
