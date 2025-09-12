import React, { useEffect, useRef } from 'react';
import './CursorFollower.css';

const CursorFollower = () => {
  const cursorFollowerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorFollowerRef.current.style.left = e.pageX + 'px';
      cursorFollowerRef.current.style.top = e.pageY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="cursor-follower" ref={cursorFollowerRef}></div>;
};

export default CursorFollower;
