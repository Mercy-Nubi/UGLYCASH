import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

const W = 390;
const H = 844;
const MOBILE_BREAKPOINT = 560;

type Fit = { mobile: boolean; scale: number; viewHeight: number };

function measure(): Fit {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (vw < MOBILE_BREAKPOINT) {
    // On a real phone the app fills the screen edge to edge.
    const scale = vw / W;
    return { mobile: true, scale, viewHeight: vh / scale };
  }
  // On larger screens show a normal-sized phone that fits the window height.
  const scale = Math.min(1, (vh - 120) / H, (vw - 40) / W);
  return { mobile: false, scale, viewHeight: H };
}

export function useFit(): Fit {
  const [fit, setFit] = useState<Fit>(measure);
  useEffect(() => {
    const onResize = () => setFit(measure());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return fit;
}

/**
 * A phone-sized viewport. Tall screens (like Home) scroll inside it,
 * and the app's bottom navigation stays pinned, like a real app.
 */
export default function Phone({ screenKey, fit, children }: { screenKey: string; fit: Fit; children: ReactNode }) {
  const scroller = useRef<HTMLDivElement>(null);

  // Start every screen at the top, like opening a new page in an app.
  useLayoutEffect(() => {
    scroller.current?.scrollTo(0, 0);
  }, [screenKey]);

  const { mobile, scale, viewHeight } = fit;

  return (
    <div className={mobile ? "device device--full" : "device"} style={{ width: W * scale, height: viewHeight * scale }}>
      <div className="phone" style={{ width: W, height: viewHeight, transform: `scale(${scale})` }}>
        <div className="phone-screen" ref={scroller}>
          <div key={screenKey} className="screen-enter">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
