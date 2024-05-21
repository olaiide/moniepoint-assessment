// // import { useState, useEffect, useRef } from "react";

// // const Counter = ({ lastCount, count, setCount }) => {
// //   const counterRef = useRef(null);

// //   useEffect(() => {
// //     const counter = setInterval(() => {
// //       if (count < lastCount) {
// //         setCount((prevCount) => prevCount + 1);
// //       } else {
// //         clearInterval(counter);
// //       }
// //     }, 30);

//     return () => clearInterval(counter);
//   }, [count]);

//   return <span style={{ fontSize: "27px" }}>{count}</span>;
// };

// export default Counter;

import React, { useEffect, useRef, useState } from "react";

const Counter = ({ target, sale }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const counterElement = counterRef.current;

    const animateCounter = () => {
      const duration = 2000; // Duration of the animation in milliseconds
      const step = target / (duration / 16); // Calculate step based on 60fps

      let currentCount = 0;

      const updateCounter = () => {
        currentCount += step;
        if (currentCount < target) {
          setCount(Math.ceil(currentCount));
          requestAnimationFrame(updateCounter);
        } else {
          setCount(target);
        }
      };

      updateCounter();
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter();
          observer.unobserve(entry.target); // Stop observing once animation starts
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust threshold as needed
    });

    observer.observe(counterElement);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return (
    <>
      {sale ? (
        <span
          ref={counterRef}
          className="counter"
          style={{ fontSize: "1.2rem" }}
        >
          {count}
        </span>
      ) : (
        <span
          ref={counterRef}
          className="counter"
          style={{ fontSize: "1.4rem" }}
        >
          {count}
        </span>
      )}
    </>
  );
};

export default Counter;
