import React from "react";

export default function ClearButton(clear) {
    
  return (
    <button type="button" className="btn success-btn" onClick={() => clear.clear()}>
      <span> Delete completed tasks </span>
    </button>
  );
}
