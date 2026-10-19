import { Fragment } from "react";
import { Link } from "react-router-dom";
import { DCLogic, useLogic } from "../lib/logic";

class Logic extends DCLogic {
  constructor(props) { super(props); this.state = { picked: 4 }; }
  renderVals() {
    const items: any = [
      ['A friend or family member uses it', 'M9 8a3 3 0 1 0 0-.1M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4a3 3 0 0 1 0 6M18 14c2 .6 3 2.6 3 6'],
      ['Someone shared it with me', 'M4 5h12v9H8l-4 4zM16 9h4v8l-3-2h-5v-1'],
      ['Someone I follow on social media', 'M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L3.4 9.3l6-.7z'],
      ['I saw an UGLYCASH ad', 'M3 11v3h3l7 4V7L6 11zM17 9c1.3 1 1.3 5 0 6M20 7c2.5 2 2.5 8 0 10'],
      ['I came across it on social media', 'M5 9h14M5 15h14M10 4L8 20M16 4l-2 16'],
      ['I found it on my own', 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18M15.5 8.5l-2 5-5 2 2-5z'],
      ['Other', 'M6 4h12v16H6zM9 9h6M9 13h6M9 17h3']
    ];
    const picked = this.state.picked;
    const options = items.map((it, i) => {
      const on = i === picked;
      return {
        label: it[0], icon: it[1], checked: on ? 'true' : 'false',
        pick: () => this.setState({ picked: i }),
        border: on ? '#0A0A0A' : '#FFFFFF', shadow: on ? '0 6px 16px -10px rgba(0,0,0,0.35)' : 'none',
        iconBg: on ? '#E21AE0' : '#F1F1EF', iconColor: on ? '#FFFFFF' : '#0A0A0A',
        ring: on ? '#0A0A0A' : '#C9C9C4', dot: on ? '#0A0A0A' : 'transparent'
      };
    });
    return { options, ready: picked !== null, notReady: picked === null };
  }
}

export default function FoundUs() {
  const v = useLogic(Logic);
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F4F4F2", fontFamily: "'Instrument Sans', sans-serif", color: "#0A0A0A", display: "flex", flexDirection: "column", padding: "18px 20px 34px" }}><div style={{ display: "flex", alignItems: "center", gap: "12px" }}><Link to="/UsernameFilled" aria-label="Back" style={{ width: "40px", height: "40px", borderRadius: "20px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><div style={{ flex: "1", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "5px" }} aria-label="Step 2 of 4"><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#E21AE0" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#DCDCD7" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#DCDCD7" }} /></div></div><h1 style={{ margin: "28px 0 18px", fontSize: "26px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.01em" }}>How did you find out about UGLYCASH?</h1><div role="radiogroup" aria-label="How you found us" style={{ display: "flex", flexDirection: "column", gap: "9px" }}>{(v.options as any[]).map((o: any, $index: number) => (<Fragment key={$index}><button type="button" role="radio" aria-checked={o.checked} onClick={o.pick} style={{ width: "100%", minHeight: "60px", display: "flex", alignItems: "center", gap: "12px", padding: "8px 14px 8px 10px", borderRadius: "18px", boxSizing: "border-box", cursor: "pointer", fontFamily: "inherit", color: "#0A0A0A", background: "#FFFFFF", border: `2px solid ${o.border}`, boxShadow: `${o.shadow}` }}><span style={{ width: "40px", height: "40px", borderRadius: "20px", background: `${o.iconBg}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={o.iconColor} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={o.icon} /></svg></span><span style={{ flex: "1", textAlign: "left", fontSize: "15px", fontWeight: "600", lineHeight: "1.3" }}>{`${o.label}`}</span><span style={{ width: "22px", height: "22px", borderRadius: "11px", border: `2px solid ${o.ring}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", boxSizing: "border-box" }}><span style={{ width: "10px", height: "10px", borderRadius: "5px", background: `${o.dot}` }} /></span></button></Fragment>))}</div><div style={{ marginTop: "auto" }}>{v.ready ? (<><Link to="/WhereFound" style={{ width: "100%", height: "58px", borderRadius: "29px", background: "#0A0A0A", color: "#FFFFFF", fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>Next</Link></>) : null}{v.notReady ? (<><button type="button" disabled style={{ width: "100%", height: "58px", borderRadius: "29px", border: "0", background: "#CFCFCB", color: "#FFFFFF", font: "700 17px 'Instrument Sans', sans-serif" }}>Next</button></>) : null}</div></div>
  );
}
