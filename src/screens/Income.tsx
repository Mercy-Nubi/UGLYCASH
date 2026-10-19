import { Fragment } from "react";
import { Link } from "react-router-dom";
import { DCLogic, useLogic } from "../lib/logic";

class Logic extends DCLogic {
  constructor(props) { super(props); this.state = { picked: 0 }; }
  renderVals() {
    const items: any = [
      ['Freelance, remote or online work', 'Clients pay you from anywhere', 'M3 5h18v11H3zM8 20h8M12 16v4'],
      ['Local work or a business', 'Salary, shop or services near you', 'M4 8h16v11H4zM9 8V5h6v3M4 13h16'],
      ['Both online and local', 'A mix of remote and local income', 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18'],
      ['No income right now', 'Still getting started', 'M7 3h7l4 4v14H7zM14 3v4h4']
    ];
    const picked = this.state.picked;
    return {
      options: items.map((it, i) => {
        const on = i === picked;
        return {
          label: it[0], sub: it[1], icon: it[2], checked: on ? 'true' : 'false',
          pick: () => this.setState({ picked: i }),
          border: on ? '#0A0A0A' : '#FFFFFF', shadow: on ? '0 8px 18px -10px rgba(0,0,0,0.4)' : 'none',
          iconBg: on ? '#C6F432' : '#F1F1EF', iconColor: '#0A0A0A',
          ring: on ? '#0A0A0A' : '#C9C9C4', dot: on ? '#0A0A0A' : 'transparent'
        };
      })
    };
  }
}

export default function Income() {
  const v = useLogic(Logic);
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F4F4F2", fontFamily: "'Instrument Sans', sans-serif", color: "#0A0A0A", display: "flex", flexDirection: "column", padding: "18px 20px 34px" }}><div style={{ display: "flex", alignItems: "center", gap: "12px" }}><Link to="/WhereFound" aria-label="Back" style={{ width: "40px", height: "40px", borderRadius: "20px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><div style={{ flex: "1", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "5px" }} aria-label="Step 4 of 4"><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#E21AE0" }} /></div></div><p style={{ margin: "28px 0 4px", fontSize: "15px", fontWeight: "700", color: "#C010BE" }}>Let's tailor UGLYCASH to you</p><h1 style={{ margin: "0 0 18px", fontSize: "26px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.01em" }}>How do you make money right now?</h1><div role="radiogroup" aria-label="Income type" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{(v.options as any[]).map((o: any, $index: number) => (<Fragment key={$index}><button type="button" role="radio" aria-checked={o.checked} onClick={o.pick} style={{ width: "100%", display: "flex", alignItems: "center", gap: "14px", padding: "14px", borderRadius: "20px", boxSizing: "border-box", cursor: "pointer", fontFamily: "inherit", color: "#0A0A0A", background: "#FFFFFF", border: `2px solid ${o.border}`, boxShadow: `${o.shadow}`, textAlign: "left" }}><span style={{ width: "44px", height: "44px", borderRadius: "14px", background: `${o.iconBg}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={o.iconColor} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={o.icon} /></svg></span><span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontSize: "15px", fontWeight: "700", lineHeight: "1.3" }}>{`${o.label}`}</span><span style={{ fontSize: "13px", color: "#6B6B66" }}>{`${o.sub}`}</span></span><span style={{ width: "22px", height: "22px", borderRadius: "11px", border: `2px solid ${o.ring}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", boxSizing: "border-box" }}><span style={{ width: "10px", height: "10px", borderRadius: "5px", background: `${o.dot}` }} /></span></button></Fragment>))}</div><div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}><span style={{ fontSize: "12px", color: "#6B6B66" }}>You can change this later in Settings.</span><Link to="/IncomeType" style={{ width: "100%", height: "58px", borderRadius: "29px", background: "#0A0A0A", color: "#FFFFFF", fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>Next</Link></div></div>
  );
}
