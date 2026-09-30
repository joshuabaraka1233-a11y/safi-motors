"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Car, CheckCircle2, ClipboardCheck, Handshake, KeyRound, MapPin, Menu, Search, ShieldCheck, Sparkles, Star, X } from "lucide-react";
import { getVehicles } from "@/lib/storage";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [make, setMake] = useState("All");
  const [body, setBody] = useState("All");
  const [budget, setBudget] = useState("All");
  const [liveVehicles, setLiveVehicles] = useState(() => getVehicles());

  useEffect(() => {
    const sync = () => setLiveVehicles(getVehicles());
    window.addEventListener("safi-data-changed", sync);
    return () => window.removeEventListener("safi-data-changed", sync);
  }, []);

  const filtered = useMemo(() => liveVehicles.filter(v =>
    (make === "All" || v.make === make) &&
    (body === "All" || v.body === body) &&
    (budget === "All" ||
      (budget === "Under 3M" && v.price < 3000000) ||
      (budget === "3M - 6M" && v.price >= 3000000 && v.price <= 6000000) ||
      (budget === "Above 6M" && v.price > 6000000))
  ), [liveVehicles, make, body, budget]);

  return <main>
    <header className="nav"><div className="nav-inner">
      <Link href="/" className="brand"><span className="brand-mark">SM</span><span><strong>Safi Motors</strong><small>Nairobi</small></span></Link>
      <nav className="desktop-nav"><Link href="/">Home</Link><Link href="/inventory">Inventory</Link><Link href="/sell-your-car">Sell Your Car</Link><Link href="/financing">Financing</Link><Link href="#about">About</Link><Link href="/contact">Contact</Link><Link href="/contact" className="nav-button">Talk to Safi Motors</Link></nav>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
    </div>{menuOpen && <div className="mobile-nav"><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link><Link href="/inventory" onClick={() => setMenuOpen(false)}>Inventory</Link><Link href="/sell-your-car" onClick={() => setMenuOpen(false)}>Sell Your Car</Link><Link href="/financing" onClick={() => setMenuOpen(false)}>Financing</Link><Link href="#about" onClick={() => setMenuOpen(false)}>About</Link><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></div>}</header>

    <section id="home" className="hero"><div className="hero-overlay"/><div className="hero-content">
      <div className="location-badge"><MapPin size={14}/>Kangundo Road · Nairobi</div>
      <div className="verified-badge"><ShieldCheck size={14}/>Verified business information</div>
      <h1>Find Your Next <span>Drive</span></h1>
      <p>Safi Motors is listed as a car dealer on Kangundo Road, Nairobi. Browse confirmed stock here once the dealership supplies the vehicle details and approved photos.</p>
      <div className="hero-buttons"><Link href="/inventory" className="gold-button">Browse Cars <ArrowRight size={18}/></Link><Link href="/sell-your-car" className="dark-button">Sell Your Car</Link><Link href="/contact" className="outline-button">Talk to Safi Motors</Link></div>
      <div className="search-box">
        <div><label>Make</label><select value={make} onChange={e => setMake(e.target.value)}><option>All</option></select></div>
        <div><label>Model</label><select disabled><option>Verified stock only</option></select></div>
        <div><label>Budget</label><select value={budget} onChange={e => setBudget(e.target.value)}><option>All</option><option>Under 3M</option><option>3M - 6M</option><option>Above 6M</option></select></div>
        <div><label>Body type</label><select value={body} onChange={e => setBody(e.target.value)}><option>All</option></select></div>
        <Link className="search-button" href={`/inventory?make=${encodeURIComponent(make)}&body=${encodeURIComponent(body)}&budget=${encodeURIComponent(budget)}`}><Search size={18}/>Search {filtered.length}</Link>
      </div>
    </div></section>

    <section className="section"><div className="stats">
      <div className="stat"><strong>8:00–5:30</strong><span>Mon–Sat listed business hours</span></div>
      <div className="stat"><strong>Closed</strong><span>Sunday, according to the public listing</span></div>
      <div className="stat"><strong>Stock</strong><span>Only dealership-confirmed vehicles are published</span></div>
    </div></section>

    <section id="inventory" className="section darker"><div className="section-heading-row"><div><small>VERIFIED INVENTORY</small><h2>Confirmed vehicles only</h2><p>We will publish a vehicle only after its details and approved photos have been confirmed by Safi Motors.</p></div><Link href="/inventory" className="small-button">View inventory <ArrowRight size={16}/></Link></div>
      <div className="verified-empty"><ShieldCheck size={34}/><h3>No verified vehicles published yet</h3><p>Send the dealership's current stock, prices, specifications and approved photos to populate the catalogue.</p><Link href="/contact" className="gold-button">Send an enquiry <ArrowRight size={17}/></Link></div>
    </section>

    <section id="about" className="section"><div className="section-heading"><small>VERIFIED BUSINESS INFORMATION</small><h2>Safi Motors · Kangundo Road, Nairobi</h2><p>Public listings currently identify Safi Motors as a motor-vehicle dealer at Kangundo Road, Nairobi. We keep unsupported claims out of the website.</p></div><div className="features">
      <Feature icon={<ShieldCheck/>} title="Verified business listing" text="Public business listings identify Safi Motors on Kangundo Road, Nairobi."/>
      <Feature icon={<MapPin/>} title="Kangundo Road" text="The public location information identifies the business on Kangundo Road, Nairobi."/>
      <Feature icon={<ClipboardCheck/>} title="Confirmed stock policy" text="Vehicle cards require dealership confirmation before publication."/>
      <Feature icon={<Car/>} title="Approved photos" text="No generic stock photo will be presented as a Safi Motors vehicle."/>
      <Feature icon={<Star/>} title="Reviews shown carefully" text="Current public sources can differ, so review counts are not presented as a fixed claim here."/>
      <Feature icon={<Handshake/>} title="Direct enquiries" text="Customers can contact the dealership through the enquiry form while contact details are being confirmed."/>
    </div></section>

    <section className="section darker"><div className="section-heading"><small>HOW IT WORKS</small><h2>Browse → Inspect → Buy</h2></div><div className="steps"><Step number="01" icon={<Search/>} title="Browse" text="Review confirmed vehicles and their published specifications."/><Step number="02" icon={<ClipboardCheck/>} title="Inspect" text="Visit the Kangundo Road yard and inspect the vehicle."/><Step number="03" icon={<KeyRound/>} title="Buy" text="Agree the final terms directly with Safi Motors." /></div></section>

    <section className="section"><div className="visit-grid"><div><small>VISIT THE YARD</small><h2>Kangundo Road, Nairobi</h2><p>Public listings currently show Monday–Saturday hours of 8:00 AM–5:30 PM and Sunday closed. Confirm before visiting because business hours can change.</p><Link href="/contact" className="gold-button">Get in touch <ArrowRight size={17}/></Link></div><div className="visit-card"><div><ShieldCheck/><p><strong>Verified location information.</strong><br/>Kangundo Road, Nairobi.</p></div><div><MapPin/><p>Kangundo Road, Nairobi<br/>Public listing location</p></div><Link href="/contact" className="small-button full">Contact Safi Motors</Link></div></div></section>

    <section className="section"><div className="cta"><h2>Ready to find your next drive?</h2><p>Browse confirmed vehicles when available, or send an enquiry to Safi Motors.</p><div className="hero-buttons center"><Link href="/inventory" className="gold-button">Browse Cars</Link><Link href="/financing" className="outline-button">Financing calculator</Link><Link href="/contact" className="outline-button">Send enquiry</Link></div></div></section>

    <section id="contact" className="contact-section"><div><small>CONTACT SAFI MOTORS</small><h2>Let's talk about your next vehicle.</h2><p>Kangundo Road, Nairobi</p></div><div className="contact-box"><p>Phone and WhatsApp details: pending dealership confirmation</p><p>Email: pending dealership confirmation</p><Link href="/contact" className="gold-button">Send an enquiry <ArrowRight size={18}/></Link></div></section>

    <footer><div className="footer-brand"><span className="brand-mark">SM</span><div><strong>Safi Motors</strong><p>Nairobi · Kangundo Road</p></div></div><div className="footer-links"><Link href="/inventory">Inventory</Link><Link href="/sell-your-car">Sell Your Car</Link><Link href="/financing">Financing</Link><Link href="#about">About</Link><Link href="/contact">Contact</Link></div><p className="copyright">© {new Date().getFullYear()} Safi Motors. All rights reserved.</p></footer>
    <Link href="/contact" className="floating-chat" aria-label="Send enquiry"><CheckCircle2 size={24}/></Link>
  </main>;
}
function Feature({icon,title,text}:{icon:React.ReactNode;title:string;text:string}){return <div className="feature-card"><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>}
function Step({number,icon,title,text}:{number:string;icon:React.ReactNode;title:string;text:string}){return <div className="step-card"><div className="step-top"><strong>{number}</strong><span/>{icon}</div><h3>{title}</h3><p>{text}</p></div>}
