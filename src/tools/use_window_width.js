import React, { useState, useEffect } from 'react';

////
// returns the width of the screen. can be used for responsive designs
////

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const handleSize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleSize);
        return () => {
            window.removeEventListener("resize", handleSize);
        }
    });
    return width;
}