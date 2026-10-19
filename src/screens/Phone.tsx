import { Link } from "react-router-dom";
import { DCLogic, useLogic } from "../lib/logic";

class Logic extends DCLogic {
  constructor(props) { super(props); this.state = { d: '' }; }
  renderVals() {
    const d = this.state.d;
    const ok = d.length === 10;
    const display = [d.slice(0, 3), d.slice(3, 6), d.slice(6)].filter(Boolean).join(' ');
    return {
      display,
      onPhone: (e) => this.setState({ d: e.target.value.replace(/\D/g, '').replace(/^0/, '').slice(0, 10) }),
      border: ok ? '#0E8A3A' : (d ? '#E21AE0' : '#FFFFFF'),
      hint: ok ? 'Looks good. We’ll send your code now.' : 'Enter 10 digits, without the leading 0.',
      ready: ok, notReady: !ok
    };
  }
}

export default function Phone() {
  const v = useLogic(Logic);
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F5F5F5", fontFamily: "'Instrument Sans', sans-serif", color: "#0A0A0A", display: "flex", flexDirection: "column", padding: "18px 20px 34px" }}><div style={{ display: "flex", alignItems: "center", gap: "12px" }}><Link to="/Verify" aria-label="Back" style={{ width: "40px", height: "40px", borderRadius: "20px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><div style={{ flex: "1", display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "4px" }} aria-label="Verification step 1 of 6"><span style={{ height: "5px", borderRadius: "3px", background: "#E21AE0" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#DCDCD7" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#DCDCD7" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#DCDCD7" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#DCDCD7" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#DCDCD7" }} /></div></div><h1 style={{ margin: "34px 0 0", textAlign: "center", fontFamily: "'Anton', sans-serif", fontWeight: "400", fontSize: "40px", lineHeight: "1" }}>ENTER YOUR<br />PHONE NUMBER</h1><p style={{ margin: "10px 0 0", textAlign: "center", fontSize: "15px", color: "#5E5E5A" }}>We'll text you a 6-digit code.</p><div style={{ marginTop: "28px", display: "flex", gap: "10px" }}><button type="button" aria-label="Country code Nigeria +234" style={{ height: "60px", padding: "0 14px", borderRadius: "20px", border: "0", background: "#FFFFFF", display: "flex", alignItems: "center", gap: "8px", font: "700 16px 'Instrument Sans', sans-serif", color: "#0A0A0A", flexShrink: "0" }}><span style={{ width: "24px", height: "24px", borderRadius: "12px", overflow: "hidden", display: "flex" }}><span style={{ flex: "1", background: "#008751" }} /><span style={{ flex: "1", background: "#FFFFFF" }} /><span style={{ flex: "1", background: "#008751" }} /></span>+234<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button><label style={{ flex: "1", height: "60px", borderRadius: "20px", background: "#FFFFFF", border: `2px solid ${v.border}`, display: "flex", alignItems: "center", padding: "0 16px", boxSizing: "border-box" }}><span style={{ position: "absolute", left: "-9999px" }}>Phone number</span><input type="tel" inputMode="numeric" value={v.display} onChange={v.onPhone} placeholder="801 234 5678" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", font: "600 18px 'Instrument Sans', sans-serif", color: "#0A0A0A", letterSpacing: "0.02em" }} /></label></div><p style={{ margin: "10px 4px 0", fontSize: "13px", color: "#6B6B66" }}>{`${v.hint}`}</p><div style={{ marginTop: "auto" }}>{v.ready ? (<><Link to="/Home" style={{ height: "58px", borderRadius: "29px", background: "#0A0A0A", color: "#FFFFFF", fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>Send code</Link></>) : null}{v.notReady ? (<><button type="button" disabled style={{ width: "100%", height: "58px", borderRadius: "29px", border: "0", background: "#CFCFCB", color: "#FFFFFF", font: "700 17px 'Instrument Sans', sans-serif" }}>Send code</button></>) : null}</div></div>
  );
}
