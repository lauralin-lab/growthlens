# GrowthLens

AI-powered user research and growth channel analysis. Describe your product, get a presentation-ready research deck with competitor analysis, user personas, growth channels, and more — in minutes, not weeks.

## What It Does

GrowthLens generates comprehensive research decks with 7 modules:

| Module | What You Get |
|--------|-------------|
| Competitor Analysis | Profiles, comparison matrix, SWOT, strategic gaps |
| User Segments & Growth | Data-driven personas with acquisition channels |
| Market Sizing | TAM / SAM / SOM with methodology |
| Customer Journey | Awareness to advocacy with touchpoints |
| Jobs-to-be-Done | Functional, emotional, social jobs + hiring/firing criteria |
| Interview Script | Screener, discussion guide, probing questions |
| Survey Design | Question flow, scales, skip logic, sample size |

Each module is backed by real-time web search and structured frameworks used by top consulting firms.

## Tech Stack

- **Framework:** Next.js 16 + React 19
- **AI:** Anthropic Claude API + Tavily web search
- **Auth & Database:** Supabase
- **Payments:** Stripe
- **Styling:** Tailwind CSS 4

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/lauralin-lab/growthlens.git
cd growthlens
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Fill in your keys:

- **Supabase** — create a project at [supabase.com](https://supabase.com)
- **Anthropic** — get an API key at [console.anthropic.com](https://console.anthropic.com)
- **Stripe** — set up at [dashboard.stripe.com](https://dashboard.stripe.com)
- **Tavily** — get a search API key at [tavily.com](https://tavily.com)

### 3. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How It Works

1. **Describe your product** — enter a short description and pick the modules you need
2. **AI researches & builds** — Claude searches the web, analyzes competitors, identifies user segments, and generates your deck
3. **Present or export** — view your interactive deck in the browser or export to PDF

## License

MIT
