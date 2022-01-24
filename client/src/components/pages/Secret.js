import React, { useEffect } from "react";

const Secret = () => {
  useEffect(() => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }, []);
  return <div className="u-transparent u-textCenter">im so sorry</div>;
};

export default Secret;
