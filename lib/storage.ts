"use client";

import type { Vehicle } from "@/data/vehicles";
import { vehicles as seedVehicles } from "@/data/vehicles";

export type Lead = {
  id: string; type: "Vehicle enquiry" | "Sell my car" | "Financing" | "General enquiry";
  name: string; phone: string; email?: string; message?: string; vehicleId?: string;
  createdAt: string; status: "New" | "Contacted" | "Closed";
};
export type SiteSettings = { phone: string; whatsapp: string; email: string; hours: string };
export const defaultSettings: SiteSettings = { phone:"", whatsapp:"", email:"", hours:"Confirm current opening hours with Safi Motors" };
const VK="safi_motors_vehicles_v1", LK="safi_motors_leads_v1", SK="safi_motors_settings_v1";

export function getVehicles():Vehicle[]{ if(typeof window==="undefined")return seedVehicles; try{const r=localStorage.getItem(VK);const p=r?JSON.parse(r):null;return Array.isArray(p)?p:seedVehicles}catch{return seedVehicles}}
export function saveVehicles(v:Vehicle[]){localStorage.setItem(VK,JSON.stringify(v));window.dispatchEvent(new Event("safi-data-changed"))}
export function getLeads():Lead[]{if(typeof window==="undefined")return [];try{const r=localStorage.getItem(LK);const p=r?JSON.parse(r):[];return Array.isArray(p)?p:[]}catch{return[]}}
export function saveLead(l:Omit<Lead,"id"|"createdAt"|"status">){const n:Lead={...l,id:crypto.randomUUID(),createdAt:new Date().toISOString(),status:"New"};localStorage.setItem(LK,JSON.stringify([n,...getLeads()]));window.dispatchEvent(new Event("safi-data-changed"));return n}
export function updateLead(id:string,status:Lead["status"]){localStorage.setItem(LK,JSON.stringify(getLeads().map(l=>l.id===id?{...l,status}:l)));window.dispatchEvent(new Event("safi-data-changed"))}
export function getSettings():SiteSettings{if(typeof window==="undefined")return defaultSettings;try{return {...defaultSettings,...JSON.parse(localStorage.getItem(SK)||"{}")}}catch{return defaultSettings}}
export function saveSettings(s:SiteSettings){localStorage.setItem(SK,JSON.stringify(s));window.dispatchEvent(new Event("safi-data-changed"))}
