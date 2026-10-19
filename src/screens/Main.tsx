import { Link } from "react-router-dom";

export default function Main() {
  return (
    <Link to="/SkySplash" aria-label="Open Uglycash" style={{ width: "390px", height: "844px", boxSizing: "border-box", background: "#FAFAF7", fontFamily: "'Instrument Sans', sans-serif", color: "#0A0A0A", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textDecoration: "none", position: "relative", overflow: "hidden" }}><span style={{ position: "absolute", top: "18%", left: "50%", width: "520px", height: "520px", marginLeft: "-260px", borderRadius: "50%", background: "radial-gradient(circle, rgba(226,26,224,0.10) 0%, rgba(226,26,224,0) 62%)" }} /><span style={{ fontFamily: "'Anton', sans-serif", fontSize: "78px", lineHeight: "0.95", letterSpacing: "-0.01em", position: "relative" }}>UGLYCASH</span><span style={{ marginTop: "14px", fontFamily: "'Anton', sans-serif", fontSize: "18px", letterSpacing: "0.06em", position: "relative" }}>YOUR BANK WON'T DO THIS</span><span style={{ position: "absolute", bottom: "44px", fontSize: "17px", fontWeight: "600", color: "#8A8A8A" }}>{"a "}<strong style={{ color: "#0A0A0A", fontWeight: "700" }}>Reserve</strong>{" project"}</span></Link>
  );
}
