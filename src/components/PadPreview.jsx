import React from "react";

//rendering all pad loops
export const PadPreview = ({ pad, togglePad }) => {
  return (
    <section className="pad-preview">
      <div
        onClick={() => togglePad(pad.id)}
        className={pad.isActive ? "pad active" : "pad"}
      ></div>
    </section>
  );
};
