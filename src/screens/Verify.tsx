import { Fragment } from "react";
import { Link } from "react-router-dom";
import { img } from "../lib/assets";
import { DCLogic, useLogic } from "../lib/logic";

class Logic extends DCLogic {
  renderVals() {
    const rows: any = [
      ['Phone number', 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2', false],
      ['Email address', 'M3 6h18v12H3zM3 7l9 6 9-6', true],
      ['Legal full name', 'M4 20c2-6 4-9 6-9s1 6 3 6 3-5 7-5', false],
      ['Home address', 'M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4a2 2 0 1 0 0-4', false],
      ['ID document', 'M3 6h18v12H3zM7 10h4M7 14h6M15 10h2', false],
      ['Selfie', 'M12 8a3 3 0 1 0 0 6a3 3 0 1 0 0-6M5 20c1.5-3 4-4 7-4s5.5 1 7 4M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18', false]
    ];
    return { items: rows.map((r) => ({ label: r[0], icon: r[1], status: r[2] ? 'Done' : 'To do', statusColor: r[2] ? '#0E8A3A' : '#9A9A94' })) };
  }
}

export default function Verify() {
  const v = useLogic(Logic);
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F5F5F5", fontFamily: "'Instrument Sans', sans-serif", color: "#0A0A0A", display: "flex", flexDirection: "column" }}><div style={{ height: "280px", background: "#0251AE", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><Link to="/Receive" aria-label="Close" style={{ position: "absolute", top: "18px", right: "18px", width: "40px", height: "40px", borderRadius: "20px", background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg></Link><img src={img("idcard.jpg")} alt="A playful sample ID card from the Uglycash Republic" style={{ width: "330px", transform: "rotate(-3deg)", filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.35))" }} /></div><div style={{ flex: "1", padding: "22px 20px 34px", display: "flex", flexDirection: "column" }}><h1 style={{ margin: "0", fontFamily: "'Anton', sans-serif", fontWeight: "400", fontSize: "34px", lineHeight: "1" }}>LET'S GET YOU VERIFIED</h1><p style={{ margin: "8px 0 14px", fontSize: "15px", color: "#5E5E5A" }}>To use this feature, we'll need:</p><div style={{ borderRadius: "22px", background: "#FFFFFF", padding: "4px 16px" }}>{(v.items as any[]).map((it: any, $index: number) => (<Fragment key={$index}><div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "9px 0", borderBottom: "1px solid #F1F1EF" }}><span style={{ width: "34px", height: "34px", borderRadius: "10px", background: "#F1F1EF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={it.icon} /></svg></span><span style={{ flex: "1", fontSize: "15px", fontWeight: "600" }}>{`${it.label}`}</span><span style={{ fontSize: "12px", fontWeight: "700", color: `${it.statusColor}` }}>{`${it.status}`}</span></div></Fragment>))}</div><span style={{ marginTop: "12px", textAlign: "center", fontSize: "13px", color: "#6B6B66" }}>Takes about 2 minutes</span><Link to="/Phone" style={{ marginTop: "auto", height: "58px", borderRadius: "29px", background: "#0A0A0A", color: "#FFFFFF", fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>I'm ready</Link></div></div>
  );
}
