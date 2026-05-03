import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Bitcoin,
  ExternalLink,
  Flame,
  LineChart,
  Newspaper,
  Search,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

const sampleNews = [
  {
    tag: "Ethereum",
    title: "ETH tests a major 4H resistance zone as traders watch breakout confirmation",
    source: "CryptoPulse Desk",
    time: "2 min ago",
    sentiment: "Bullish",
    url: "#",
  },
  {
    tag: "Bitcoin",
    title: "BTC dominance holds steady while altcoins attempt short-term recovery",
    source: "Market Watch",
    time: "8 min ago",
    sentiment: "Neutral",
    url: "#",
  },
  {
    tag: "DeFi",
    title: "DeFi tokens show renewed volume after support retests across major pairs",
    source: "Chain Radar",
    time: "18 min ago",
    sentiment: "Bullish",
    url: "#",
  },
  {
    tag: "Macro",
    title: "Crypto traders wait for volatility as dollar index approaches a key zone",
    source: "Global Markets",
    time: "31 min ago",
    sentiment: "Caution",
    url: "#",
  },
  {
    tag: "Altcoins",
    title: "Layer-1 coins consolidate near resistance after strong intraday moves",
    source: "Altcoin Radar",
    time: "45 min ago",
    sentiment: "Neutral",
    url: "#",
  },
];

const blogPosts = [
  {
    title: "ETH Price Prediction Today: Can Ethereum Break $2,350?",
    category: "Ethereum",
    excerpt:
      "Ethereum is trading near a major decision zone. A clean 4H candle close above $2,350 can open the door for upside continuation.",
    date: "Today",
  },
  {
    title: "Bitcoin Market Structure: Key Levels Traders Should Watch",
    category: "Bitcoin",
    excerpt:
      "BTC remains the main driver for crypto sentiment. Watch the next support and resistance reaction before entering new trades.",
    date: "Today",
  },
  {
    title: "Support and Resistance Explained for Crypto Beginners",
    category: "Beginner Guide",
    excerpt:
      "Learn how support and resistance zones work, why they matter, and how traders use them for better risk management.",
    date: "Guide",
  },
];

const marketRows = [
  { pair: "BTC/USDT", price: "$64,820", change: "+1.24%", bias: "Bullish" },
  { pair: "ETH/USDT", price: "$2,331", change: "+0.14%", bias: "Decision Zone" },
  { pair: "SOL/USDT", price: "$148.20", change: "+2.08%", bias: "Bullish" },
  { pair: "BNB/USDT", price: "$592.10", change: "-0.36%", bias: "Neutral" },
];

function Badge({ children, tone = "green" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Bitcoin", "Ethereum", "Altcoins", "DeFi", "Macro"];

  const filteredNews = useMemo(() => {
    return sampleNews.filter((item) => {
      const text = `${item.title} ${item.tag} ${item.source}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      const matchesCategory = category === "All" || item.tag === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <main className="site">
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="glow glow-three" />

      <nav className="navbar">
        <div className="brand">
          <div className="logo">
            <Bitcoin size={30} />
          </div>
          <div>
            <h1>CryptoPulse Live</h1>
            <p>News • Analysis • Market structure</p>
          </div>
        </div>

        <div className="nav-links">
          <a href="#news">News</a>
          <a href="#blog">Blog</a>
          <a href="#markets">Markets</a>
          <a href="#analysis">Analysis</a>
        </div>

        <a className="nav-button" href="#contact">Join Alerts</a>
      </nav>

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-copy"
        >
          <Badge>🚨 Crypto news blog</Badge>
          <h2>Daily crypto news, Bitcoin updates and technical analysis.</h2>
          <p>
            Track Bitcoin, Ethereum, altcoins, macro updates, market sentiment,
            support and resistance zones in one clean blog website.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#news">View Live News</a>
            <a className="secondary-button" href="#blog">Read Blog</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="setup-card"
        >
          <div className="card-heading">
            <div>
              <Flame className="icon-green" />
              <h3>Today’s Hot Setup</h3>
              <p>ETH/USDT • 4H timeframe</p>
            </div>
            <Badge tone="yellow">Decision Zone</Badge>
          </div>

          <div className="level-box">
            <span>Resistance</span>
            <strong className="red-text">$2,325 – $2,350</strong>
          </div>
          <div className="level-box">
            <span>Immediate Support</span>
            <strong className="green-text">$2,290 – $2,300</strong>
          </div>
          <div className="level-box">
            <span>Bullish Targets</span>
            <strong>$2,380 • $2,420 • $2,500</strong>
          </div>
        </motion.div>
      </section>

      <section id="news" className="panel">
        <div className="section-header">
          <div>
            <div className="section-title">
              <Newspaper className="icon-green" />
              <h2>Live Crypto News</h2>
            </div>
            <p>Currently showing sample news. Later you can connect CryptoPanic, NewsAPI or RSS feeds.</p>
          </div>

          <div className="search-box">
            <Search size={20} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search news..."
            />
          </div>
        </div>

        <div className="category-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={category === cat ? "category active" : "category"}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="news-grid">
          {filteredNews.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="news-card"
            >
              <div className="news-meta">
                <Badge tone={item.sentiment === "Bullish" ? "green" : item.sentiment === "Caution" ? "red" : "blue"}>
                  {item.tag}
                </Badge>
                <span>{item.time}</span>
              </div>
              <h3>{item.title}</h3>
              <div className="read-row">
                <span>{item.source} • {item.sentiment}</span>
                <a href={item.url}>Read <ExternalLink size={15} /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="blog" className="panel">
        <div className="section-title">
          <Newspaper className="icon-green" />
          <h2>Latest Blog Posts</h2>
        </div>
        <p className="muted">Use these as your first crypto blog articles. You can edit the titles anytime.</p>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.title}>
              <Badge tone="blue">{post.category}</Badge>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="read-row">
                <span>{post.date}</span>
                <a href="#">Open Post <ExternalLink size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="markets" className="split">
        <div className="panel small-panel">
          <div className="section-title">
            <Bell className="icon-yellow" />
            <h2>Alert Rules</h2>
          </div>
          <p className="alert-line">Notify when ETH closes above <b>$2,350</b>.</p>
          <p className="alert-line">Warn if ETH breaks below <b>$2,290</b>.</p>
          <p className="alert-line">Highlight high-volume breakouts only.</p>
        </div>

        <div className="panel">
          <div className="section-title">
            <LineChart className="icon-blue" />
            <h2>Market Watchlist</h2>
          </div>
          <div className="market-table">
            {marketRows.map((row) => (
              <div className="market-row" key={row.pair}>
                <span>{row.pair}</span>
                <span>{row.price}</span>
                <span className={row.change.startsWith("+") ? "green-text" : "red-text"}>{row.change}</span>
                <span>{row.bias}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="analysis" className="analysis-grid">
        <div className="feature-card">
          <TrendingUp className="icon-green" />
          <h3>Bullish Scenario</h3>
          <p>Break and close above resistance, then wait for retest confirmation before entry.</p>
        </div>
        <div className="feature-card">
          <ShieldCheck className="icon-green" />
          <h3>Risk Management</h3>
          <p>Avoid chasing candles. Use invalidation below support and keep position size controlled.</p>
        </div>
        <div className="feature-card">
          <Zap className="icon-green" />
          <h3>Fast Updates</h3>
          <p>Use API or RSS feed integration for real-time headlines and market alerts.</p>
        </div>
      </section>

      <footer id="contact" className="footer">
        <p>CryptoPulse Live • Educational content only • Not financial advice</p>
      </footer>
    </main>
  );
}

export default App;
