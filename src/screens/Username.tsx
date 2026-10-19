import { Link } from "react-router-dom";
import { stop } from "../lib/assets";
import { DCLogic, useLogic } from "../lib/logic";

class Logic extends DCLogic {
  constructor(props) { super(props); this.state = { name: this.props.initial ?? '' }; }
  renderVals() {
    const name = this.state.name;
    const valid = /^[a-zA-Z0-9_]{3,20}$/.test(name);
    const taken = ['ugly', 'cash', 'admin', 'uglycash'].indexOf(name.toLowerCase()) !== -1;
    const ok = valid && !taken;
    let status = '';
    if (name && !valid) status = 'Use 3–20 letters, numbers or underscores';
    else if (taken) status = '$' + name + ' is taken. Try another.';
    else if (ok) status = '$' + name + ' is available';
    return {
      name,
      onName: (e) => this.setState({ name: e.target.value.replace(/\s/g, '') }),
      empty: !name,
      showStatus: !!name,
      status,
      statusColor: ok ? '#0E8A3A' : '#C2185B',
      border: ok ? '#0E8A3A' : (name ? '#E21AE0' : '#FFFFFF'),
      ready: ok,
      notReady: !ok
    };
  }
}

export default function Username() {
  const v = useLogic(Logic);
  return (
    <div style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#F4F4F2", fontFamily: "'Instrument Sans', sans-serif", color: "#0A0A0A", display: "flex", flexDirection: "column", padding: "18px 20px 34px" }}><div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><Link to="/CreateAccount" aria-label="Back" style={{ width: "40px", height: "40px", borderRadius: "20px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg></Link><span style={{ fontSize: "13px", fontWeight: "700", color: "#6B6B66" }}>Step 1 of 4</span></div><h1 style={{ margin: "40px 0 0", textAlign: "center", fontFamily: "'Anton', sans-serif", fontWeight: "400", fontSize: "40px", lineHeight: "1" }}>CREATE YOUR USERNAME</h1><p style={{ margin: "10px 8px 0", textAlign: "center", fontSize: "15px", lineHeight: "1.45", color: "#5E5E5A" }}>This is how people find and pay you on UGLYCASH.</p><label style={{ marginTop: "32px", height: "84px", borderRadius: "24px", background: "#FFFFFF", border: `2px solid ${v.border}`, display: "flex", alignItems: "center", justifyContent: "center", gap: "2px", padding: "0 18px", boxSizing: "border-box" }}><span style={{ fontFamily: "'Anton', sans-serif", fontSize: "34px", color: "#E21AE0" }}>$</span><span style={{ position: "absolute", left: "-9999px" }}>Username</span><input type="text" value={v.name} onChange={v.onName} placeholder="username" maxLength={20} autoComplete="off" style={{ flex: "1", minWidth: "0", border: "0", outline: "none", background: "transparent", fontFamily: "'Anton', sans-serif", fontSize: "34px", color: "#0A0A0A" }} /></label>{v.showStatus ? (<><p style={{ margin: "10px 0 0", textAlign: "center", fontSize: "14px", fontWeight: "600", color: `${v.statusColor}` }}>{`${v.status}`}</p></>) : null}{v.empty ? (<><p style={{ margin: "10px 0 0", textAlign: "center", fontSize: "13px", color: "#6B6B66" }}>3–20 characters · letters, numbers and underscores</p></>) : null}<div style={{ marginTop: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}><p style={{ margin: "0", fontSize: "14px", color: "#6B6B66" }}>{"Already had an account? "}<a href="#" onClick={stop} style={{ fontWeight: "700" }}>Recover it</a></p>{v.ready ? (<><Link to="/FoundUs" style={{ width: "100%", height: "58px", borderRadius: "29px", background: "#0A0A0A", color: "#FFFFFF", fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>Create username</Link></>) : null}{v.notReady ? (<><button type="button" disabled style={{ width: "100%", height: "58px", borderRadius: "29px", border: "0", background: "#CFCFCB", color: "#FFFFFF", font: "700 17px 'Instrument Sans', sans-serif" }}>Create username</button></>) : null}</div></div>
  );
}
