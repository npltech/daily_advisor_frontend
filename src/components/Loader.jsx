import React from 'react';
import { useSelector } from "react-redux";

const Loader = () => {
    const isLoading = useSelector((state) => state.loader.isLoading);

    if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-150">
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "6px solid #3b82f6",
          borderTopColor: "transparent",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Loader