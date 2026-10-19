import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Gallery from "./components/Gallery";
import Phone, { useFit } from "./components/Phone";
import { screens } from "./screens";

function Prototype() {
  const { screen: path = "Main" } = useParams();
  const navigate = useNavigate();
  const fit = useFit();
  const [menuOpen, setMenuOpen] = useState(false);

  const index = screens.findIndex((s) => s.path === path);
  const prev = screens[(index - 1 + screens.length) % screens.length];
  const next = screens[(index + 1) % screens.length];

  // Arrow keys step through the screens on a computer.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight") navigate(`/${next.path}`);
      if (e.key === "ArrowLeft") navigate(`/${prev.path}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, next.path, prev.path]);

  useEffect(() => setMenuOpen(false), [path]);

  if (index === -1) return <Navigate to="/screens" replace />;
  const screen = screens[index];
  const { Component } = screen;

  const controls = (
    <>
      <Link to={`/${prev.path}`} aria-label={`Previous screen: ${prev.title}`}>←</Link>
      <Link to="/screens" className="primary">All screens</Link>
      <Link to={`/${next.path}`} aria-label={`Next screen: ${next.title}`}>→</Link>
    </>
  );

  return (
    <div className={fit.mobile ? "stage stage--full" : "stage"}>
      {!fit.mobile && (
        <header className="stage-head">
          <p className="caption">
            <strong>{screen.title}</strong>
            <span>
              {index + 1} / {screens.length} · tap inside the app to move around
            </span>
          </p>
          <nav className="toolbar" aria-label="Prototype">{controls}</nav>
        </header>
      )}

      <Phone screenKey={screen.path} fit={fit}>
        <Component />
      </Phone>

      {fit.mobile && (
        <div className={menuOpen ? "fab fab--open" : "fab"}>
          {menuOpen && <nav className="toolbar toolbar--float" aria-label="Prototype">{controls}</nav>}
          <button type="button" className="fab-btn" aria-expanded={menuOpen} aria-label="Prototype menu" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? "×" : "⋯"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Main" replace />} />
      <Route path="/screens" element={<Gallery />} />
      <Route path="/:screen" element={<Prototype />} />
    </Routes>
  );
}
