import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;

    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) {
        return;
      }
      if (
        !(el.scrollLeft === 0 && e.deltaY < 0) &&
        !(
          el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
          e.deltaY > 0
        )
      ) {
        e.preventDefault();
      }

      el.scrollLeft += e.deltaY / 1.5;
    };

    if (el) {
      el.addEventListener("wheel", onWheel, { passive: false });
    }

    return () => {
      if (el) {
        el.removeEventListener("wheel", onWheel);
      }
    };
  }, []);

  return elRef;
}
