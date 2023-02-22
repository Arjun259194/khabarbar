import { LegacyRef, useEffect, useRef } from "react";

export default function useSmoothScroll<T>(): LegacyRef<T> {
  const elRef = useRef<T>(null);
  useEffect(() => {
    const el: any = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}