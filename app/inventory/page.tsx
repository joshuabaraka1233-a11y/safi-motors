"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, Search, SlidersHorizontal } from "lucide-react";
import { formatKes, vehicles } from "@/data/vehicles";

export default function InventoryPage() {
  const [make, setMake] = useState("All");
  const [body, setBody] = useState("All");
  const [budget, setBudget] = useState("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setMake(p.get("make") || "All");
    setBody(p.get("body") || "All");
    setBudget(p.get("budget") || "All");
  }, []);

  const makes = ["All", ...Array.from(new Set(vehicles.map((v) => v.make)))];
  const bodies = ["All", ...Array.from(new Set(vehicles.map((v) => v.body)))];

  const filtered = useMemo(() => vehicles.filter((v) => {
    const matchesMake = make === "All" || v.make === make;
    const matchesBody = body === "All" || v.body === body;
    const matchesQuery = !query || v.name.toLowerCase().includes(query.toLowerCase()) || v.model.toLowerCase().includes(query.toLowerCase());
    const matchesBudget =
      budget === "All" ||
      (budget === "Under 3M" && v.price < 3000000) ||
      (budget === "3M - 6M" && v.price >= 3000000 && v.price <= 6000000) ||
      (budget === "Above 6M" && v.price > 6000000);
    return matchesMake && matchesBody && matchesQuery && matchesBudget;
  }), [make, body, budget, query]);

  return (
    <main className="page-shell">
      <header className="inner-nav">
        <Link href="/" className="brand"><span className="brand-mark">SM</span><span><strong>Safi Motors</strong><small>Nairobi</small></span></Link>
        <nav><Link href="/">Home</Link><Link className="active" href="/inventory">Inventory</Link><Link href="/sell-your-car">Sell Your Car</Link><Link href="/financing">Financing</Link><Link href="/contact">Contact</Link></nav>
        <Link href="/contact" className="nav-button">Talk to Safi Motors</Link>
      </header>

      <section className="page-hero">
        <span className="eyebrow">SAFI MOTORS INVENTORY</span>
        <h1>Find a vehicle that fits.</h1>
        <p>Search the current catalogue. Demo vehicles are clearly marked until confirmed Safi Motors stock is uploaded.</p>
      </section>

      <section className="inventory-wrap">
        <div className="filters">
          <div className="filter-title"><SlidersHorizontal size={18}/> Filters</div>
          <label>Search<input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Toyota, X-Trail..." /></label>
          <label>Make<select value={make} onChange={(e)=>setMake(e.target.value)}>{makes.map(x=><option key={x}>{x}</option>)}</select></label>
          <label>Body type<select value={body} onChange={(e)=>setBody(e.target.value)}>{bodies.map(x=><option key={x}>{x}</option>)}</select></label>
          <label>Budget<select value={budget} onChange={(e)=>setBudget(e.target.value)}><option>All</option><option>Under 3M</option><option>3M - 6M</option><option>Above 6M</option></select></label>
        </div>

        <div className="inventory-top"><span>{filtered.length} vehicle{filtered.length===1?"":"s"} found</span><span className="demo-note"><Check size={14}/> Demo stock</span></div>

        {filtered.length ? <div className="vehicle-grid full-grid">{filtered.map(v=>(
          <article className="vehicle-card" key={v.id}>
            <Link href={"/vehicles/"+v.id} className="vehicle-image"><img src={v.images[0]} alt={v.name}/><span>DEMO</span><span className="source">{v.source}</span></Link>
            <div className="vehicle-info">
              <div className="vehicle-title"><div><h3>{v.name}</h3><p>{v.year} · {v.mileage.toLocaleString()} km · {v.fuel} · {v.transmission}</p></div><strong>{formatKes(v.price)}</strong></div>
              <Link className="details-button" href={"/vehicles/"+v.id}>View vehicle <ArrowRight size={16}/></Link>
            </div>
          </article>
        ))}</div> : <div className="empty-state"><Search size={30}/><h3>No vehicles match those filters.</h3><p>Try clearing one or more filters.</p></div>}
      </section>
    </main>
  );
}
