import { Fragment } from "react";
import { Link } from "react-router-dom";
import { stop } from "../lib/assets";
import { DCLogic, useLogic } from "../lib/logic";

class Logic extends DCLogic {
  constructor(props) { super(props); this.state = { v: '' }; }
  press(k) {
    let v = this.state.v;
    if (k === 'del') v = v.slice(0, -1);
    else if (k === '.') { if (v.indexOf('.') === -1) v = (v || '0') + '.'; }
    else { if (v.indexOf('.') !== -1 && v.split('.')[1].length >= 2) return; if (v === '0') v = ''; if (v.replace('.', '').length >= 7) return; v = v + k; }
    this.setState({ v });
  }
  renderVals() {
    const v = this.state.v;
    const n = parseFloat(v || '0');
    const balance = 0.02;
    const over = n > balance;
    const labels: any = ['1','2','3','4','5','6','7','8','9','.','0','del'];
    return {
      amount: v || '0',
      amountColor: over ? '#FF6BFD' : '#FFFFFF',
      msg: n === 0 ? 'Balance: $0.02' : (over ? 'Not enough funds' : 'Free to any UGLYCASH member'),
      msgColor: over ? '#FF6BFD' : '#A8A8A3',
      canSend: n > 0 && !over, noFunds: over, empty: n === 0,
      keys: labels.map((l) => ({ label: l === 'del' ? '⌫' : l, aria: l === 'del' ? 'Delete' : l, press: () => this.press(l) }))
    };
  }
}

export default function Send() {
  const v = useLogic(Logic);
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "radial-gradient(120% 70% at 80% 100%, rgba(226,26,224,0.35), rgba(226,26,224,0) 60%), #151515", fontFamily: "'Instrument Sans', sans-serif", color: "#FFFFFF", display: "flex", flexDirection: "column", padding: "18px 20px 30px", position: "relative", overflow: "hidden" }}><span aria-hidden="true" style={{ position: "absolute", top: "34px", left: "0", right: "0", textAlign: "center", fontFamily: "'Anton', sans-serif", fontSize: "120px", lineHeight: "1", color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.14)", transform: "rotate(-6deg)" }}>SEND</span><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}><Link to="/MoveMoney" aria-label="Back" style={{ width: "40px", height: "40px", borderRadius: "20px", background: "#2A2A2A", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><span style={{ fontFamily: "'Anton', sans-serif", fontSize: "22px", letterSpacing: "0.04em" }}>SEND</span><Link to="/Receive" style={{ height: "36px", padding: "0 14px", borderRadius: "18px", background: "#2A2A2A", fontSize: "14px", fontWeight: "700", display: "flex", alignItems: "center", textDecoration: "none" }}>Request</Link></div><div style={{ marginTop: "34px", borderRadius: "28px", background: "linear-gradient(180deg, #232323, #0E0E0E)", border: "1px solid #333333", padding: "24px 18px 18px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", position: "relative" }}><span aria-live="polite" style={{ fontFamily: "'Silkscreen', monospace", fontSize: "52px", lineHeight: "1", color: `${v.amountColor}` }}>{`$${v.amount}`}</span><div style={{ display: "flex", gap: "8px" }}><span style={{ height: "30px", padding: "0 10px", borderRadius: "15px", background: "#2E2E2E", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px" }}>eUSD<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></span><span style={{ height: "30px", padding: "0 10px", borderRadius: "15px", background: "#2E2E2E", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px" }}>USD<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></span></div><span style={{ fontSize: "13px", fontWeight: "700", color: `${v.msgColor}` }}>{`${v.msg}`}</span><label style={{ width: "100%", height: "48px", borderRadius: "16px", background: "#1C1C1C", border: "1px solid #333333", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px", boxSizing: "border-box", marginTop: "6px" }}><span style={{ fontSize: "14px", color: "#8A8A85" }}>To</span><span style={{ position: "absolute", left: "-9999px" }}>Recipient</span><input type="text" placeholder="$uglytag, email or phone" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", color: "#FFFFFF", font: "600 15px 'Instrument Sans', sans-serif" }} /></label></div><div style={{ marginTop: "18px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }}>{(v.keys as any[]).map((k: any, $index: number) => (<Fragment key={$index}><button type="button" onClick={k.press} aria-label={k.aria} style={{ height: "58px", borderRadius: "16px", border: "1px solid #3A3A3A", background: "linear-gradient(180deg, #2C2C2C, #1E1E1E)", boxShadow: "0 4px 0 #050505", color: "#FFFFFF", font: "700 22px 'Instrument Sans', sans-serif", cursor: "pointer" }}>{`${k.label}`}</button></Fragment>))}</div><div style={{ marginTop: "auto" }}>{v.canSend ? (<><a href="#" onClick={stop} style={{ height: "58px", borderRadius: "29px", background: "#E21AE0", color: "#FFFFFF", fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>{`Send $${v.amount}`}</a></>) : null}{v.noFunds ? (<><Link to="/AddFunds" style={{ height: "58px", borderRadius: "29px", background: "#FFFFFF", color: "#0A0A0A", fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>Add funds first</Link></>) : null}{v.empty ? (<><button type="button" disabled style={{ width: "100%", height: "58px", borderRadius: "29px", border: "0", background: "#2E2E2E", color: "#7A7A75", font: "700 17px 'Instrument Sans', sans-serif" }}>Enter an amount</button></>) : null}</div></div>
  );
}
