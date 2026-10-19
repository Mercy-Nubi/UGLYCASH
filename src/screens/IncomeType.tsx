import { Fragment } from "react";
import { Link } from "react-router-dom";
import { DCLogic, useLogic } from "../lib/logic";

class Logic extends DCLogic {
  constructor(props) { super(props); this.state = { picked: 1 }; }
  renderVals() {
    const items: any = [
      ['I work for one main client or company', 'M9 8a3 3 0 1 0 0-.1M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4a3 3 0 0 1 0 6M18 14c2 .6 3 2.6 3 6'],
      ['I freelance for several clients or projects', 'M4 5h16v10H4zM2 19h20'],
      ['I am a content creator', 'M3 6h12v12H3zM15 10l6-3v10l-6-3'],
      ['I sell products online', 'M3 4h3l2 11h11l2-8H7M10 20a1 1 0 1 0 0-.1M18 20a1 1 0 1 0 0-.1'],
      ['I earn from trading or investing', 'M3 17l6-6 4 4 8-8M15 7h6v6'],
      ['Other', 'M6 4h12v16H6zM9 9h6M9 13h6M9 17h3']
    ];
    const picked = this.state.picked;
    return {
      options: items.map((it, i) => {
        const on = i === picked;
        return {
          label: it[0], icon: it[1], checked: on ? 'true' : 'false',
          pick: () => this.setState({ picked: i }),
          border: on ? '#0A0A0A' : '#FFFFFF', shadow: on ? '0 8px 18px -10px rgba(0,0,0,0.4)' : 'none',
          iconBg: on ? '#E21AE0' : '#F1F1EF', iconColor: on ? '#FFFFFF' : '#0A0A0A',
          ring: on ? '#0A0A0A' : '#C9C9C4', dot: on ? '#0A0A0A' : 'transparent'
        };
      })
    };
  }
}

export default function IncomeType() {
  const v = useLogic(Logic);
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F4F4F2", fontFamily: "'Instrument Sans', sans-serif", color: "#0A0A0A", display: "flex", flexDirection: "column", padding: "18px 20px 34px" }}><div style={{ display: "flex", alignItems: "center", gap: "12px" }}><Link to="/Income" aria-label="Back" style={{ width: "40px", height: "40px", borderRadius: "20px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><div style={{ flex: "1", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "5px" }} aria-label="Almost done"><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#0A0A0A" }} /><span style={{ height: "5px", borderRadius: "3px", background: "#E21AE0" }} /></div></div><p style={{ margin: "26px 0 4px", fontSize: "15px", fontWeight: "700", color: "#C010BE" }}>UGLYCASH is made for you!</p><h1 style={{ margin: "0 0 16px", fontSize: "26px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.01em" }}>How do you earn most of your online income?</h1><div role="radiogroup" aria-label="Online income type" style={{ display: "flex", flexDirection: "column", gap: "9px" }}>{(v.options as any[]).map((o: any, $index: number) => (<Fragment key={$index}><button type="button" role="radio" aria-checked={o.checked} onClick={o.pick} style={{ width: "100%", minHeight: "62px", display: "flex", alignItems: "center", gap: "12px", padding: "8px 14px 8px 10px", borderRadius: "18px", boxSizing: "border-box", cursor: "pointer", fontFamily: "inherit", color: "#0A0A0A", background: "#FFFFFF", border: `2px solid ${o.border}`, boxShadow: `${o.shadow}`, textAlign: "left" }}><span style={{ width: "42px", height: "42px", borderRadius: "21px", background: `${o.iconBg}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={o.iconColor} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={o.icon} /></svg></span><span style={{ flex: "1", fontSize: "15px", fontWeight: "600", lineHeight: "1.3" }}>{`${o.label}`}</span><span style={{ width: "22px", height: "22px", borderRadius: "11px", border: `2px solid ${o.ring}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", boxSizing: "border-box" }}><span style={{ width: "10px", height: "10px", borderRadius: "5px", background: `${o.dot}` }} /></span></button></Fragment>))}</div><div style={{ marginTop: "auto" }}><Link to="/IncomeWhere" style={{ width: "100%", height: "58px", borderRadius: "29px", background: "#0A0A0A", color: "#FFFFFF", fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>Next</Link></div></div>
  );
}
