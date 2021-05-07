import React, { useEffect, useState } from "react";
import { PadList } from "./components/PadList";
import { PadService } from "./services/PadService";
import { Recordings } from "./components/recordings";

export const PadApp = () => {
  const [pads, setPads] = useState([]);
  const [isPlayed, setIsPlayed] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [recordList, setRecordList] = useState([]);

  const loadPads = PadService.query();

  useEffect(() => {
    setPads(loadPads);
  }, []);

  //operate the sound function
  useEffect(() => {
    playSounds(playlist);
  }, [playlist, isPlayed]);

  //enable the sound if exist.
  const playSounds = (list) => {
    console.log(list);
    if (!list.length) return;
    if (isPlayed) {
      list.forEach((pad) => {
        pad.audio.play();
        pad.audio.playbackRate = 1.2;
      });
    } else {
      list.forEach((pad) => {
        pad.audio.pause();
      });
    }
  };

  //play the saved songs
  const playSaved = (list, isPlaying) => {
    console.log("list", list);
    console.log("isPlayed", isPlayed);
    if (!list.length) return;
    if (isPlaying) {
      list.forEach((pad) => {
        pad.audio.play();
        pad.audio.playbackRate = 1.2;
      });
    } else {
      list.forEach((pad) => {
        pad.audio.pause();
      });
    }
  };

  //pause and reset the pads while clicking the pause button
  const resetPlaylist = () => {
    playlist.forEach((pad) => {
      pad.audio.pause();
    });
    let newPads = [...pads];
    newPads.map((pad) => {
      return (pad.isActive = false);
    });
    setPads(newPads);
    setIsPlayed(false);
    setPlaylist([]);
  };

  //activate the pad and play the music while play is on.
  const togglePad = (id) => {
    if (!isPlayed) return;
    let currPad = PadService.findById(id);
    // active/not active while clicking.
    currPad.isActive = !currPad.isActive;
    let newPads = PadService.save(currPad);
    setPads([...newPads]);
    updatePlayList(currPad);
  };

  //update the array of list in order to play them while playing the songs(box to operate above.).
  const updatePlayList = (currPad) => {
    let newList = [...playlist];
    if (currPad.isActive) {
      newList.push(currPad);
      setPlaylist(newList);
    } else {
      let filteredList = newList.filter((pad) => {
        return pad.id !== currPad.id;
      });
      setPlaylist(filteredList);
    }
  };

  const saveRecord = () => {
    let newList = [...recordList];
    newList.push([...playlist]);
    setRecordList(newList);
  };

  return (
    <section className="pad-app">
      <h1>Machine Looper - Moveo Task </h1>
      <div className="flex-container">
        <button onClick={() => setIsPlayed(!isPlayed)}>
          <i className={isPlayed ? "fas fa-pause" : "fas fa-play"}></i>
        </button>
        <button onClick={() => resetPlaylist()}>
          <i className="fas fa-stop"></i>
        </button>
        <button onClick={() => saveRecord()}>
          <i className="fas fa-record-vinyl"></i>
        </button>
      </div>
      <PadList togglePad={togglePad} pads={pads} />
      <Recordings recordList={recordList} playSaved={playSaved} />
    </section>
  );
};
