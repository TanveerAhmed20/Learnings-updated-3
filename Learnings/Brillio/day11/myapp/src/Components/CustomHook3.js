import { useState, useEffect } from "react";

const breakpoints = {
  xxl: 1440,
  xl: 1200,
  lg: 1024,
  md: 768,
  sm: 450,
  xs: 350,
};

const useBreakPoint = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  let breakpoint =
    Object.keys(breakpoints).find((key) => {
      return width >= breakpoints[key];
    }) || "xs";

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { breakpoint, width };
};

export { useBreakPoint };
