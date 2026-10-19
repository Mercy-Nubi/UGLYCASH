import { Link } from "react-router-dom";

export default function SkySplash() {
  return (
    <Link to="/Intro" className="sky" aria-label="Continue" style={{ width: "390px", height: "844px", boxSizing: "border-box", fontFamily: "'Instrument Sans', sans-serif", color: "#0A0A0A", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textDecoration: "none", position: "relative", overflow: "hidden" }}><span style={{ fontFamily: "'Anton', sans-serif", fontSize: "78px", lineHeight: "0.95", letterSpacing: "-0.01em" }}>UGLYCASH</span><span style={{ marginTop: "14px", fontFamily: "'Anton', sans-serif", fontSize: "18px", letterSpacing: "0.06em", color: "#0B2A4A" }}>YOUR BANK WON'T DO THIS</span><span style={{ position: "absolute", bottom: "44px", fontSize: "17px", fontWeight: "600", color: "#0B2A4A" }}>{"a "}<strong style={{ color: "#0A0A0A", fontWeight: "700" }}>Reserve</strong>{" project"}</span></Link>
  );
}
