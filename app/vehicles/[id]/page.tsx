"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, CheckCircle2, Fuel, Gauge, MessageCircle, ShieldCheck } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { formatKes } from "@/data/vehicles";
import { getVehicles } from "@/lib/storage";

export default function VehiclePage(){
 const params=useParams<{id:string}>(); const [vehicle,setVehicle]=useState<Vehicle|null>(null);
 useEffect(()=>{const sync=()=>setVehicle(getVehicles().find(v=>v.id===params.id)||null);sync();window.addEventListener("safi-data-changed",sync);return()=>window.removeEventListener("safi-data-changed",sync)},[params.id]);
 if(!vehicle)return <main className="page-shell"><header className="inner-nav"><Link href="/" className="brand"><span className="brand-mark">SM</span><span><strong>Safi Motors</strong><small>Nairobi</small></span></Link></header><section className="form-page"><span className="eyebrow">VEHICLE</span><h1>Vehicle not found</h1><p>This listing may have been removed or is no longer available.</p><Link href="/inventory" className="gold-button">Back to inventory</Link></section></main>;
 return <main className="page-shell"><header className="inner-nav"><Link href="/" className="brand"><span className="brand-mark">SM</span><span><strong>Safi Motors</strong><small>Nairobi</small></span></Link><nav><Link href="/">Home</Link><Link href="/inventory">Inventory</Link><Link href="/sell-your-car">Sell Your Car</Link><Link href="/financing">Financing</Link><Link href="/contact">Contact</Link></nav><Link href="/contact" className="nav-button">Talk to Safi Motors</Link></header><section className="detail-wrap"><Link href="/inventory" className="back-link"><ArrowLeft size={16}/> Back to inventory</Link><div className="detail-grid"><div className="detail-photo"><img src={vehicle.images[0]||"https://placehold.co/1200x900/191c1f/d7ad55?text=Safi+Motors"} alt={vehicle.name}/>{vehicle.description.toLowerCase().includes("demo")&&<span className="demo-badge">DEMO VEHICLE</span>}</div><div className="detail-info"><span className="eyebrow">{vehicle.source.toUpperCase()} · {vehicle.status.toUpperCase()}</span><h1>{vehicle.name}</h1><div className="detail-price">{formatKes(vehicle.price)}</div><p className="detail-description">{vehicle.description}</p><div className="spec-grid"><div><Gauge/><span><b>{vehicle.mileage.toLocaleString()} km</b>Mileage</span></div><div><Fuel/><span><b>{vehicle.fuel}</b>Fuel</span></div><div><ShieldCheck/><span><b>{vehicle.transmission}</b>Transmission</span></div><div><CheckCircle2/><span><b>{vehicle.body}</b>Body type</span></div></div><div className="detail-actions"><Link href={"/contact?vehicle="+encodeURIComponent(vehicle.name)} className="gold-button">Enquire about this vehicle <MessageCircle size={18}/></Link><Link href="/financing" className="outline-button">Calculate financing</Link></div></div></div></section></main>
}
