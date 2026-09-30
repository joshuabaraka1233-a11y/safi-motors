import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Fuel, Gauge, MessageCircle, ShieldCheck } from "lucide-react";
import { formatKes, vehicles } from "@/data/vehicles";

export function generateStaticParams() {
  return vehicles.map((v) => ({ id: v.id }));
}

export default async function VehiclePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const vehicle = vehicles.find((v) => v.id === id);
  if (!vehicle) notFound();

  return (
    <main className="page-shell">
      <header className="inner-nav">
        <Link href="/" className="brand"><span className="brand-mark">SM</span><span><strong>Safi Motors</strong><small>Nairobi</small></span></Link>
        <nav><Link href="/">Home</Link><Link href="/inventory">Inventory</Link><Link href="/sell-your-car">Sell Your Car</Link><Link href="/financing">Financing</Link><Link href="/contact">Contact</Link></nav>
        <Link href="/contact" className="nav-button">Talk to Safi Motors</Link>
      </header>

      <section className="detail-wrap">
        <Link href="/inventory" className="back-link"><ArrowLeft size={16}/> Back to inventory</Link>
        <div className="detail-grid">
          <div className="detail-photo"><img src={vehicle.images[0]} alt={vehicle.name}/><span className="demo-badge">DEMO VEHICLE</span></div>
          <div className="detail-info">
            <span className="eyebrow">{vehicle.source.toUpperCase()} · {vehicle.status.toUpperCase()}</span>
            <h1>{vehicle.name}</h1>
            <div className="detail-price">{formatKes(vehicle.price)}</div>
            <p className="detail-description">{vehicle.description}</p>
            <div className="spec-grid">
              <div><Gauge/><span><b>{vehicle.mileage.toLocaleString()} km</b>Mileage</span></div>
              <div><Fuel/><span><b>{vehicle.fuel}</b>Fuel</span></div>
              <div><ShieldCheck/><span><b>{vehicle.transmission}</b>Transmission</span></div>
              <div><CheckCircle2/><span><b>{vehicle.body}</b>Body type</span></div>
            </div>
            <div className="detail-actions"><Link href="/contact" className="gold-button">Enquire about this vehicle <MessageCircle size={18}/></Link><Link href="/financing" className="outline-button">Calculate financing</Link></div>
            <p className="demo-warning">This is demonstration stock. Confirm availability, specification and price with Safi Motors before relying on this listing.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
