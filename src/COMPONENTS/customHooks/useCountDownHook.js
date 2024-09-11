import React, { useEffect, useState } from "react";

function useCountDown() {
  const [secondsLeft, setSeconds] = useState(0);
  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }
    const timeout = setTimeout(() => {
      setSeconds(secondsLeft - 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [secondsLeft]);
  function start(seconds) {
    setSeconds(Number(seconds));
  }
  return [secondsLeft, start];
}

export default useCountDown;
