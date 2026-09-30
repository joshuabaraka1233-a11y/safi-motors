"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function FinancingPage() {
  const [price,setPrice]=useState(3000000);
  const [deposit,setDeposit]=useState(600000);
  const [months,setMonths]=useState(48);
  const [rate,setRate]=useState(14);
  const loan=Math.max(price-deposit,0);
  const monthly=useMemo(()=>{const r=rate/100/12; return r?loan*r*Math.pow(1+r,months)/(Math.pow(1+r,months)-1):loan/months},[loan,months,rate]);
  return <main className="page-shell"><header className="inner-nav"><Link href="/" className="brand"><span className="brand-mark">SM</span><span><strong>Safi Motors</strong><small>Nairobi</small></span></Link><nav><Link href="/">Home</Link><Link href="/inventory">Inventory</Link><Link href="/sell-your-car">Sell Your Car</Link><Link className="active" href="/financing">Financing</Link><Link href="/contact">Contact</Link></nav><Link href="/contact" className="nav-button">Talk to Safi Motors</Link></header><section className="form-page"><span className="eyebrow">FINANCING CALCULATOR</span><h1>Plan your vehicle budget.</h1><p>Use the calculator for an estimate only. The interest rate and final terms must be confirmed with the actual finance provider.</p><div className="finance-grid"><div className="calculator"><label>Vehicle price (KES)<input type="number" value={price} onChange={e=>setPrice(+e.target.value)}/></label><label>Deposit (KES)<input type="number" value={deposit} onChange={e=>setDeposit(+e.target.value)}/></label><label>Loan period<select value={months} onChange={e=>setMonths(+e.target.value)}><option value="12">12 months</option><option value="24">24 months</option><option value="36">36 months</option><option value="48">48 months</option><option value="60">60 months</option></select></label><label>Example annual rate (%)<input type="number" value={rate} min="0" step="0.1" onChange={e=>setRate(+e.target.value)}/></label></div><div className="finance-result"><span>Estimated monthly payment</span><strong>KSh {Math.round(monthly).toLocaleString()}</strong><p>Estimated loan: KSh {loan.toLocaleString()}</p><Link href="/contact" className="gold-button">Send finance enquiry</Link></div></div></section></main>;
}
