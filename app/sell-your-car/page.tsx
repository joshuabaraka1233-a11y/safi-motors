"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SellYourCarPage() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return <main className="page-shell"><header className="inner-nav"><Link href="/" className="brand"><span className="brand-mark">SM</span><span><strong>Safi Motors</strong><small>Nairobi</small></span></Link><nav><Link href="/">Home</Link><Link href="/inventory">Inventory</Link><Link className="active" href="/sell-your-car">Sell Your Car</Link><Link href="/financing">Financing</Link><Link href="/contact">Contact</Link></nav><Link href="/contact" className="nav-button">Talk to Safi Motors</Link></header><section className="form-page"><span className="eyebrow">SELL YOUR CAR</span><h1>Tell us about your vehicle.</h1><p>Submit the details below. This demo form confirms the submission locally; connect it to the dealership email/database before production.</p>{sent?<div className="success-box"><CheckCircle2/><h2>Request captured</h2><p>Your details have been captured in this demo. Add Safi Motors' confirmed contact/backend before launch.</p><button className="gold-button" onClick={()=>setSent(false)}>Submit another request</button></div>:<form className="lead-form" onSubmit={submit}><div className="form-grid"><label>Your name<input required name="name"/></label><label>Phone number<input required name="phone" type="tel"/></label><label>Vehicle make<input required name="make"/></label><label>Vehicle model<input required name="model"/></label><label>Year<input required name="year" type="number" min="1950" max="2035"/></label><label>Expected price (KES)<input name="price" type="number"/></label><label className="wide">Vehicle notes<textarea name="notes" rows={5} placeholder="Mileage, condition, service history, location..."/></label></div><button className="gold-button" type="submit">Submit vehicle details</button></form>}</section></main>;
}
