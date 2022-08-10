// import { useEffect, useState } from "react";

// import { useEffect } from "react";

const breakpoints = {

    xs:320,
    sm:450,
    md:768,
    lg:1024,
    xl:1440,
    xxl:1920,
}
const useBreakPoint  = () => {
    
    const width = window.innerWidth;

    const breakpoint = Object.keys(breakpoints).filter((key)=>breakpoints[key] <= width);
    const closest = breakpoint.pop();
    console.log("closest breakpoint: "+closest);
    // useEffect(() => {console.log(width) },[width]);

    return {breakpoint,width};

}

export {useBreakPoint}