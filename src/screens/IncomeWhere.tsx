import { Fragment } from "react";
import { Link } from "react-router-dom";
import { DCLogic, useLogic } from "../lib/logic";

class Logic extends DCLogic {
  constructor(props) { super(props); this.state = { picked: 2 }; }
  renderVals() {
    const items: any = [
      ['In my country', 'Clients or companies near me', 'M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4a2 2 0 1 0 0-4'],
      ['Abroad', 'Clients or companies overseas', 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18'],
      ['Both', 'A mix of local and international', 'M8 8h11v11H8zM5 16V5h11']
    ];
    const picked = this.state.picked;
    return {
      options: items.map((it, i) => {
        const on = i === picked;
        return {
          label: it[0], sub: it[1], icon: it[2], checked: on ? 'true' : 'false',
          pick: () => this.setState({ picked: i }),
          border: on ? '#0A0A0A' : '#FFFFFF', shadow: on ? '0 8px 18px -10px rgba(0,0,0,0.4)' : 'none',
          iconBg: on ? '#C6F432' : '#F1F1EF',
          ring: on ? '#0A0A0A' : '#C9C9C4', dot: on ? '#0A0A0A' : 'transparent'
        };
      })
    };
  }
}

export default function IncomeWhere() {
  const v = useLogic(Logic);
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F4F4F2", fontFamily: "'Instrument Sans', sans-serif", color: "#0A0A0A", display: "flex", flexDirection: "column", padding: "18px 20px 34px" }}><div style={{ display: "flex", alignItems: "center", gap: "12px" }}><Link to="/IncomeType" aria-label="Back" style={{ width: "40px", height: "40px", borderRadius: "20px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><div style={{ flex: "1", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "5px" }} aria-label="Last question"><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /></div></div><p style={{ margin: "26px 0 4px", fontSize: "15px", fontWeight: "700", color: "#C010BE" }}>One last question…</p><h1 style={{ margin: "0 0 18px", fontSize: "26px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.01em" }}>Where does your income usually come from?</h1><div role="radiogroup" aria-label="Income origin" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{(v.options as any[]).map((o: any, $index: number) => (<Fragment key={$index}><button type="button" role="radio" aria-checked={o.checked} onClick={o.pick} style={{ width: "100%", display: "flex", alignItems: "center", gap: "14px", padding: "14px", borderRadius: "20px", boxSizing: "border-box", cursor: "pointer", fontFamily: "inherit", color: "#0A0A0A", background: "#FFFFFF", border: `2px solid ${o.border}`, boxShadow: `${o.shadow}`, textAlign: "left" }}><span style={{ width: "46px", height: "46px", borderRadius: "14px", background: `${o.iconBg}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={o.icon} /></svg></span><span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontSize: "16px", fontWeight: "700" }}>{`${o.label}`}</span><span style={{ fontSize: "13px", color: "#6B6B66" }}>{`${o.sub}`}</span></span><span style={{ width: "22px", height: "22px", borderRadius: "11px", border: `2px solid ${o.ring}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", boxSizing: "border-box" }}><span style={{ width: "10px", height: "10px", borderRadius: "5px", background: `${o.dot}` }} /></span></button></Fragment>))}</div><div style={{ marginTop: "18px", borderRadius: "20px", background: "#0A0A0A", color: "#FFFFFF", padding: "16px", display: "flex", gap: "12px", alignItems: "center" }}><span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#C6F432", color: "#0A0A0A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l2.4 5.6 6 .6-4.6 4 1.4 5.8L12 16l-5.2 3 1.4-5.8-4.6-4 6-.6z" /></svg></span><span style={{ fontSize: "14px", lineHeight: "1.45", color: "#E6E6E2" }}>Getting paid from abroad? You can open US, EUR and MXN accounts in minutes.</span></div><div style={{ marginTop: "auto" }}><Link to="/FaceID" style={{ width: "100%", height: "58px", borderRadius: "29px", background: "#E21AE0", color: "#FFFFFF", fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", boxShadow: "0 10px 24px -10px rgba(120,0,120,0.55)" }}>Finish setup</Link></div></div>
  );
}
