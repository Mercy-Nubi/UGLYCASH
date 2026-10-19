import { useEffect, useReducer, useRef } from "react";

/**
 * Tiny class-based state holder used by the screens.
 * Each screen keeps its behaviour (state, handlers, timers) in a `Logic` class
 * and renders from the values returned by `renderVals()`.
 */
export class DCLogic {
  // Screens add their own fields (timers, helpers) freely.
  [key: string]: any;
  props: Record<string, any>;
  state: Record<string, any> = {};
  _update: () => void = () => {};

  constructor(props: Record<string, any> = {}) {
    this.props = props;
  }

  setState(patch: Record<string, any>): void {
    this.state = { ...this.state, ...patch };
    this._update();
  }

  componentDidMount?(): void;
  componentWillUnmount?(): void;
  renderVals(): Record<string, any> {
    return {};
  }
}

/** Creates one Logic instance per mounted screen and re-renders on setState. */
export function useLogic<T extends DCLogic>(Cls: new (props: Record<string, any>) => T): Record<string, any> {
  const [, force] = useReducer((n: number) => n + 1, 0);
  const ref = useRef<T | null>(null);
  if (!ref.current) {
    ref.current = new Cls({});
    ref.current._update = force;
  }
  useEffect(() => {
    const inst = ref.current!;
    inst._update = force;
    inst.componentDidMount?.();
    return () => inst.componentWillUnmount?.();
  }, []);
  return ref.current.renderVals();
}
