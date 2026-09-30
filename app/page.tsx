"use client";

import { useState } from "react";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Sparkles,
  Handshake,
  MapPin,
  Star,
  Clock,
  Car,
  ClipboardCheck,
  KeyRound,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";

const vehicles = [
  {
    name: "Toyota Land Cruiser ZX",
    details: "2021 · 42,000 km · Diesel · Automatic",
    price: "KSh 12.5M",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Nissan X-Trail",
    details: "2019 · 68,000 km · Petrol · Automatic",
    price: "KSh 2.95M",
    image:
      "https://images.unsplash.com/photo-1517994112540-009c47ea476b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Toyota Camry Hybrid",
    details: "2020 · 51,000 km · Hybrid · Automatic",
    price: "KSh 4.35M",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* NAVIGATION */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#" className="brand">
            <span className="brand-mark">SM</span>

            <span>
              <strong>Safi Motors</strong>
              <small>Nairobi</small>
            </span>
          </a>

          <nav className="desktop-nav">
            <a href="#home">Home</a>
            <a href="#inventory">Inventory</a>
            <a href="#sell">Sell Your Car</a>
            <a href="#finance">Financing</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>

            <a href="#contact" className="nav-button">
              Talk to Safi Motors
            </a>
          </nav>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-nav">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#inventory" onClick={() => setMenuOpen(false)}>
              Inventory
            </a>
            <a href="#sell" onClick={() => setMenuOpen(false)}>
              Sell Your Car
            </a>
            <a href="#finance" onClick={() => setMenuOpen(false)}>
              Financing
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="location-badge">
            <MapPin size={14} />
            Kangundo Road · Nairobi
          </div>

          <h1>
            Find Your Next <span>Drive</span>
          </h1>

          <p>
            Safi Motors is a Nairobi car dealer on Kangundo Road offering
            imported and locally sourced vehicles. Browse the platform, then
            visit the yard to see what is in stock.
          </p>

          <div className="hero-buttons">
            <a href="#inventory" className="gold-button">
              Browse Cars
              <ArrowRight size={18} />
            </a>

            <a href="#sell" className="dark-button">
              Sell Your Car
            </a>

            <a href="#contact" className="outline-button">
              Talk to Safi Motors
            </a>
          </div>

          {/* SEARCH */}
          <div className="search-box">
            <div>
              <label>Make</label>
              <select>
                <option>Any make</option>
                <option>Toyota</option>
                <option>Nissan</option>
                <option>BMW</option>
                <option>Ford</option>
              </select>
            </div>

            <div>
              <label>Model</label>
              <select>
                <option>Any model</option>
              </select>
            </div>

            <div>
              <label>Budget</label>
              <select>
                <option>Any budget</option>
                <option>Under KSh 1.5M</option>
                <option>KSh 1.5M – 3M</option>
                <option>KSh 3M – 6M</option>
                <option>KSh 6M – 10M</option>
                <option>Above KSh 10M</option>
              </select>
            </div>

            <div>
              <label>Body type</label>
              <select>
                <option>Any body type</option>
                <option>SUV</option>
                <option>Sedan</option>
                <option>Pickup</option>
                <option>Hatchback</option>
              </select>
            </div>

            <button className="search-button">
              <Search size={18} />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="stats">
          <div className="stat">
            <strong>3.9</strong>
            <span>Google rating from 24 reviews</span>
          </div>

          <div className="stat">
            <strong>24+</strong>
            <span>Customer reviews on Google</span>
          </div>

          <div className="stat">
            <strong>Open</strong>
            <span>Closes at 5:30 PM</span>
          </div>
        </div>
      </section>

      {/* INVENTORY */}
      <section id="inventory" className="section darker">
        <div className="section-heading-row">
          <div>
            <small>FEATURED</small>
            <h2>Demo inventory, built for real stock</h2>
            <p>
              Sample vehicles for demonstration. Real Safi Motors stock can be
              uploaded later through the dealership system.
            </p>
          </div>

          <a href="#inventory" className="small-button">
            View all <ArrowRight size={16} />
          </a>
        </div>

        <div className="vehicle-grid">
          {vehicles.map((vehicle) => (
            <article className="vehicle-card" key={vehicle.name}>
              <div className="vehicle-image">
                <img src={vehicle.image} alt={vehicle.name} />

                <span>DEMO</span>
                <span className="source">Imported</span>
              </div>

              <div className="vehicle-info">
                <div className="vehicle-title">
                  <div>
                    <h3>{vehicle.name}</h3>
                    <p>{vehicle.details}</p>
                  </div>

                  <strong>{vehicle.price}</strong>
                </div>

                <button className="details-button">
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY SAFI */}
      <section id="about" className="section">
        <div className="section-heading">
          <small>WHY SAFI MOTORS</small>
          <h2>
            A dealership experience built on clean cars and clear information
          </h2>
          <p>
            Reviewers on Google describe Safi Motors as selling imported and
            locally sourced vehicles and mention clean cars.
          </p>
        </div>

        <div className="features">
          <Feature
            icon={<Sparkles />}
            title="Clean, presentable cars"
            text="Customer reviews mention clean cars — presentation matters at the Kangundo Road yard."
          />

          <Feature
            icon={<Car />}
            title="Imported and local stock"
            text="Reviews describe both imported units and locally sourced vehicles."
          />

          <Feature
            icon={<ShieldCheck />}
            title="Inspect before you commit"
            text="View any vehicle in person at the yard and take your time with it."
          />

          <Feature
            icon={<Star />}
            title="3.9 on Google"
            text="Rated 3.9 from 24 reviews on the supplied Google listing."
          />

          <Feature
            icon={<MapPin />}
            title="Easy to find"
            text="Kangundo Road, Nairobi — plus code PWJ3+H3."
          />

          <Feature
            icon={<Handshake />}
            title="Straightforward dealing"
            text="Terms are confirmed directly with the Safi Motors team."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section darker">
        <div className="section-heading">
          <small>HOW IT WORKS</small>
          <h2>Browse → Inspect → Buy</h2>
        </div>

        <div className="steps">
          <Step
            number="01"
            icon={<Search />}
            title="Browse"
            text="Filter by make, body type, budget and more to shortlist what fits."
          />

          <Step
            number="02"
            icon={<ClipboardCheck />}
            title="Inspect"
            text="Come to the yard on Kangundo Road and inspect the vehicle yourself."
          />

          <Step
            number="03"
            icon={<KeyRound />}
            title="Buy"
            text="Agree terms directly with the Safi Motors team and drive away."
          />
        </div>
      </section>

      {/* VISIT */}
      <section className="section">
        <div className="visit-grid">
          <div>
            <small>VISIT THE YARD</small>
            <h2>Kangundo Road, Nairobi</h2>

            <p>
              Plus code PWJ3+H3 Nairobi. Open until 5:30 PM according to the
              supplied listing.
            </p>
          </div>

          <div className="visit-card">
            <div>
              <Star />
              <p>
                <strong>3.9 from 24 Google reviews.</strong>
                <br />
                Reviewers mention imported and locally sourced vehicles and
                clean cars.
              </p>
            </div>

            <div>
              <Clock />
              <p>
                Open until 5:30 PM.
                <br />
                Full weekly hours will be confirmed.
              </p>
            </div>

            <a href="#contact" className="small-button full">
              See location and hours
            </a>
          </div>
        </div>
      </section>

      {/* SELL / CTA */}
      <section id="sell" className="section">
        <div className="cta">
          <h2>Ready to find your next drive?</h2>

          <p>
            Send an enquiry and the Safi Motors team can get back to you.
            Official phone and WhatsApp lines will be added once confirmed.
          </p>

          <div className="hero-buttons center">
            <a href="#inventory" className="gold-button">
              Browse Cars
            </a>

            <a href="#contact" className="outline-button">
              Talk to Safi Motors
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div>
          <small>CONTACT SAFI MOTORS</small>
          <h2>Let's talk about your next vehicle.</h2>
          <p>
            Kangundo Road, Nairobi
            <br />
            PWJ3+H3 Nairobi
          </p>
        </div>

        <div className="contact-box">
          <p>Phone number pending confirmation</p>
          <p>WhatsApp number pending confirmation</p>
          <p>Email pending confirmation</p>

          <button className="gold-button">
            Send an enquiry
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <span className="brand-mark">SM</span>

          <div>
            <strong>Safi Motors</strong>
            <p>Nairobi · Kangundo Road</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="#inventory">Inventory</a>
          <a href="#sell">Sell Your Car</a>
          <a href="#finance">Financing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Safi Motors. All rights reserved.
        </p>
      </footer>

      {/* FLOATING ENQUIRY */}
      <button className="floating-chat" aria-label="Enquiry">
        <MessageCircle size={24} />
      </button>
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Step({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="step-card">
      <div className="step-top">
        <strong>{number}</strong>
        <span />
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}