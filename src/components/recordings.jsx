import React, { useState } from "react";

export const Recordings = ({ recordList, playSaved }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return recordList.map((list, idx) => {
    return (
      <li
        key={idx}
        onClick={() => {
          setIsPlaying(!isPlaying);
          playSaved(list, isPlaying);
        }}
      >
        {` play list ${idx + 1} `}
      </li>
    );
  });
};
