import { Fragment } from "react";
import { Link } from "react-router-dom";
import { DCLogic, useLogic } from "../lib/logic";

class Logic extends DCLogic {
  constructor(props) { super(props); this.state = { picked: 0 }; }
  renderVals() {
    const items: any = [
      ['TikTok', 'T', '#0A0A0A', '#FFFFFF'],
      ['Instagram', 'I', '#E1306C', '#FFFFFF'],
      ['Facebook', 'f', '#1877F2', '#FFFFFF'],
      ['YouTube', '▶', '#E62117', '#FFFFFF'],
      ['Google', 'G', '#F1F1EF', '#0A0A0A'],
      ['X / Twitter', 'X', '#0A0A0A', '#FFFFFF'],
      ['Other', '…', '#F1F1EF', '#0A0A0A']
    ];
    const picked = this.state.picked;
    return {
      options: items.map((it, i) => {
        const on = i === picked;
        return {
          label: it[0], mark: it[1], bg: it[2], fg: it[3], checked: on ? 'true' : 'false',
          pick: () => this.setState({ picked: i }),
          border: on ? '#0A0A0A' : '#FFFFFF', shadow: on ? '0 8px 18px -10px rgba(0,0,0,0.4)' : 'none',
          ring: on ? '#E21AE0' : '#C9C9C4', fill: on ? '#E21AE0' : '#FFFFFF'
        };
      })
    };
  }
}

export default function WhereFound() {
  const v = useLogic(Logic);
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F4F4F2", fontFamily: "'Instrument Sans', sans-serif", color: "#0A0A0A", display: "flex", flexDirection: "column", padding: "18px 20px 34px" }}><div style={{ display: "flex", alignItems: "center", gap: "12px" }}><Link to="/FoundUs" aria-label="Back" style={{ width: "40px", height: "40px", borderRadius: "20px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><div style={{ flex: "1", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "5px" }} aria-label="Step 3 of 4"><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#E21AE0" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#DCDCD7" }} /></div></div><h1 style={{ margin: "28px 0 6px", fontSize: "26px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.01em" }}>Where did you find us?</h1><p style={{ margin: "0 0 18px", fontSize: "15px", color: "#5E5E5A" }}>Pick the platform where you saw UGLYCASH.</p><div role="radiogroup" aria-label="Platform" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>{(v.options as any[]).map((o: any, $index: number) => (<Fragment key={$index}><button type="button" role="radio" aria-checked={o.checked} onClick={o.pick} style={{ minHeight: "104px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", padding: "14px", borderRadius: "20px", boxSizing: "border-box", cursor: "pointer", fontFamily: "inherit", color: "#0A0A0A", background: "#FFFFFF", border: `2px solid ${o.border}`, boxShadow: `${o.shadow}`, position: "relative" }}><span style={{ width: "40px", height: "40px", borderRadius: "20px", background: `${o.bg}`, color: `${o.fg}`, fontSize: "16px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center" }}>{`${o.mark}`}</span><span style={{ fontSize: "15px", fontWeight: "700" }}>{`${o.label}`}</span><span style={{ position: "absolute", top: "14px", right: "14px", width: "22px", height: "22px", borderRadius: "11px", border: `2px solid ${o.ring}`, background: `${o.fill}`, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg></span></button></Fragment>))}</div><div style={{ marginTop: "auto" }}><Link to="/Income" style={{ width: "100%", height: "58px", borderRadius: "29px", background: "#0A0A0A", color: "#FFFFFF", fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>Next</Link></div></div>
  );
}
