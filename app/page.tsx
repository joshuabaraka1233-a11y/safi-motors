"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Car, CheckCircle2, ClipboardCheck, Handshake, KeyRound, MapPin, Menu, Search, ShieldCheck, Sparkles, Star, X } from "lucide-react";
import { formatKes, vehicles } from "@/data/vehicles";

export default function Home() {
  const [menuOpen,setMenuOpen]=useState(false);
  const [make,setMake]=useState("All");
  const [body,setBody]=useState("All");
  const [budget,setBudget]=useState("All");

  const filtered=vehicles.filter(v=>
    (make==="All"||v.make===make) &&
    (body==="All"||v.body===body) &&
    (budget==="All"||(budget==="Under 3M"&&v.price<3000000)||(budget==="3M - 6M"&&v.price>=3000000&&v.price<=6000000)||(budget==="Above 6M"&&v.price>6000000))
  );

  return <main>
    <header className="nav"><div className="nav-inner">
      <Link href="/" className="brand"><span className="brand-mark">SM</span><span><strong>Safi Motors</strong><small>Nairobi</small></span></Link>
      <nav className="desktop-nav"><Link href="/">Home</Link><Link href="/inventory">Inventory</Link><Link href="/sell-your-car">Sell Your Car</Link><Link href="/financing">Financing</Link><Link href="#about">About</Link><Link href="/contact">Contact</Link><Link href="/contact" className="nav-button">Talk to Safi Motors</Link></nav>
      <button className="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
    </div>{menuOpen&&<div className="mobile-nav"><Link href="/" onClick={()=>setMenuOpen(false)}>Home</Link><Link href="/inventory" onClick={()=>setMenuOpen(false)}>Inventory</Link><Link href="/sell-your-car" onClick={()=>setMenuOpen(false)}>Sell Your Car</Link><Link href="/financing" onClick={()=>setMenuOpen(false)}>Financing</Link><Link href="#about" onClick={()=>setMenuOpen(false)}>About</Link><Link href="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link></div>}</header>

    <section id="home" className="hero"><div className="hero-overlay"/><div className="hero-content">
      <div className="location-badge"><MapPin size={14}/>Kangundo Road · Nairobi</div>
      <h1>Find Your Next <span>Drive</span></h1>
      <p>Safi Motors is a Nairobi car dealer on Kangundo Road offering imported and locally sourced vehicles. Browse the platform, then visit the yard to see what is in stock.</p>
      <div className="hero-buttons"><Link href="/inventory" className="gold-button">Browse Cars <ArrowRight size={18}/></Link><Link href="/sell-your-car" className="dark-button">Sell Your Car</Link><Link href="/contact" className="outline-button">Talk to Safi Motors</Link></div>
      <div className="search-box">
        <div><label>Make</label><select value={make} onChange={e=>setMake(e.target.value)}><option>All</option><option>Toyota</option><option>Nissan</option></select></div>
        <div><label>Model</label><select disabled><option>All models</option></select></div>
        <div><label>Budget</label><select value={budget} onChange={e=>setBudget(e.target.value)}><option>All</option><option>Under 3M</option><option>3M - 6M</option><option>Above 6M</option></select></div>
        <div><label>Body type</label><select value={body} onChange={e=>setBody(e.target.value)}><option>All</option><option>SUV</option><option>Sedan</option></select></div>
        <Link className="search-button" href="/inventory"><Search size={18}/>Search {filtered.length}</Link>
      </div>
    </div></section>

    <section className="section"><div className="stats"><div className="stat"><strong>3.9</strong><span>Google rating from 24 reviews</span></div><div className="stat"><strong>24+</strong><span>Customer reviews on Google</span></div><div className="stat"><strong>Open</strong><span>Closes at 5:30 PM</span></div></div></section>

    <section id="inventory" className="section darker"><div className="section-heading-row"><div><small>FEATURED</small><h2>Explore the inventory</h2><p>Browse the catalogue and open any vehicle for specifications and an enquiry.</p></div><Link href="/inventory" className="small-button">View all <ArrowRight size={16}/></Link></div>
      <div className="vehicle-grid">{vehicles.map(v=><article className="vehicle-card" key={v.id}><Link href={"/vehicles/"+v.id} className="vehicle-image"><img src={v.images[0]} alt={v.name}/><span>DEMO</span><span className="source">{v.source}</span></Link><div className="vehicle-info"><div className="vehicle-title"><div><h3>{v.name}</h3><p>{v.year} · {v.mileage.toLocaleString()} km · {v.fuel} · {v.transmission}</p></div><strong>{formatKes(v.price)}</strong></div><Link className="details-button" href={"/vehicles/"+v.id}>View details <ArrowRight size={16}/></Link></div></article>)}</div>
    </section>

    <section id="about" className="section"><div className="section-heading"><small>WHY SAFI MOTORS</small><h2>A dealership experience built on clean cars and clear information</h2><p>Customer reviews supplied for this project describe imported and locally sourced vehicles and mention clean cars.</p></div><div className="features">
      <Feature icon={<Sparkles/>} title="Clean, presentable cars" text="Customer reviews mention clean cars and dealership presentation."/>
      <Feature icon={<Car/>} title="Imported and local stock" text="The supplied listing describes imported and locally sourced vehicles."/>
      <Feature icon={<ShieldCheck/>} title="Inspect before you commit" text="Visit the yard and inspect a vehicle before agreeing terms."/>
      <Feature icon={<Star/>} title="3.9 on Google" text="The supplied listing shows a 3.9 rating from 24 reviews."/>
      <Feature icon={<MapPin/>} title="Easy to find" text="Kangundo Road, Nairobi — plus code PWJ3+H3."/>
      <Feature icon={<Handshake/>} title="Direct enquiries" text="Contact the dealership directly about vehicles and availability."/>
    </div></section>

    <section className="section darker"><div className="section-heading"><small>HOW IT WORKS</small><h2>Browse → Inspect → Buy</h2></div><div className="steps"><Step number="01" icon={<Search/>} title="Browse" text="Filter the catalogue and shortlist vehicles that fit."/><Step number="02" icon={<ClipboardCheck/>} title="Inspect" text="Come to the Kangundo Road yard and inspect the vehicle."/><Step number="03" icon={<KeyRound/>} title="Buy" text="Agree the final terms directly with Safi Motors." /></div></section>

    <section className="section"><div className="visit-grid"><div><small>VISIT THE YARD</small><h2>Kangundo Road, Nairobi</h2><p>Plus code PWJ3+H3 Nairobi. The supplied listing shows the business open until 5:30 PM; confirm current hours before visiting.</p><Link href="/contact" className="gold-button">Get in touch <ArrowRight size={17}/></Link></div><div className="visit-card"><div><Star/><p><strong>3.9 from 24 Google reviews.</strong><br/>Reviewers mention imported/local vehicles and clean cars.</p></div><div><MapPin/><p>Kangundo Road, Nairobi<br/>PWJ3+H3</p></div><Link href="/contact" className="small-button full">Contact Safi Motors</Link></div></div></section>

    <section className="section"><div className="cta"><h2>Ready to find your next drive?</h2><p>Browse vehicles, calculate an estimated finance payment, or send an enquiry to the dealership.</p><div className="hero-buttons center"><Link href="/inventory" className="gold-button">Browse Cars</Link><Link href="/financing" className="outline-button">Financing calculator</Link><Link href="/contact" className="outline-button">Send enquiry</Link></div></div></section>

    <section id="contact" className="contact-section"><div><small>CONTACT SAFI MOTORS</small><h2>Let's talk about your next vehicle.</h2><p>Kangundo Road, Nairobi<br/>PWJ3+H3 Nairobi</p></div><div className="contact-box"><p>Phone and WhatsApp details: pending confirmation</p><p>Email: pending confirmation</p><Link href="/contact" className="gold-button">Send an enquiry <ArrowRight size={18}/></Link></div></section>

    <footer><div className="footer-brand"><span className="brand-mark">SM</span><div><strong>Safi Motors</strong><p>Nairobi · Kangundo Road</p></div></div><div className="footer-links"><Link href="/inventory">Inventory</Link><Link href="/sell-your-car">Sell Your Car</Link><Link href="/financing">Financing</Link><Link href="#about">About</Link><Link href="/contact">Contact</Link></div><p className="copyright">© {new Date().getFullYear()} Safi Motors. All rights reserved.</p></footer>
    <Link href="/contact" className="floating-chat" aria-label="Send enquiry"><CheckCircle2 size={24}/></Link>
  </main>;
}
function Feature({icon,title,text}:{icon:React.ReactNode;title:string;text:string}){return <div className="feature-card"><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>}
function Step({number,icon,title,text}:{number:string;icon:React.ReactNode;title:string;text:string}){return <div className="step-card"><div className="step-top"><strong>{number}</strong><span/>{icon}</div><h3>{title}</h3><p>{text}</p></div>}
