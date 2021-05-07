import React from "react";
import { PadPreview } from "./PadPreview";

export const PadList = ({ pads, togglePad }) => {
  return (
    <section className="pad-list">
      {pads.map((pad) => {
        return <PadPreview togglePad={togglePad} key={pad.id} pad={pad} />;
      })}
    </section>
  );
};
