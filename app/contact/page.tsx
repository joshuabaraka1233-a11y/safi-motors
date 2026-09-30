"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";

export default function ContactPage() {
  const [sent,setSent]=useState(false);
  const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();setSent(true)};
  return <main className="page-shell"><header className="inner-nav"><Link href="/" className="brand"><span className="brand-mark">SM</span><span><strong>Safi Motors</strong><small>Nairobi</small></span></Link><nav><Link href="/">Home</Link><Link href="/inventory">Inventory</Link><Link href="/sell-your-car">Sell Your Car</Link><Link href="/financing">Financing</Link><Link className="active" href="/contact">Contact</Link></nav><Link href="/contact" className="nav-button">Talk to Safi Motors</Link></header><section className="form-page"><span className="eyebrow">CONTACT SAFI MOTORS</span><h1>Let's talk about your next vehicle.</h1><div className="contact-layout"><div className="location-panel"><MapPin/><h2>Kangundo Road, Nairobi</h2><p>Plus code PWJ3+H3 Nairobi</p><p>Official phone, WhatsApp and email details are awaiting confirmation from Safi Motors.</p></div>{sent?<div className="success-box"><CheckCircle2/><h2>Enquiry captured</h2><p>The demo form accepted your enquiry. Connect the confirmed Safi Motors inbox/database before production.</p><button className="gold-button" onClick={()=>setSent(false)}>Send another</button></div>:<form className="lead-form" onSubmit={submit}><label>Name<input required/></label><label>Phone<input required type="tel"/></label><label>Email<input type="email"/></label><label>What can we help with?<select><option>Vehicle enquiry</option><option>Sell my car</option><option>Financing</option><option>General enquiry</option></select></label><label>Message<textarea required rows={6}/></label><button className="gold-button" type="submit">Send enquiry</button></form>}</div></section></main>;
}
